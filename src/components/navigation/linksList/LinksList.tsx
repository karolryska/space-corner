import Link from 'next/link';
import styles from './linksList.module.scss';

type LinksListProps = {
    links: {
        name: string;
        slug: string;
    }[];
};

const LinksList = ({ links }: LinksListProps) => {
    return (
        <ul className={styles.wrapper}>
            {links.map((link) => (
                <li className={styles.link} key={link.name}>
                    <Link href={link.slug}>{link.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default LinksList;
