import { text0 } from './variables.js';
import { text_0 } from './variables.js';
import { bottomText } from './variables.js';
import { progress_bar } from './variables.js';
import { cover } from './variables.js';
import { container0 } from './variables.js';
import { container1 } from './variables.js';
import { University } from './variables.js';
import { aboutMe } from './variables.js';
import { controls } from './variables.js';
import { pic } from './variables.js';
import { root } from './variables.js';

import { setStyle } from './utils.js';



window.onload = async function() {
    await barAndTextColorAndPictureTransition();
};

function floatAndGenerateText() {
    return new Promise((resolve) => {
        
        setStyle(bottomText, {
            transform: "translateY(0%)",
            opacity: "1"
        });

        setStyle(text0, {
            transform: "translateY(0%)",
            opacity: "1"
        });

        setTimeout(resolve, 1500);
    });
}

async function barAndTextColorAndPictureTransition() {
    await floatAndGenerateText();

    setStyle(progress_bar, {
        height: "100%",
    });

    setStyle(cover, {
        transform: "translateY(-103%)",
    });

    setStyle(container1, {
        transform: "rotateX(10deg) translateY(20%)",
        opacity: "1",
    });

    await new Promise(resolve => setTimeout(resolve, 500));

    await new Promise((resolve) => {
        setStyle(container1, {
            transition: "transform 1s ease, opacity 1s ease",
        })
        setTimeout(resolve, 1000);
    });

    setStyle(text_0, {
        display: "block",
    });

    setStyle(root, {
        width: "100%",
    });

    setStyle(container0, {
        perspectiveOrigin: "100% 50%",
    });

    setStyle(container1, {
        transform: "rotateX(10deg) rotateY(-10deg) rotateZ(5deg) translateY(20%)",
    });

    setStyle(pic[0], {
        width: "660px",
        height: "420px",
    });

    setStyle(University, {
        display: "flex",
    });

    setStyle(aboutMe, {
        display: "flex",
    });

    await new Promise(resolve => setTimeout(resolve, 100));

    setStyle(University, {
        transform: "translateX(0%)",
        opacity: "1",
    });

    setStyle(text_0, {
        transform: "translateY(0%)",
        opacity: "1",
    });

    await new Promise(resolve => setTimeout(resolve, 500));

    setStyle(aboutMe, {
        transform: "translateY(0%)",
        opacity: "1",
    });

    controls.forEach((control) => {
        setStyle(control, {
            display: "flex",
        });
    });

    await new Promise(resolve => setTimeout(resolve, 400));

    setStyle(leftbar, {
        width: "10px",
        opacity: "1",
    });

    setStyle(pre, {
        display: "none",
    });
}