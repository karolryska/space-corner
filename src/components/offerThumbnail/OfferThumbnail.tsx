import Image from 'next/image';
import mockImg from 'assets/images/homepage/hero.jpg';
import styles from './offerThumbnail.module.scss';

const OfferThumbnail = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <Image src={mockImg} layout="fixed" />
            </div>
            <div className={styles.innerWrapper}>
                <span className={styles.subtitle}>Lorem</span>
                <h3 className={styles.title}>Ipsum</h3>
            </div>
        </div>
    );
};

export default OfferThumbnail;
