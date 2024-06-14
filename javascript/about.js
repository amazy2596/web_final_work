import { setStyle } from "./utils.js";
import { about, about_root, back, back_ } from "./variables.js";

about.addEventListener('click', async function() {

    setStyle(about_root, {
        width: "100%",
        zIndex: "10",
    });

    await new Promise(resolve => setTimeout(resolve, 200));

    setStyle(about_content, {
        transform: "translateX(0%)",
        zIndex: "10",
        opacity: "1",
    });

    await new Promise(resolve => setTimeout(resolve, 300));

    setStyle(back_, {
        transform: "translateX(0%)",
        zIndex: "10",
        opacity: "1",
    });

});

back_.addEventListener('click', async function() {

    setStyle(about_content, {
        transform: "translateX(50%)",
        opacity: "0",
        transition: "transform 1s ease, opacity 0.5s ease",
    });

    await new Promise(resolve => setTimeout(resolve, 100));

    setStyle(about_root, {
        width: "0%",
    });
    
    setStyle(back_, {
        transform: "translateX(50%)",
        zIndex: "0",
        opacity: "0",
    });

    await new Promise(resolve => setTimeout(resolve, 900));

    setStyle(about_content, {
        zIndex: "0",
        transition: "transform 0.8s ease, opacity 0.8s ease;"
    });

});