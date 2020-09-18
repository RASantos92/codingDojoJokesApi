import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';

const Edit = props => {
    const initialErrors = {
        petName:"",
        petType:"",
        petDesc:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }
    const [edit,setEdit] = useState({
        petName:"",
        petType:"",
        petDesc:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    });
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/pet/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err));
    }, [props])

    const handleInput = e => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.put(`http://localhost:8000/api/update/pet/${edit._id}`,edit)
            .then(res => {
                navigate(`/pet/${edit._id}`)
            })
            .catch(err => setErrors(err.response.data.errors));
    }
    return(
        <div>
            <h2>Edit {edit.petName}</h2>
            <PetForm 
                inputs = {edit}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Edit Pet"
            />
        </div>
    )
}

export default Edit;