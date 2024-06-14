import { about } from "./variables.js";
import { articles } from "./variables.js";
import { backgroundTransitions } from "./variables.js";
import { center_menu } from "./variables.js";
import { event_content } from "./variables.js";
import { event_title } from "./variables.js";
import { leftbar } from "./variables.js";
import { main_text } from "./variables.js";
import { picturePosition } from "./variables.js";
import { root_temp } from "./variables.js";
import { root_transition } from "./variables.js";
import { title_words } from "./variables.js";
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
import { University } from "./variables.js";
import { event_root } from "./variables.js";
import { iconColors } from "./variables.js";
import { root } from "./variables.js";
import { content } from "./variables.js";
import { back } from "./variables.js";
import { bottom_arrow } from "./variables.js";
import { event } from "./variables.js";
import { controls } from "./variables.js";
import { temp } from "./variables.js";

import { setStyle } from "./utils.js";


let check = false;

mores.forEach((more) => {

    more.addEventListener('click', function() {

        check = false;

        setStyle(temp, {
            display: "block",
            background: backgroundColors[lastHoverButtonIndex],
            zIndex: "4"
        });

        setStyle(root, {
            transition: "width 1s ease, height 1s ease",
            background: "transparent",
            height: "0%",
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
                        top: "15%",
                        color: backgroundColors[lastHoverButtonIndex],
                        transition: "top 1s ease, color 1s ease, transform 1s ease",
                    });
                } else {
                    setStyle(child, {
                        opacity: "0",
                        transition: "top 1s ease, color 1s ease, transform 1s ease",
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

        check = false;

        setStyle(temp, {
            display: "block",
            background: backgroundColors[lastHoverButtonIndex],
            zIndex: "4"
        });

        setStyle(root, {
            transition: "width 1s ease, height 1s ease",
            background: "transparent",
            height: "0%",
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
                        top: "15%",
                        color: backgroundColors[lastHoverButtonIndex],
                        transition: "top 1s ease, color 1s ease, transform 1s ease",
                    });
                } else {
                    setStyle(child, {
                        opacity: "0",
                        transition: "top 1s ease, color 1s ease, transform 1s ease",
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

back.addEventListener('click', async function() {


    if (check) {

        setStyle(root_transition, {
            width: "100%",
            background: backgroundTransitions[lastHoverButtonIndex],
        });

        setStyle(root_temp, {
            height: "0%",
            zIndex: "4",
        });

        await new Promise((resolve) => setTimeout(resolve, 699));

        setStyle(root_transition, {
            left: "0%",
            transition: "width 0.5s ease",
        });

        event_title.innerHTML = "";
        event_content.innerHTML = "";

        await new Promise((resolve) => setTimeout(resolve, 1));

        setStyle(event_title, {
            transform: "translateY(100px)",
            opacity: "0",
        });

        setStyle(event_content, {
            transform: "translateY(100px)",
            opacity: "0",
        });

        setStyle(root_transition, {
            width: "0%",
        });

        setStyle(back, {
            display: "none",
        });

        setStyle(University, {
            display: "flex",
        });

        setStyle(content, {
            zIndex: "5",
        });
        
        setStyle(leftbar, {
            zIndex: "6",
        });
        
        setStyle(center_menu, {
            zIndex: "6",
        });

        setStyle(main_text, {
            zIndex: "6",
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        setStyle(root_transition, {
            transition: "width 0.5s ease-in",
        });

        root_transition.style.removeProperty("left");

    } else {

        setStyle(event, {
            PointerEvents: "none",
        });
    
        setStyle(root, {
            background: backgroundColors[lastHoverButtonIndex],
            transition: "width 1s ease, background 1s ease",
            height: "100%",
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
                        transition: "color 1s ease, transform 1s ease",
                    });
                } else {
                    setStyle(child, {
                        opacity: "1",
                        transition: "color 1s ease, transform 1s ease",
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
    
        setStyle(temp, {
            display: "none",
        });

    }

});

bottom_arrow.addEventListener('click', async function() {

    check = true;

    setStyle(root_temp, {
        background: backgroundColors[lastHoverButtonIndex],
        height: "100%",
        zIndex: "6",
    });

    event_title.innerHTML = title_words[lastHoverButtonIndex];

    event_content.innerHTML = articles[lastHoverButtonIndex];

    await new Promise((resolve) => setTimeout(resolve, 1));

    setStyle(event_title, {
        color: iconColors[lastHoverButtonIndex],
        transform: "translateY(0px)",
        opacity: "1",
    });

    setStyle(event_content, {
        transform: "translateY(0px)",
        opacity: "1",
    });

    setStyle(leftbar, {
        zIndex: "5",
    });

    setStyle(center_menu, {
        zIndex: "5",
    });

    setStyle(main_text, {
        zIndex: "5",
    });

    setStyle(event, {
        PointerEvents: "none",
    });

    setStyle(root, {
        background: backgroundColors[lastHoverButtonIndex],
        transition: "width 1s ease, background 1s ease",
        height: "100%",
    });

    setStyle(bottom_arrow, {
        display: "none",
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStyle(event_root, {
        width: "0%",
        PointerEvents: "none",
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

    setStyle(temp, {
        display: "none",
    });

});