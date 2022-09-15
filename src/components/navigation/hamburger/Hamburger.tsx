import classNames from 'classnames/bind';
import styles from './hamburger.module.scss';

const cn = classNames.bind(styles);

type HamburgerProps = {
    variant: 'dark' | 'light';
    isOpen: boolean;
    onClick: () => void;
};

const Hamburger = ({ variant, isOpen, onClick }: HamburgerProps) => {
    return (
        <button
            type="button"
            aria-label="menu"
            className={cn('wrapper', variant, { isOpen })}
            onClick={onClick}
        >
            <span></span>
            <span></span>
        </button>
    );
};

export default Hamburger;
