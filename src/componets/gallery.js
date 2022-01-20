import React, { useState } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore, MdOutlineOpenInFull } from "react-icons/md";

const Gallery = (props) => {
    const {title, images} = props;
    const [index, setIndex] = useState(0);
    const [showTipContent, setShowTipContent] = useState(false);
    const menuItems = ['галерея', 'учебные материалы'];

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
                <div className='gallery__title'>
                    <p>{title}</p>
                </div>
                <div className='gallery__menu'>
                <ul className='gallery__menu-list'>
                    {
                        menuItems.map(item => (
                        <li className='gallery__menu-list-item'>
                            <a href='#!'>{item}</a>
                        </li>
                        ))
                    }
                </ul>
            </div>
            </div>
            <div className='slider'>
                <div className='slider__chevron' onClick={prevSlide}>
                    <MdOutlineNavigateBefore />
                </div>
                    <div className='slider__pic'>
                        {
                            !images ? <p>no images loaded</p> :
                            <>
                                <img src={images[index].url} alt={images[index].alt} />
                            </>
                        }
                    </div>
                <div className='slider__chevron' onClick={nextSlide}>
                    <MdOutlineNavigateNext />
                </div>
                <div className={showTipContent ? 'slider__tip slider__tip_active' : 'slider__tip'}>
                    <div className='slider__tip-preview'>
                        <div className='slider__tip-chevron' onClick={() => setShowTipContent(!showTipContent)}>
                            <MdOutlineOpenInFull />
                        </div>
                        <div className='slider__tip-title'>
                            {images[index].title}
                        </div>
                    </div>
                    <div className={showTipContent ? 'slider__tip-content slider__tip-content_active' : 'slider__tip-content'}>
                        Иван Иванович Фи́рсов (около 1733, Москва — после 1785 (?), Санкт-Петербург) — русский живописец XVIII века.

                        В 1747—1756 учился и работал в «Канцелярии от строений». С конца 1750-х гг. — придворный художник. Выполнял декоративные росписи в петербургских дворцах и церквях, оформлял празднества, писал иконы и театральные декорации.

                        Автор одного из первых произведений русской жанровой живописи — картины «Юный живописец» (2-я половина 1760-х гг., Третьяковская галерея), отличающейся непринуждённой естественностью образов и тонко сгармонированным цветовым решением.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
