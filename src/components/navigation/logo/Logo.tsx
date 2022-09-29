import React from 'react';
import classNames from 'classnames/bind';
import LogoIcon from 'root/public/icons/logo.svg';
import styles from './logo.module.scss';

const cn = classNames.bind(styles);

type Props = {
    variant: 'dark' | 'light';
};

const Logo = ({ variant }: Props) => {
    return (
        <span className={cn('wrapper', variant)}>
            <LogoIcon />
        </span>
    );
};

export default Logo;
