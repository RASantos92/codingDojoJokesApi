import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router'

const Main = props => {
    const [pet, setPet] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/pet')
            .then(res => setPet(res.data.results))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <table className="table table-success col-8 mx-auto">
                <thead>
                    <th></th>
                    <th>Pet Name</th>
                    <th>Pet Type</th>
                    <th>pet Description</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        pet.map((p, i) => {
                            return <tr key={i}>
                                
                                <td>{i + 1}</td>
                                <td>{p.petName}</td>
                                <td>{p.petType}</td>
                                <td>{p.petDesc}</td>
                                <td><Link to={`/edit/${p._id}`} className="btn btn-warning">Edit Pet {i + 1}</Link><Link className="btn btn-success" to={`/pet/${p._id}`}>Show Pet {i + 1}</Link></td>
                                
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    );
}

export default Main;