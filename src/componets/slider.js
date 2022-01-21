import React, { useRef, useLayoutEffect, useState } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore, MdOutlineOpenInFull } from "react-icons/md";

const Slider = (props) => {
    const { images } = props;
    const [index, setIndex] = useState(0);
    const [showTipContent, setShowTipContent] = useState(false);
    // const [overlayOffset, setOverlayOffset] = useState(0);
    const [sliderWrapperOffset, setSliderWrapperOffset] = useState(0);
    const sliderPreviewRef = useRef(null);
    const sliderRef = useRef(null);
    const [sliderPreviewWidth, setSliderPreviewWidth] = useState('');
    const [sliderPreviewHeight, setSliderPreviewHeight] = useState('');
    const [sliderHeight, setSliderHeight] = useState('');
    
    useLayoutEffect(() => {
        if (sliderPreviewRef.current) {
            setSliderPreviewWidth(window.getComputedStyle(sliderPreviewRef.current).width);
            console.log(sliderPreviewWidth);
        }
    }, [sliderPreviewWidth]);

    useLayoutEffect(() => {
        if (sliderPreviewRef.current) {
            setSliderPreviewHeight(window.getComputedStyle(sliderPreviewRef.current).height);
            console.log(`sliderPreviewHeight: ${sliderPreviewHeight}`);
        }
    }, [sliderPreviewHeight]);

    useLayoutEffect(() => {
        if (sliderRef.current) {
            setSliderHeight(window.getComputedStyle(sliderRef.current).height);
            console.log(`sliderHeight: ${sliderHeight}`);
        }
    }, [sliderHeight]);

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
        <div className='slider' ref={sliderRef}>
            {/* <div className='slider__close-ico'>
                <span className='slider__close-ico-elem'></span>
                <span className='slider__close-ico-elem'></span>
            </div> */}
            <div className='slider__preview' ref={sliderPreviewRef}>
                <div 
                    className='slider__preview-chevron' 
                    onClick={() => {
                        if (sliderWrapperOffset !== 0) {
                            setSliderWrapperOffset(sliderWrapperOffset - 80);
                        }
                    }}>
                    <MdOutlineNavigateBefore />
                </div>
                <div className='slider__preview-container'>
                    <div 
                        className='slider__preview-wrapper' 
                        style={{ 
                            width: 80 * images.length,
                            transform: `translateX(-${sliderWrapperOffset}px)`
                        }}
                    >
                        {
                            !images ? <p>no images loaded</p> :
                            images.map(image => 
                                <div 
                                    className='slider__preview-item' 
                                    style={{
                                            opacity: index === images.indexOf(image) ? 1 : .7
                                    }}
                                    onClick={() => {
                                        setIndex(images.indexOf(image));
                                        // setOverlayOffset(80 * (images.length - (images.length - images.indexOf(image))));
                                    }}
                                >
                                    <img className='slider__preview-pic' src={image.url} alt={image.alt} />
                                </div>
                            )
                        }
                    </div>
                    {/* <div 
                        className='slider__preview-overlay' 
                        style={{ 
                            transform: `translate(${overlayOffset}px)`,
                        }}>
                    </div> */}
                </div>
                <div className='slider__preview-chevron' onClick={() => {
                    if (sliderWrapperOffset < (Number(sliderPreviewWidth.substring(0, 3))) + 80) {
                        setSliderWrapperOffset(sliderWrapperOffset + 80);
                        console.log(sliderWrapperOffset)
                        console.log(typeof sliderPreviewWidth)
                    }
                }}>
                    <MdOutlineNavigateNext />
                </div>
            </div>
            <div className='slider__show' 
                style={{ 
                    height: Number(sliderHeight.replace('px', '')) - Number(sliderPreviewHeight.replace('px', '')) 
                }}
            >
                <div className='slider__chevron' onClick={prevSlide}>
                    <MdOutlineNavigateBefore />
                </div>
                    <div className='slider__pic'>
                        {
                            !images ? <p>no images loaded</p> :
                            <img src={images[index].url} alt={images[index].alt} />
                        }
                    </div>
                <div className='slider__chevron' onClick={nextSlide}>
                    <MdOutlineNavigateNext />
                </div>
                <div className={showTipContent ? 'slider__tip slider__tip_active' : 'slider__tip'}>
                    <div className='slider__tip-panel'>
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

export default Slider;