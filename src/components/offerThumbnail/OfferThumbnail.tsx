import styles from './offerThumbnail.module.scss';

const OfferThumbnail = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.image}></div>
            <div className={styles.innerWrapper}>
                <span className={styles.subtitle}>Lorem</span>
                <h3 className={styles.title}>Ipsum</h3>
            </div>
        </div>
    );
};

export default OfferThumbnail;
