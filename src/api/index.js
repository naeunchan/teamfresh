import axios from "axios";

const API_END_POINT = "https://tmsapidev.teamfresh.co.kr";

export const getDeliveryPossible = (address) => {
    axios
        .post(
            `${API_END_POINT}/api/delivery/searchDeliveryAreaForTest`,
            {
                addrBasic: address,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    charset: "utf-8",
                },
            }
        )
        .then((res) => {
            const result = res.data.result;

            if (Object.keys(result).length) {
                const msg = result.delyverResult;

                alert(msg);
            }
        })
        .catch((e) => {
            console.log(e);
        });
};
