import { about } from "./variables.js";
import { rightbar } from "./variables.js";
import { about_root } from "./variables.js";
import { content } from "./variables.js";

import { setStyle } from "./utils.js";



about.addEventListener('mouseover', function() {

    setStyle(rightbar, {
        width: "10px",
    });

    about.addEventListener('mouseleave', function() {

        setStyle(rightbar, {
            width: "0px",
        });
        
    })

});

about.addEventListener('click', function() {

    setStyle(about_root, {

        width: "100%",

    });

    setTimeout(setStyle(content, {
        display: "none",
    }), 1000);

});