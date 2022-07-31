import React from 'react';
import classNames from 'classnames/bind';
import LogoIcon from 'root/public/icons/logo.svg';
import styles from './logo.module.scss';

const cn = classNames.bind(styles);

type Props = {
    variant: 'dark' | 'light';
};

type Ref = HTMLSpanElement;

const Logo = React.forwardRef<Ref, Props>(({ variant }, ref) => {
    return (
        <span className={cn('wrapper', variant)} ref={ref}>
            <LogoIcon />
        </span>
    );
});

export default Logo;
