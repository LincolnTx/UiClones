import { useMotionValue } from "framer-motion";
import { useContext, useEffect } from "react";

import ModelsContext from "./ModelsContext";

export default function useWapperScroll() {
    const { wrapperRef } = useContext(ModelsContext);
    
    const scrollY = useMotionValue(0);
    const scrollYProgress = useMotionValue(0);

    useEffect(() => {
        const scrollElement = wrapperRef.current;

        if(scrollElement) {
            const updateScrollValue = () => {
                const { scrollTop, scrollHeight, offsetHeight } = scrollElement;

                const fullScroll = scrollHeight - offsetHeight;

                scrollY.set(scrollTop); // px
                scrollYProgress.set(scrollTop / fullScroll); // 0~1 %
            };

            scrollElement.addEventListener('scroll', updateScrollValue);

            return () => scrollElement?.removeEventListener('scroll', updateScrollValue);
        }
    }, [wrapperRef, scrollY, scrollYProgress]);

    return { scrollY, scrollYProgress }
}