import React from 'react';
import { render } from '@testing-library/react';
import EntityCard from 'Components/EntityCard/EntityCard';
import { testData } from 'Components/DataManager/tests/data';


test('EntityCard: contains correct image, title, release year', async () => {
  const { container, findByText } = render(
    <EntityCard 
      item={testData[0]}
    />
  );

  /* Contains img with correct source */
  const entityCardImage = container.querySelectorAll("img")[0];
  expect(entityCardImage).toBeInTheDocument();
  expect(entityCardImage).toHaveAttribute("src", testData[0].images['Poster Art'].url);

  /* Container title and release year */
  expect(await findByText(testData[0].title)).toBeInTheDocument();
  expect(await findByText(testData[0].releaseYear)).toBeInTheDocument();
});
