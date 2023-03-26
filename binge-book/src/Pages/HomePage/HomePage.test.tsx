import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, within, renderHook } from '@testing-library/react';
import { useInitializeDataManager } from 'Components/DataManager/DataManager';
import { testData } from 'Components/DataManager/tests/data';
import HomePage from './HomePage';


test('Homepage: carousels and its contents', () => {
  /* Initialize 'useInitializeDataManager' */
  renderHook(() => useInitializeDataManager(testData));
  
  const { getByText } = render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

  /* Check if Latest Movies exists and also contains 'show more' */
  let wrapper = getByText("Latest Movies").parentElement;
  expect(wrapper).toBeInTheDocument();
  if (wrapper != null){
    expect(within(wrapper).getByText("show more"));
  }

  /* Check if there are items in the list */
  const moviesToCheck: Array<string> = ["Better Call Saul", "No Activity"]
  if (wrapper != null && wrapper.parentElement != null){
    within(wrapper.parentElement).getAllByText(moviesToCheck[0]);
    within(wrapper.parentElement).getAllByText(moviesToCheck[1]);
  }
  
  /* Check if Latest Series exists and also contains 'show more' */
  wrapper = getByText("Latest Series").parentElement;
  expect(wrapper).toBeInTheDocument();
  if (wrapper != null){
    expect(within(wrapper).getByText("show more"));
  }
  /* Check if there are items in the list */
  const seriesToCheck: Array<string> = ["Billions", "Wolf Creek"]
  if (wrapper != null && wrapper.parentElement != null){
    within(wrapper.parentElement).getAllByText(seriesToCheck[0]);
    within(wrapper.parentElement).getAllByText(seriesToCheck[1]);
  }
});