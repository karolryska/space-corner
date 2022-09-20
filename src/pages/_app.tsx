import DeviceHeightContextProvider from 'context/DeviceHeight';
import '../styles/main.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <DeviceHeightContextProvider>
            <Component {...pageProps} />
        </DeviceHeightContextProvider>
    );
}

export default MyApp;
