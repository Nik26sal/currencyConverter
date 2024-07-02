import { useEffect, useState } from "react";

function useCurrencyData() {
    const [currencies, setCurrenciesData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4500/currencies')
            .then((res) => res.json())
            .then((res) => {
                setCurrenciesData(res);
            })
            .catch((error) => console.log("Something went wrong", error));
    }, []);

    return currencies;
}

export default useCurrencyData;
