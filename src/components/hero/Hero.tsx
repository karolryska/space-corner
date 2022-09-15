import Image from 'next/image';
import heroImg from 'assets/images/homepage/hero.jpg';
import styles from './hero.module.scss';

interface Props {
    title: string[];
}

const Hero = ({ title }: Props) => {
    return (
        <header className={styles.wrapper}>
            <h1 className={styles.title}>
                {title.map((item) => (
                    <span>{item}</span>
                ))}
            </h1>
            <div className={styles.img}>
                <Image src={heroImg} layout="fill" objectFit="cover" />
            </div>
        </header>
    );
};

export default Hero;
