import React, { useState } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Gallery = (props) => {
    const {title, images} = props;
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index === images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const prevSlide = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    }

    return (
        <div className='gallery'>
            <div className='gallery__header'>
                <p>{title}</p>
            </div>
            <div className='slider'>
                <div className='slider__chevron' onClick={prevSlide}><MdOutlineNavigateBefore /></div>
                    {
                        !images ? <p>no images loaded</p> :
                        <>
                            <img src={images[index].url} alt={images[index].alt} />
                        </>
                    }
                <div className='slider__chevron' onClick={nextSlide}><MdOutlineNavigateNext /></div>
            </div>
        </div>
    );
};

export default Gallery;
