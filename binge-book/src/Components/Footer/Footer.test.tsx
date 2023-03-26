import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Footer from 'Components/Footer/Footer';
import { COPYRIGHT, FRONTEND_ENDPOINTS, OTHER_LINKS } from 'config';
import { APPSTORE_IMAGE, GOOGLEPLAY_IMAGE, MICROSOFT_IMAGE } from 'Assets/Images';


test('Footer: app stores', () => {
  const { getAllByText, getByAltText } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  /* Check store items */
  const appleAppStore = getByAltText("Apple app store");
  expect(appleAppStore).toBeInTheDocument();
  const playStore = getByAltText("Google play store");
  expect(playStore).toBeInTheDocument();
  const microsoftAppStore = getByAltText("Microsoft app store");
  expect(microsoftAppStore).toBeInTheDocument();
  
  /* Check if they have correct source image */
  expect(appleAppStore).toHaveAttribute("src", APPSTORE_IMAGE)
  expect(playStore).toHaveAttribute("src", GOOGLEPLAY_IMAGE)
  expect(microsoftAppStore).toHaveAttribute("src", MICROSOFT_IMAGE)

  /* Check if they have correct links */
  expect(appleAppStore.closest('a')).toHaveAttribute("href", OTHER_LINKS.APPSTORE_LINK)
  expect(playStore.closest('a')).toHaveAttribute("href", OTHER_LINKS.PLAYSTORE_LINK)
  expect(microsoftAppStore.closest('a')).toHaveAttribute("href", OTHER_LINKS.MICROSOFTSTORE_LINK)
});


test('Footer: social links', () => {
  const { container, getByAltText } = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  /* Find icons */
  const facebookIcon = Array.from(container.querySelectorAll('.footer-facebook-icon'))[0];
  expect(facebookIcon).toBeInTheDocument();
  const twitterIcon = Array.from(container.querySelectorAll('.footer-twitter-icon'))[0];
  expect(twitterIcon).toBeInTheDocument();
  const instagramIcon = Array.from(container.querySelectorAll('.footer-instagram-icon'))[0];
  expect(instagramIcon).toBeInTheDocument();

  /* Check if they have correct links */
  expect(facebookIcon.closest('a')).toHaveAttribute("href", OTHER_LINKS.FACEBOOK_LINK)
  expect(twitterIcon.closest('a')).toHaveAttribute("href", OTHER_LINKS.TWITTER_LINK)
  expect(instagramIcon.closest('a')).toHaveAttribute("href", OTHER_LINKS.INSTAGRAM_LINK)
});


test('Footer: other links and copyright', () => {
  const { getByText, getByTestId} = render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );

  /* Find links */
  const footerHome = getByTestId("footer-home");
  expect(footerHome).toBeInTheDocument();
  const footerTermsAndConditions = getByTestId("footer-terms-and-conditions");
  expect(footerTermsAndConditions).toBeInTheDocument();
  const footerPrivacyPolicy = getByTestId("footer-privacy-policy");
  expect(footerPrivacyPolicy).toBeInTheDocument();
  const footerCollectionStatement = getByTestId("footer-collection-statement");
  expect(footerCollectionStatement).toBeInTheDocument();
  const footerHelp = getByTestId("footer-help");
  expect(footerHelp).toBeInTheDocument();
  const footerManageAccount = getByTestId("footer-manage-account");
  expect(footerManageAccount).toBeInTheDocument();

  /* Check if they have correct links */
  expect(footerHome.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.HOMEPAGE);
  expect(footerTermsAndConditions.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.TERMS_AND_CONDITIONS);
  expect(footerPrivacyPolicy.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.PRIVACY_POLICY);
  expect(footerCollectionStatement.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.COLLECTION_STATEMENT);
  expect(footerHelp.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.HELP);
  expect(footerManageAccount.closest('a')).toHaveAttribute("href", FRONTEND_ENDPOINTS.MANAGE_ACCOUNT);

  /* Check if copyright text exists */
  expect(getByText(COPYRIGHT)).toBeInTheDocument();
});

