import { createContext, useRef } from "react";

const SwiperContext = createContext();


export const SwiperProvider = ({children}) => {

    const swiperRef = useRef(null);

    return (
        <SwiperContext.Provider value={{
            swiperRef
        }}>
            {children}
        </SwiperContext.Provider>
    )
}


export default SwiperContext;