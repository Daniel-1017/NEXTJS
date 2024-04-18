import React, { useEffect, useState } from "react";

const LastSales = () => {
    const [sales, setSales] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://nextjs-f4781-default-rtdb.firebaseio.com/sales.json")
            .then(res => res.json())
            .then(data => {
                const transformedData = [];

                for (const key in data) {
                    transformedData.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume,
                    });
                }

                setSales(transformedData);
                setIsLoading(false);
            })
            .catch(console.error);
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (!sales) {
        return <p>No data yet</p>;
    }

    return (
        <ul>
            {sales.map(sale => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
                </li>
            ))}
        </ul>
    );
};

export default LastSales;
