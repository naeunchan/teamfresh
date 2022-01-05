import { React } from "react";
import Board from "../../components/Board";
import Business from "../../components/Business";
import Connect from "../../components/Connect";

const HomePage = () => {
    return (
        <>
            <Business />
            <Board />
            <Connect />
        </>
    );
};

export default HomePage;
