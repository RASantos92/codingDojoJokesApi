import { navigate } from '@reach/router';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const Show = props => {
    const  [ joke, setJoke ] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/joke/${props.id}`)
            .then(res => setJoke(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleExpell = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/joke/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                joke ? <>
                    <h2>{joke.setup}</h2>
                    <h2>{joke.punchline}</h2>
                    <button onClick={() => handleExpell(joke._id)} className="btn btn-danger">Delete</button>
                </> : null
            }
        </div>
    );
}

export default Show;