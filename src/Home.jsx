import React from "react";
import Common from "./common";
import pic from "../src/images/image.svg";
import Clients from "./Clients";
import History from "./History";

const Home =() => {
    return (
        <>
        <Common 
        pic={pic}
        name="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum, nisi eget condimentum pellentesque, urna enim ullamcorper arcu, a fringilla arcu mi nec nunc. Suspendisse rhoncus fermentum odio eu mollis. Donec scelerisque massa velit, at tristique lectus pellentesque nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel leo in urna tempor commodo fringilla ac lacus...."
        btn="Get Started"

        />
        <History/>
        <Clients/>
        </>
    );
};

export default Home;