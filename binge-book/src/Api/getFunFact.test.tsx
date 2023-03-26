import getFunFact from "./getFunFact";
import { API_ENDPOINTS } from "config";


interface mockXmlRequest {
  status: number,
  responseText: string,
}
const mockXmlRequest = ({status, responseText}: mockXmlRequest): Partial<XMLHttpRequest> => {
  /* Mock XMLHttpRequest */
  const xhrMock: Partial<XMLHttpRequest> = {
    open: jest.fn(),
    send: jest.fn(),
    setRequestHeader: jest.fn(),
    readyState: 4,
    status: status,
    responseText: responseText,
  };
  jest.spyOn(window, 'XMLHttpRequest').mockImplementation(() => xhrMock as XMLHttpRequest);
  return xhrMock;
}


test('getFunFact() functionality - valid request', () => {
  /* Mock XMLHttpRequest */
  let mockedStatus: number = 200;
  let mockedResponseText: string = "mocked response text"
  const xhrMock = mockXmlRequest({
    status: mockedStatus,
    responseText: mockedResponseText,
  })
  
  /* Mock passed functions */
  const setStatus = jest.fn()
  const setResponse = jest.fn()

  /* Call and expect */
  let numArg = 1;
  getFunFact({
    num: numArg,
    setStatus: setStatus,
    setResponse: setResponse,
  }).then(() => {

    // open() - Expect valid arguments
    expect(xhrMock.open).toBeCalledWith(
      'GET',
      `${API_ENDPOINTS.NUMBER_FACTS}${numArg}/year`,
      true,
    )
    
    // send() - Expect to be called once
    expect(xhrMock.send).toBeCalledTimes(1);

    // Expect setStatus() and setResponse() arguments
    expect(setStatus).toBeCalledWith(mockedStatus);
    expect(setResponse).toBeCalledWith(mockedResponseText);
  });
  /* Trigger the `onreadystatechange` event and expect setStatus, setResponse to be caleld  */
  (xhrMock.onreadystatechange as EventListener)(new Event(''));

});


test('getFunFact() functionality - invalid request', () => {
  /* Mock XMLHttpRequest */
  let mockedStatus: number = 400;
  const xhrMock = mockXmlRequest({
    status: mockedStatus,
    responseText: "",
  })
  
  /* Mock passed functions */
  const setStatus = jest.fn()
  const setResponse = jest.fn()

  /* Call and expect */
  let numArg = 1;
  getFunFact({
    num: numArg,
    setStatus: setStatus,
    setResponse: setResponse,
  }).then(() => {

    // open() - Expect valid arguments
    expect(xhrMock.open).toBeCalledWith(
      'GET',
      `${API_ENDPOINTS.NUMBER_FACTS}${numArg}/year`,
      true,
    )
    
    // send() - Expect to be called once
    expect(xhrMock.send).toBeCalledTimes(1);

    // Expect setStatus() and setResponse() arguments
    expect(setStatus).toBeCalledWith(mockedStatus);
  });
  /* Trigger the `onreadystatechange` event and expect setStatus, setResponse to be caleld  */
  (xhrMock.onreadystatechange as EventListener)(new Event(''));
});