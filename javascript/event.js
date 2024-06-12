import { about, picturePosition } from "./variables.js";
import { backgroundColors } from "./variables.js";
import { mores } from "./variables.js";
import { container0 } from "./variables.js";
import { container1 } from "./variables.js";
import { container2 } from "./variables.js";
import { pic_div } from "./variables.js";
import { pics } from "./variables.js";
import { picturePositionSelected } from "./variables.js";
import { lastHoverButtonIndex } from "./content.js";
import { titles } from "./variables.js";
import { icons } from "./variables.js";
import { University } from "./variables.js";
import { event_root } from "./variables.js";
import { iconColors } from "./variables.js";
import { root } from "./variables.js";
import { content } from "./variables.js";
import { back } from "./variables.js";
import { bottom_arrow } from "./variables.js";
import { event } from "./variables.js";
import { controls } from "./variables.js";

import { setStyle } from "./utils.js";



mores.forEach((more) => {

    more.addEventListener('click', function() {

        setStyle(root, {
            transition: "width 1s ease",
            background: "transparent",
        });

        setStyle(content, {
            zIndex: "7",
        });

        setStyle(event_root, {
            background: iconColors[lastHoverButtonIndex],
            width: "100%",
        });

        setStyle(University, {
            display: "none",
        });

        setStyle(about, {
            zIndex: "7",
        });

        setStyle(back, {
            display: "flex",
        });

        setStyle(bottom_arrow, {
            display: "block",
        });

        Array.from(titles[lastHoverButtonIndex].childNodes).forEach((child, idx) => {
            if (idx % 2 == 1) {
                if (idx == 1) {
                    setStyle(child, {
                        position: "absolute",
                        top: "82%",
                        color: backgroundColors[lastHoverButtonIndex],
                    });
                } else {
                    setStyle(child, {
                        opacity: "0",
                    })
                }
            }
        });

        setStyle(container0, {
            perspectiveOrigin: "50% 50%",
            transform: "translateX(-17%)",
        });

        setStyle(container1, {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        });

        setStyle(container2, {
            top: picturePositionSelected[lastHoverButtonIndex],
        });

        setStyle(pic_div[lastHoverButtonIndex], {
            margin: "250px",
        });

        setStyle(pics[lastHoverButtonIndex], {
            scale: "1.3",
        });

        controls.forEach((control) => {
            setStyle(control, {
                display: "none",
                PointerEvents: "none",
            });
        })

    });

});

pics.forEach((pic, index) => {

    pic.addEventListener('click', function() {

        if (lastHoverButtonIndex != index) 
            return;

        setStyle(root, {
            transition: "width 1s ease",
            background: "transparent",
        });

        setStyle(content, {
            zIndex: "7",
        });

        setStyle(event_root, {
            background: iconColors[lastHoverButtonIndex],
            width: "100%",
        });

        setStyle(University, {
            display: "none",
        });

        setStyle(about, {
            zIndex: "7",
        });

        setStyle(back, {
            display: "flex",
        });

        setStyle(bottom_arrow, {
            display: "block",
        });

        Array.from(titles[lastHoverButtonIndex].childNodes).forEach((child, idx) => {
            if (idx % 2 == 1) {
                if (idx == 1) {
                    setStyle(child, {
                        position: "absolute",
                        top: "82%",
                        color: backgroundColors[lastHoverButtonIndex],
                    });
                } else {
                    setStyle(child, {
                        opacity: "0",
                    })
                }
            }
        });

        setStyle(container0, {
            perspectiveOrigin: "50% 50%",
            transform: "translateX(-17%)",
        });

        setStyle(container1, {
            transform: "rotateX(0deg) rotateY(0deg) rotateZ(0deg)",
        });

        setStyle(container2, {
            top: picturePositionSelected[lastHoverButtonIndex],
        });

        setStyle(pic_div[lastHoverButtonIndex], {
            margin: "250px",
        });

        setStyle(pics[lastHoverButtonIndex], {
            scale: "1.3",
        });

        controls.forEach((control) => {
            setStyle(control, {
                display: "none",
                PointerEvents: "none",
            });
        })

    });

});

back.addEventListener('click', function() {

    setStyle(event, {
        PointerEvents: "none",
    });

    setStyle(root, {
        background: backgroundColors[lastHoverButtonIndex],
        transition: "width 1s ease, background 1s ease",
    });

    setStyle(content, {
        zIndex: "5",
    });

    setStyle(event_root, {
        width: "0%",
        PointerEvents: "none",
    });

    setStyle(University, {
        display: "flex",
    });

    setStyle(about, {
        zIndex: "6",
    });

    setStyle(back, {
        display: "none",
    });

    setStyle(bottom_arrow, {
        display: "none",
    });

    Array.from(titles[lastHoverButtonIndex].childNodes).forEach((child, idx) => {
        if (idx % 2 == 1) {
            if (idx == 1) {
                setStyle(child, {
                    position: "relative",
                    top: "0%",
                    color: iconColors[lastHoverButtonIndex],
                });
            } else {
                setStyle(child, {
                    opacity: "1",
                });
            }
        }
    });

    setStyle(container0, {
        perspectiveOrigin: "100% 50%",
        transform: "translateX(0%)",
    });

    setStyle(container1, {
        transform: "rotateX(10deg) rotateY(-10deg) rotateZ(5deg)",
    });
    
    setStyle(container2, {
        top: picturePosition[lastHoverButtonIndex],
    });

    setStyle(pic_div[lastHoverButtonIndex], {
        margin: "40px 0px 40px 0px",
    });

    setStyle(pics[lastHoverButtonIndex], {
        scale: "1.1",
    });

    controls.forEach((control) => {
        setStyle(control, {
            display: "flex",
            PointerEvents: "auto",
        });
    });

});
