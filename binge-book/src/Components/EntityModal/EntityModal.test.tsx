import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, act, within } from '@testing-library/react';
import EntityModal from 'Components/EntityModal/EntityModal';
import { testData } from 'Components/DataManager/tests/data';


test('EntityModal - off by default, should throw', () => {
  const { getByText } = render(
    <BrowserRouter>
      <EntityModal
        item={testData[0]}
      >
        <div data-testid="entity-modal-children"></div>
      </EntityModal>
    </BrowserRouter>
  );
  
  /* Not expecting to find */
  expect(() => getByText(testData[0].title)).toThrow();
});


test('EntityModal - opens on click, contents', () => {
  /*  Disable error for this test:
      "Warning: An update to EntityModal inside a test was not wrapped in act(...)." */
  console = {...console, error: jest.fn()};
  
  const toRender = (
    <div>
      <EntityModal
        item={testData[0]}
      >
        <div data-testid="entity-modal-children"></div>
      </EntityModal>
    </div>
  )
  const { rerender, container, getByText, getAllByText, getByTestId } = render(toRender);  
  
  /* Turn on modal */
  act(() => {fireEvent.click(getByTestId("entity-modal-children"))})
  /* Rerender after click */
  rerender(toRender);

  /* Check if title, year, type, description and img url are rendered */
  expect(getByText(testData[0].title)).toBeInTheDocument();

  let prgType: string = testData[0].programType;
  prgType = prgType[0].toUpperCase() + prgType.slice(1);
  expect(getByText(`${prgType}, ${testData[0].releaseYear}`)).toBeInTheDocument();
  
  expect(getAllByText(testData[0].description)[0]).toBeInTheDocument();

  /* Turn off modal */
  act(() => {fireEvent.click(getByTestId("entitymodal-close-icon"))})
  /* Rerender after click */
  rerender(toRender);
  /* Title not rendered */
  expect(() => getByText(testData[0].title)).toThrow();
});
