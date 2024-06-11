import { about } from "./variables.js";
import { rightbar } from "./variables.js";

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
