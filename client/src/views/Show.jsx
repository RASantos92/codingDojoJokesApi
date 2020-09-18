import { navigate } from '@reach/router';
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const Show = props => {
    const [pet, setPet] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleEuthanize = (id) => {
        Axios.delete(`http://localhost:8000/api/destroy/pet/${id}`)
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                pet ? <>
                    <div className="card col-8 mx-auto">
                        <h2>Name: {pet.petName}</h2>
                        <h2>Type: {pet.petType}</h2>
                        <h5>Description: {pet.petDesc}</h5>
                        <p>Skill 1: {pet.skillOne}</p>
                        <p>Skill 2: {pet.skillTwo}</p>
                        <p>Skill 3: {pet.skillThree}</p>
                        <button onClick={() => handleEuthanize(pet._id)} className="btn btn-danger">Euthanize</button>
                    </div>
                </> : null
            }
        </div>
    );
}

export default Show;