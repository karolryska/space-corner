import Image from 'next/image';
import Link from 'next/link';
import styles from './offerThumbnail.module.scss';

interface Props {
    title: string;
    subtitle: string;
    img: string;
}

const OfferThumbnail = ({ title, subtitle, img }: Props) => {
    return (
        <li className={styles.wrapper}>
            <Link href="/" passHref>
                <a>
                    <div className={styles.image}>
                        <Image src={img} layout="fill" />
                    </div>
                    <div className={styles.innerWrapper}>
                        <span className={styles.subtitle}>{title}</span>
                        <h3 className={styles.title}>{subtitle}</h3>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default OfferThumbnail;
