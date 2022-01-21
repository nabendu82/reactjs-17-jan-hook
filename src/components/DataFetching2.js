import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DataFetching2 = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response);
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },[id])

    return (
        <>
            <input type="text" value={id} onChange={event => setId(event.target.value)} />
            <div>{post.title}</div>
        </>
    );
};

export default DataFetching2;
