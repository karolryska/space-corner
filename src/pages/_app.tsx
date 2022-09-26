import DeviceHeightContextProvider from 'context/DeviceHeight';
import '../styles/main.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DeviceHeightContextProvider>
            <Component {...pageProps} />
        </DeviceHeightContextProvider>
    );
}

export default MyApp;
