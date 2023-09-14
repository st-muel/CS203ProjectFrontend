import { Variants } from "framer-motion";

export const AnimationLeft: Variants = {
    hide: {
        opacity: 0,
        x: -500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const headerAnimation: Variants = {
    hide: {
        opacity: 0,
        x: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const AnimationRight: Variants = {
    hide: {
        opacity: 0,
        x: 500,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            delay: 0.5
        },
    },
};


