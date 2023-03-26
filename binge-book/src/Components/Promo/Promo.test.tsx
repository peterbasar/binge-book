import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Promo from 'Components/Promo/Promo';


test('Promo: title, show more, children count', async () => {
  const mockPromoImageUrl = "https://mock-promo-image.com/";
  const mockPromoLinkUrl = "https://mock-promo-url.com/";
  const mockPromoTitle = "Mocked Promo Title"

  const { rerender, container, findByText, getByTestId } = render(
    <BrowserRouter>
      <Promo
        imageUrl={mockPromoImageUrl}
        linkUrl={mockPromoLinkUrl}
        title={mockPromoTitle}
      />
    </BrowserRouter>
  );

  /* Contains title */
  expect(await findByText(mockPromoTitle)).toBeInTheDocument();

  /* Contains link that has valid url */
  const anchor = getByTestId("promo-anchor");
  expect(anchor).toHaveAttribute("href", mockPromoLinkUrl);
  
  /* Contains image with correct url */
  const image = getByTestId("promo-image");
  expect(image).toHaveAttribute("src", mockPromoImageUrl);
});
