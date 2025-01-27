import { useState, useEffect } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/e3b1612ce36433091f815fff/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
        .catch((err) => console.log(err))
    }, [currency]);

    return data
}

export default useCurrency;