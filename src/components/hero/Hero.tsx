import { useContext } from 'react';
import Image from 'next/image';
import { DeviceHeightContext } from 'context/DeviceHeight';
import heroImg from 'assets/images/homepage/hero.jpg';
import styles from './hero.module.scss';

interface Props {
    title: string[];
}

const Hero = ({ title }: Props) => {
    const deviceHeight = useContext(DeviceHeightContext);

    return (
        <header className={styles.wrapper} style={{ minHeight: deviceHeight?.height }}>
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
