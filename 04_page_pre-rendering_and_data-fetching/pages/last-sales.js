import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSales = props => {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR(
        "https://nextjs-f4781-default-rtdb.firebaseio.com/sales.json",
        url => fetch(url).then(res => res.json())
    );

    useEffect(() => {
        if (!data) return;

        const transformedData = [];

        for (const key in data) {
            transformedData.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume,
            });
        }

        setSales(transformedData);
    }, [data]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     fetch("https://nextjs-f4781-default-rtdb.firebaseio.com/sales.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const transformedData = [];

    //             for (const key in data) {
    //                 transformedData.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 });
    //             }

    //             setSales(transformedData);
    //             setIsLoading(false);
    //         })
    //         .catch(console.error);
    // }, []);

    if (error) {
        return <p>Failed to load</p>;
    }

    if (!data && !sales) {
        return <p>Loading...</p>;
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

export const getStaticProps = async () => {
    try {
        const res = await fetch(
            "https://nextjs-f4781-default-rtdb.firebaseio.com/sales.json"
        );
        const data = await res.json();

        const transformedData = [];

        for (const key in data) {
            transformedData.push({
                id: key,
                username: data[key].username,
                volume: data[key].volume,
            });
        }

        return { props: { sales: transformedData }, revalidate: 10 };
    } catch (error) {
        console.error(error);
        return { props: { sales: [] }, revalidate: 10 };
    }
};

export default LastSales;
