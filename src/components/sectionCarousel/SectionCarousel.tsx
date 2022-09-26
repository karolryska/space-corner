import React from 'react';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import SliderType from 'react-slick/index';
import OfferThumbnail from 'components/offerThumbnail/OfferThumbnail';
import Arrow from '../../assets/icons/arrow.svg';
import styles from './sectionCarousel.module.scss';

const cn = classNames.bind(styles);
interface Props {
    children: React.ReactNode;
    title: string;
}

const SectionCarousel = ({ children, title }: Props) => {
    const ref = React.useRef<SliderType | null>(null);

    const handleSlideNext = () => {
        ref.current?.slickNext();
    };

    const settings = {
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToScroll: 1,
    };

    return (
        <section className={cn('wrapper')}>
            <span className={cn('innerWrapper')}>
                <h2 className={cn('title')}>{title}</h2>
                <span className={cn('body')}>{children}</span>
            </span>
            <div className={cn('carousel')}>
                <button className={cn('arrow')} type="button" onClick={handleSlideNext}>
                    <Arrow />
                </button>
                <Slider {...settings} ref={ref}>
                    <OfferThumbnail />
                    <OfferThumbnail />
                    <OfferThumbnail />
                    <OfferThumbnail />
                    <OfferThumbnail />
                    <OfferThumbnail />
                </Slider>
            </div>
        </section>
    );
};

export default SectionCarousel;
