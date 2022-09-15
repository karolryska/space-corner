import { useState, useEffect } from 'react';

export const useWidth = () => {
    const [current, setCurrent] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const setState = (innerWidth: number) => {
            if (innerWidth < 768) {
                setCurrent('mobile');
            } else if (innerWidth < 1024) {
                setCurrent('tablet');
            } else {
                setCurrent('desktop');
            }

            setWidth(innerWidth);
        };
        setState(window.innerWidth);

        window.addEventListener('resize', () => setState(window.innerWidth));

        return () => {
            window.removeEventListener('resize', () => setState(window.innerWidth));
        };
    }, []);

    useEffect(() => {
        setIsMobile(current === 'mobile');
        setIsTablet(current === 'tablet');
        setIsDesktop(current === 'desktop');
    }, [current]);

    return { isMobile, isTablet, isDesktop, width };
};
