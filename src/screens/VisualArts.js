import React from 'react';
import Gallery from '../componets/gallery';
import { images } from '../data/visual_arts';

const VisualArts = () => {

    return (
        <Gallery title='Язык изобразительного искусства' images={images} />
    );
};

export default VisualArts;