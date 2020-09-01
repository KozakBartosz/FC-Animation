import {
    lightTrails,
    trail,
    fromTo,
    delay,
    val,
    color,
    parallel
} from 'light-trails';

import { inspector } from 'light-trails-inspector';
import BezierEasing from 'bezier-easing';

// const easeFlip = BezierEasing(0.36, 1.7, 0.3, 0.95);
const easeFlip = BezierEasing(0.34, 1.4, 0.5, 1);
const easeFlip2 = BezierEasing(0.34, 1.8, 0.5, 1);
const easeOut = BezierEasing(0.1, 0.85, 0.31, 0.99);

const timescale = 0.8;

const glassLeft = trail('#Glass', [
    fromTo(
        {
            rotate: val(180, 0, 'deg'),
            x: val(150, 0, 'px'),
            opacity: val(0, 1)
        },
        800 / timescale,
        easeFlip
    )
]);

const liquidLeft = trail('#liquid', [
    fromTo(
        {
            rotate: val(-240, 0, 'deg')
        },
        1000 / timescale,
        easeFlip
    )
]);
const text1 = trail('#Front', [
    delay(75 / timescale),
    fromTo(
        {
            x: val(50, 0, 'px'),
            opacity: val(0, 1)
        },
        900 / timescale,
        easeFlip2
    )
]);
const text2 = trail('#Cooking', [
    delay(75 / timescale),
    fromTo(
        {
            x: val(50, 0, 'px'),
            opacity: val(0, 1)
        },
        1000 / timescale,
        easeFlip2
    )
]);
const text3 = trail('#dot', [
    delay(250 / timescale),
    fromTo(
        {
            scale: val(0, 1),
            x: val(20, 0, 'px'),
            opacity: val(0, 1)
        },
        500 / timescale,
        easeFlip2
    )
]);
const bubbles = trail('#bubbles', [
    delay(450 / timescale),
    fromTo(
        {
            opacity: val(0, 1),
            rotate: val(-25, 0, 'deg'),
            scale: val(0.6, 1)
        },
        1000 / timescale,
        easeFlip
    )
]);
const animation = lightTrails(
    parallel([glassLeft, liquidLeft, text1, text2, text3, bubbles])
);

animation.play();

document.getElementById('logo').onclick = () => {
    animation.seek(0);
    animation.play();
};

inspector(animation);
