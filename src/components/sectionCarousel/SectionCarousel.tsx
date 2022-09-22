import React from 'react';
import classNames from 'classnames/bind';
import styles from './sectionCarousel.module.scss';

const cn = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    title: string;
}

const SectionCarousel = ({ children, title }: Props) => {
    return (
        <section className={cn('wrapper')}>
            <span className={cn('innerWrapper')}>
                <h2 className={cn('title')}>{title}</h2>
                <span className={cn('body')}>{children}</span>
            </span>
            <div className={cn('carousel')}></div>
        </section>
    );
};

export default SectionCarousel;
