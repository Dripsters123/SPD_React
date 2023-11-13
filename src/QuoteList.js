import { useState, useEffect } from 'react';
import Quote from './Quote';

function QuoteList(props) {

    const [quote, setQuotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getquote() {
            const response = await fetch('https://dummyjson.com/quotes');
            const data = await response.json();
            setQuotes(data.quotes);

            setLoading(false);
        };
        getquote();
    }, []);
    const quoteJSX = quote.map((bigquote, index) => {
        return <Quote key={index} {...bigquote} />
    })

    return (
        <>
            {loading ? "Loading...Quote" : quoteJSX}
        </>
    )
}
export default QuoteList;