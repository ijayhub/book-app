import { useState, useEffect } from 'react';

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data.results.books);
            });
    },[url]);
  return {data}
}

export default UseFetch
