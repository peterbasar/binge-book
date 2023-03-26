import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, within } from '@testing-library/react';
import Carousel from 'Components/Carousel/Carousel';
import { COPYRIGHT, FRONTEND_ENDPOINTS, OTHER_LINKS } from 'config';
import { APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE } from 'Assets/Images';
import { testData } from 'Components/DataManager/tests/data';
import { dataItemInterface } from 'Components/DataManager/DataManager.store';


test('Carousel: title, show more, children count', async () => {
  const carouselTitle = "Mock carousel title";
  const carouselUrl = "https://mock-url.com";
  const carouselItems: Array<dataItemInterface> = [testData[0], testData[1]];

  const { container, findByText, getByTestId } = render(
    <BrowserRouter>
      <Carousel 
        title={carouselTitle}
        linkUrl={carouselUrl}
        items={carouselItems}
      />
    </BrowserRouter>
  );

  /* Carousel 'title' and 'show more' exists */
  expect(await findByText(carouselTitle)).toBeInTheDocument();
  expect(await findByText("show more")).toBeInTheDocument();

  /* Get list of all the items in the Carousel, count them */
  const carouselList = getByTestId("carousel-list");
  expect(carouselList.children).toHaveLength(carouselItems.length)
});
