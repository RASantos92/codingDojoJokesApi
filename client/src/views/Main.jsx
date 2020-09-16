import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const Main = props => {
    const [joke, setJoke] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/jokes')
            .then(res => setJoke(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                joke.map((j, i) => {
                    return <div key={i}>
                        <Link to={`/joke/${j._id}`}>Joke {i + 1}</Link>
                        <p>{j.setup} , {j.punchline}</p>
                        <Link to={`/edit/${j._id}`} className="btn btn-success">Edit Joke {i + 1}</Link>
                    </div>
                })
            }
        </div>
    );
}

export default Main;