import { useEffect, useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';
import { useWidth } from 'hooks/useWidth';
import Logo from './logo/Logo';
import Hamburger from './hamburger/Hamburger';
import LinksList from './linksList/LinksList';
import styles from './navigation.module.scss';

const cn = classNames.bind(styles);

const pages = [
    {
        name: 'standardy',
        slug: '/standardy',
    },
    {
        name: 'oferta',
        slug: '/oferta',
    },
    {
        name: 'kontakt',
        slug: '/kontakt',
    },
];

const sm = [
    {
        name: 'facebook',
        slug: '/',
    },
    {
        name: 'intagram',
        slug: '/',
    },
];

const Navigation = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const handleClick = () => setMenuIsOpen((prevState) => !prevState);

    const [height, setHeight] = useState<number>();

    const { isMobile } = useWidth();

    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    return (
        <nav className={cn('wrapper', { isOpen: menuIsOpen })}>
            <div className={styles.menu} style={{ height: isMobile ? height : 50 }}>
                <div className={cn('innerWrapper')}>
                    <Link href="/" passHref>
                        <Logo variant="light" />
                    </Link>
                    <Hamburger variant="light" isOpen onClick={handleClick} />
                </div>
                <LinksList links={pages} />
                <div className={styles.sm}>
                    <LinksList links={sm} />
                </div>
            </div>
            <div className={cn('innerWrapper')}>
                <Link href="/" passHref>
                    <Logo variant="light" />
                </Link>
                <Hamburger variant="light" isOpen={false} onClick={handleClick} />
            </div>
        </nav>
    );
};

export default Navigation;
