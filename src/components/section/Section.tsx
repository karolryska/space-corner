import React from 'react';
import Image from 'next/image';
import classNames from 'classnames/bind';
import image from 'assets/images/homepage/hero.jpg';
import styles from './section.module.scss';

const cn = classNames.bind(styles);

interface Props {
    children: React.ReactNode;
    title: string;
    reverse?: boolean;
}

const Section = ({ children, title, reverse }: Props) => {
    return (
        <section className={cn('wrapper', { reverse })}>
            <span className={cn('innerWrapper')}>
                <h2 className={cn('title')}>{title}</h2>
                <div className={cn('image--mobile')}>
                    <Image src={image} layout="responsive" />
                </div>
                <span className={cn('body')}>{children}</span>
            </span>
            <div className={cn('image--desktop')}>
                <Image src={image} />
            </div>
        </section>
    );
};

export default Section;
