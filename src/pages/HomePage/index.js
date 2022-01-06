import { React } from "react";
import Board from "../../components/Board";
import Business from "../../components/Business";
import Connect from "../../components/Connect";
import Jumbotron from "../../components/Jumbotron";
import Slider from "../../components/Slider";

const HomePage = () => {
    return (
        <>
            <Slider />
            <Jumbotron />
            <Business />
            <Board />
            <Connect />
        </>
    );
};

export default HomePage;
