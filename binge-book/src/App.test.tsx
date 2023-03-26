import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from 'App';
import { FRONTEND_ENDPOINTS } from 'config';


test('Route links', () => {
  const { getAllByText } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  /* Expected routes being rendered */
  interface expectedEndpoint {name: string, route: string};
  const expectedEndpoints: Array<expectedEndpoint> = [
    {name: "Home", route: FRONTEND_ENDPOINTS.HOMEPAGE},
    {name: "Movies", route: FRONTEND_ENDPOINTS.MOVIES},
    {name: "Series", route: FRONTEND_ENDPOINTS.SERIES},
  ]
  
  /* Unpacking helps with identifying source index of the problem */
  expect(getAllByText(expectedEndpoints[0].name)[0].closest('a')).toHaveAttribute(
    "href", expectedEndpoints[0].route);
  expect(getAllByText(expectedEndpoints[1].name)[0].closest('a')).toHaveAttribute(
    "href", expectedEndpoints[1].route);
  expect(getAllByText(expectedEndpoints[2].name)[0].closest('a')).toHaveAttribute(
    "href", expectedEndpoints[2].route);
});
