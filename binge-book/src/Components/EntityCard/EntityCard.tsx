import React from 'react';
import './EntityCard.css';
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
import { MISSING_IMAGE } from 'Assets/Images';
/* Components */
import EntityModal from 'Components/EntityModal/EntityModal';


interface EntityCardInterface {
  item: dataItemInterface
}


const EntityCard = ({item}: EntityCardInterface) => {
  return (
    <div className='entitycard-card-wrapper'>
      <img  onError={(e) => {
              (e.target as HTMLImageElement).src=MISSING_IMAGE;
            }} 
            src={item.images['Poster Art'].url}
      />
      <div className='entitycard-card-overlay'>
        <h5>{item.title}</h5>
        <p>{item.releaseYear}</p>
        <EntityModal item={item} />
      </div>
    </div>  
  );
}
export default EntityCard;