import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, within, renderHook, getByTestId, act } from '@testing-library/react';
import { useInitializeDataManager } from 'Components/DataManager/DataManager';
import { testData } from 'Components/DataManager/tests/data';
import MoviesPage from './MoviesPage';
import { useListStore, LIST_MODES } from 'Components/List/List.store';


test('MoviesPage: header included', () => {
  const { container } = render(
    <BrowserRouter>
      <MoviesPage />
    </BrowserRouter>
  );
  expect(container.querySelector('nav')).toBeInTheDocument();
});


test('MoviesPage: footer included', () => {
  const { container } = render(
    <BrowserRouter>
      <MoviesPage />
    </BrowserRouter>
  );
  expect(container.querySelector('footer')).toBeInTheDocument();
});


test('MoviesPage: list, filter modes and list contents', async () => {
  /* Initialize 'useInitializeDataManager' */
  renderHook(() => useInitializeDataManager(testData));

  /* Get filter mode and its setter  */
  const listMode = renderHook(() => useListStore((state) => state.listMode)).result.current;
  const setListMode = renderHook(() => useListStore((state) => state.setListMode)).result.current;
  
  const { getByTestId } = render(
    <BrowserRouter>
      <MoviesPage />
    </BrowserRouter>
  );

  /* Check if 'List' exists and also contains 'Browsing Movies' ,'Filter' */
  let wrapper = getByTestId("list");
  expect(wrapper).toBeInTheDocument();
  if (wrapper != null){
    expect(within(wrapper).getByText("Browsing Movies"));
    expect(within(wrapper).getByText("Filter"));

    /* Check if there are items in the list */
    /* Check this for every filter mode */

    /* MODE: yearDesc */
    act(() => setListMode(LIST_MODES.yearDesc)) 
    let foundItems = Array.from(wrapper.querySelectorAll('.entitycard-card-wrapper'));
    /* Check if the first item year is 2015, the second one 2014 */
    expect(foundItems).toHaveLength(2);
    await within(foundItems[0] as HTMLElement).findByText("2015")
    await within(foundItems[1] as HTMLElement).findByText("2014")

    /* MODE: yearAsc */
    act(() => setListMode(LIST_MODES.yearAsc)) 
    foundItems = Array.from(wrapper.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(2);
    await within(foundItems[0] as HTMLElement).findByText("2014")
    await within(foundItems[1] as HTMLElement).findByText("2015")

    /* MODE: alphaDesc */
    act(() => setListMode(LIST_MODES.alphaDesc)) 
    foundItems = Array.from(wrapper.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(2);
    await within(foundItems[0] as HTMLElement).findByText("Better Call Saul")
    await within(foundItems[1] as HTMLElement).findByText("No Activity")

    /* MODE: alphaAsc */
    act(() => setListMode(LIST_MODES.alphaAsc)) 
    foundItems = Array.from(wrapper.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(2);
    await within(foundItems[0] as HTMLElement).findByText("No Activity")
    await within(foundItems[1] as HTMLElement).findByText("Better Call Saul")    
  }
});
