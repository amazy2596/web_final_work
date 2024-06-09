import { University, rightbar } from "./variables.js";
import { aboutMe } from "./variables.js";
import { iconColors } from "./variables.js";
import { backgroundColors } from "./variables.js";
import { texts } from "./variables.js";
import { titles } from "./variables.js";
import { arrows } from "./variables.js";
import { icons } from "./variables.js";
import { pic } from "./variables.js";
import { leftbar } from "./variables.js";
import { controls } from "./variables.js";
import { root } from "./variables.js";
import { container0 } from "./variables.js";
import { container1 } from "./variables.js";
import { picturePositionSelect } from "./variables.js";
import { pic_div } from "./variables.js";
import { container2 } from "./variables.js";
import { setStyle } from "./utils.js";
import { redirectLink } from "./variables.js";

let lastHoverButtonIndex = 0;

aboutMe.addEventListener('mouseover', function(event) {

    if (event.target == aboutMe) {
        setStyle(rightbar, {
            width: "0px",
        });
    }
    else {
        setStyle(rightbar, {
            width: "15px",
        });
    }

});

function handleMouseOverOrClick() {

    icons.forEach((icon) => {
        setStyle(icon, {
            backgroundColor: "rgb(120, 120, 120)",
            opacity: "0.4",
        });
    });

    texts.forEach((text) => {
        setStyle(text, {
            opacity: "0",
            color: "rgb(120, 120, 120)",
        });
    });

    titles.forEach((title) => {
        setStyle(title, {
            display: "none",
        });
    });

    pic.forEach((p) => {
        setStyle(p, {
            filter: "grayscale(0%)",
        });
    });

    setStyle(University, {
        opacity: "1",
    });

    setStyle(aboutMe, {
        opacity: "1",
    });

    setStyle(icons[lastHoverButtonIndex], {
        backgroundColor: iconColors[lastHoverButtonIndex],
        opacity: "1",
    });

    setStyle(leftbar, {
        backgroundColor: iconColors[lastHoverButtonIndex],
        opactiy: "1",
    });

    setStyle(root, {
        backgroundColor: backgroundColors[lastHoverButtonIndex],
    });

    setStyle(titles[lastHoverButtonIndex], {
        display: "block",
        opacity: "1",
    });

    setStyle(titles[lastHoverButtonIndex].childNodes[1], {
        color: iconColors[lastHoverButtonIndex],
    });

    setStyle(arrows[lastHoverButtonIndex], {
        fill: iconColors[lastHoverButtonIndex],
    });

    setStyle(pic[lastHoverButtonIndex], {
        scale: "1.1",
    })

    setStyle(pic_div[lastHoverButtonIndex], {
        margin: "40px 0px 40px 0px",
    });

    setStyle(container0, {
        transform: "translateX(0%)",
        perspectiveOrigin: "100% 50%",
    });

    setStyle(container1, {
        transform: "rotateX(10deg) rotateY(-10deg) rotateZ(5deg)",
    });

    setStyle(container2, {
        transform: picturePositionSelect[lastHoverButtonIndex],
    });

}

controls.forEach((control, index) => {

    control.addEventListener('mouseover', function(event) {
        
        controls.forEach((con, idx) => {

            if (idx == index) {

                setStyle(icons[idx], {
                    backgroundColor: iconColors[idx],
                    opacity: "1",
                });

                setStyle(texts[idx], {
                    color: "white",
                });

                setStyle(container0, {
                    transform: "translateX(-17%)",
                    perspectiveOrigin: "50% 50%",
                });

                setStyle(container1, {
                    transform: "rotateX(40deg)",
                });

                setStyle(container2, {
                    transform: picturePositionSelect[idx],
                });

                pic.forEach((p, idx_) => {

                    if (idx_ !== index) {
                        setStyle(p, {
                            filter: "grayscale(100%)",
                        });
                    }

                });

            } else {

                setStyle(icons[idx], {
                    backgroundColor: "rgb(120, 120, 120)",
                    opacity: "0.4",
                });

            }

        });

        pic_div.forEach((p) => {

            setStyle(p, {
                margin: "30px 0px 30px 0px",
            });

        });

        pic.forEach((p) => {

            setStyle(p, {
                scale: "1"
            });

        });

        texts.forEach((text) => {

            setStyle(text, {
                opacity: "1",
            });

        });

        titles.forEach((title) => {

            setStyle(title, {
                opacity: "0",
            });

        });

        setStyle(University, {
            opacity: "0",
        });

        setStyle(leftbar, {
            opacity: "0",
        });

        setStyle(aboutMe, {
            opacity: "0",
        });

        setStyle(root, {
            backgroundColor: "black",
        });

        lastHoverButtonIndex = index;

    });

    control.addEventListener('mouseleave', handleMouseOverOrClick);
    control.addEventListener('click', handleMouseOverOrClick);

});


