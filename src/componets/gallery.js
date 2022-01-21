import React from 'react';
import Slider from './slider';

const Gallery = (props) => {
    const {title, images} = props;
    const menuItems = ['галерея', 'учебные материалы'];

    return (
        <div className='gallery'>
            <div className='gallery__header'>
                <div className='gallery__title'>
                    <p>{title}</p>
                </div>
                <div className='gallery__menu'>
                    <ul className='gallery__menu-list'>
                        {
                            menuItems.map(item => (
                            <li className='gallery__menu-list-item'>
                                <span>{item}</span>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <Slider images={images} />
        </div>
            
    );
};

export default Gallery;
