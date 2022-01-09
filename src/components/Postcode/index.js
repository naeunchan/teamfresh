import React from "react";
import DaumPostcode from "react-daum-postcode";
import { getDeliveryPossible } from "../../api";

const Postcode = () => {
    const postcodeStyle = {
        display: "block",
        position: "relative",
        width: "100%",
        height: "100vh",
    };

    const handleComplete = async (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        await getDeliveryPossible(fullAddress);
    };

    return (
        <DaumPostcode
            style={postcodeStyle}
            onComplete={handleComplete}
            autoClose={false}
        ></DaumPostcode>
    );
};

export default Postcode;
