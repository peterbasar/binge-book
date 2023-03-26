import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, within } from '@testing-library/react';
import ListSelect from 'Components/ListSelect/ListSelect';
import { LIST_MODES } from 'Components/List/List.store';


test('ListSelect: title, show more, children count', async () => {
  let activeOption: string = LIST_MODES.yearDesc;
  const options = Object.values(LIST_MODES);
  const handleChange = jest.fn();

  const toRender = (activeOption: string) => (
    <BrowserRouter>
      <ListSelect 
        activeOption={activeOption}
        options={options}
        handleChange={handleChange}
      />
    </BrowserRouter>
  )
  const { rerender, container, findByText, getByTestId } = render(toRender(activeOption));

  /* Get list that contains current selection */
  const selectList = getByTestId("list-select-list");
  
  /* Check if current mode is being shown */
  /* Mode 1: yearDesc */
  expect(within(selectList).getByText(activeOption));

  /* Mode 2: yearAsc */
  activeOption = LIST_MODES.yearAsc;
  rerender(toRender(activeOption));
  expect(within(selectList).getByText(activeOption));

  /* Mode 3: alphaDesc */
  activeOption = LIST_MODES.alphaDesc;
  rerender(toRender(activeOption));
  expect(within(selectList).getByText(activeOption));

  /* Mode 4: alphaAsc */
  activeOption = LIST_MODES.alphaAsc;
  rerender(toRender(activeOption));
  expect(within(selectList).getByText(activeOption));

  /* Error Mode */
  /* Disable print of expected error: 'MUI: You have provided an out-of-range value' */
  console = {...console, error: jest.fn(), warn: jest.fn()}
  activeOption = "Non existend mode";
  rerender(toRender(activeOption));
  expect(() => within(selectList).getByText(activeOption)).toThrow();
});
