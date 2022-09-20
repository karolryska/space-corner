import React, { useState, useMemo, useEffect, createContext, ReactNode } from 'react';

type DeviceHeightContextState = {
    height: number;
};
export const DeviceHeightContext = createContext<DeviceHeightContextState | null>(null);

const DeviceHeightContextProvider = ({ children }: { children: ReactNode }) => {
    const [deviceHeight, setDeviceHeight] = useState<number>(0);

    useEffect(() => {
        setDeviceHeight(window.innerHeight);
        window.addEventListener('resize', () => setDeviceHeight(window.innerHeight));

        return () => {
            window.removeEventListener('resize', () => setDeviceHeight(window.innerHeight));
        };
    }, []);

    return (
        <DeviceHeightContext.Provider
            value={useMemo(() => {
                return { height: deviceHeight };
            }, [deviceHeight])}
        >
            {children}
        </DeviceHeightContext.Provider>
    );
};

export default DeviceHeightContextProvider;
