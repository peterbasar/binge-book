import React from 'react';
import './EntityCard.css';
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
import { MISSING_IMAGE } from 'Assets/Images';
/* Components */
import EntityModal from 'Components/EntityModal/EntityModal';
import UnhideOnViewportWrapper from 'Animations/UnhideOnViewportWrapper';


interface EntityCardInterface {
  item: dataItemInterface
}


const EntityCard = ({item}: EntityCardInterface) => {
  return (
    <UnhideOnViewportWrapper>
      <EntityModal item={item}>
        <div  className='entitycard-card-wrapper'
        >
          <img  onError={(e) => {
                  (e.target as HTMLImageElement).src=MISSING_IMAGE;
                }} 
                src={item.images['Poster Art'].url}
                alt={`Poster of ${item.title}`}
          />
          <div className='entitycard-card-overlay'>
            <h5>{item.title}</h5>
            <p>{item.releaseYear}</p>
          </div>
        </div>              
      </EntityModal>
    </UnhideOnViewportWrapper>
  );
}
export default EntityCard;