import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import Header from 'Components/Header/Header';
import { COPYRIGHT, FRONTEND_ENDPOINTS, OTHER_LINKS } from 'config';
import { APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE } from 'Assets/Images';


test('Header: check links in desktop and mobile navigation', async () => {
  const { container } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  /* Get and check desktop and mobile navigation */
  const desktopNavigation = container.querySelectorAll(".header-desktop-navigation")[0];
  expect(desktopNavigation).toBeInTheDocument();
  const mobileNavigation = container.querySelectorAll(".header-mobile-navigation")[0];
  expect(mobileNavigation).toBeInTheDocument();
    
  /* They should both have exatcly 3 children */
  expect(desktopNavigation.children).toHaveLength(3);
  expect(mobileNavigation.children).toHaveLength(3);

  /* Desktop: check text of these children and their links */
  const desktopHomeLink = await within(desktopNavigation as HTMLElement).findByText("Home");
  expect(desktopHomeLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.HOMEPAGE);
  const desktopMoviesLink = await within(desktopNavigation as HTMLElement).findByText("Movies");
  expect(desktopMoviesLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.MOVIES);
  const desktopSeriesLink = await within(desktopNavigation as HTMLElement).findByText("Series");
  expect(desktopSeriesLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.SERIES);

  /* Mobile: check text of these children and their links */
  const mobileHomeLink = await within(mobileNavigation as HTMLElement).findByText("Home");
  expect(mobileHomeLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.HOMEPAGE);
  const mobileMoviesLink = await within(mobileNavigation as HTMLElement).findByText("Movies");
  expect(mobileMoviesLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.MOVIES);
  const mobileSeriesLink = await within(mobileNavigation as HTMLElement).findByText("Series");
  expect(mobileSeriesLink).toHaveAttribute("href", FRONTEND_ENDPOINTS.SERIES);
});
