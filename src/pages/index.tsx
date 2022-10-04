import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { gql } from '@apollo/client';
import client from 'lib/apolloClient';
import { OfferThumbnail } from 'types/types';
import Navigation from 'components/navigation/Navigation';
import Hero from 'components/hero/Hero';
import Section from 'components/section/Section';
import SectionCarousel from 'components/sectionCarousel/SectionCarousel';

interface Props {
    data: OfferThumbnail[];
}

const HomePage = ({ data }: Props) => {
    return (
        <>
            <Navigation />
            <Hero title={['Szukasz idealnego', ' miejsca do pracy?', 'Mamy takie.']}></Hero>
            <Section title="pomysł">
                <span>
                    Czasy wszechobecnej pandemii nie są łatwe. Praca z domu nie dla każdego jest
                    spełnieniem marzeń, nie każdy też może sobie na nią pozwolić.
                </span>
                <span>
                    Zajmujemy się wynajmem przestrzeni do pracy, w której poczujesz się komfortowo i
                    nie będziesz z utęsknieniem wyczekiwał aż zegarek wybije godzinę 17.
                </span>
                <span>Sprawdź, co nasze biura mają Ci do zoferowania.</span>
                <Link href="/">Dowiedz się więcej.</Link>
            </Section>
            <SectionCarousel title="oferta" data={data}>
                <span>
                    Biuro w klimatycznej kamienicy czy nowoczesnym wieżowcu? Open space czy
                    wydzielony pokój?
                </span>
                <Link href="/">Sprawdź wszystkie nasze oferty.</Link>
            </SectionCarousel>
            <Section title="pomysł" reverse>
                <span>
                    Czy wasze biura są pieskolubne? Czy są otwarte 24/7? Czy można wynająć biurko
                    tylko na jeden dzień? Czy jest miejsce do przeprowadzenia wideokonferencji?
                </span>
                <span>Cztery razy TAK.</span>
                <span>
                    To tylko kilka z pytań, które dostajemy regularnie. Jeśli chcesz dowiedzieć się
                    więcej lub dopytać o szczególny, możesz skontaktować się z nami mailowo lub
                    telefonicznie.
                </span>
                <Link href="/">Skontaktuj się z nami.</Link>
            </Section>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const {
        data: {
            officeCollection: { items },
        },
    } = await client.query({
        query: gql`
            query Offers {
                officeCollection {
                    items {
                        slug
                        name
                        city
                        cover {
                            url
                        }
                    }
                }
            }
        `,
    });

    return {
        props: {
            data: items,
        },
    };
};

export default HomePage;
