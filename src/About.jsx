import React from "react";
import Common from "./common";
import image2 from "./images/image2.svg";



const About = () => {
    return(
        <>
        <Common
            pic= {image2}
            name="Etiam ut massa sit amet massa tincidunt euismod at non tortor. Nullam pharetra nunc vestibulum enim faucibus, nec eleifend eros aliquet. Vivamus non nibh consequat, hendrerit ligula eget, euismod sapien. Nunc dapibus urna sit amet lobortis lacinia. Ut maximus vitae mi sit amet interdum. Nulla gravida lacinia leo vel suscipit."
            btn="Know More"
        />
        
        </>
    );
};

export default About;