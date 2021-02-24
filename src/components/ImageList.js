import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image}/>;
    // images.id comes from a property that is send back to us via unsplash

  });
  return <div className="image-list">{images}</div>
};

export default ImageList;

