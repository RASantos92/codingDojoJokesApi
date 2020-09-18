import React,{useState} from 'react';
import Axios from 'axios';
import PetForm from '../components/PetForm';
import { navigate } from '@reach/router';

const New = props => {
    const initialPet = {
        petName:"",
        petType:"",
        petDesc:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }
    const initialErrors = {
        petName:"",
        petType:"",
        petDesc:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    }
    const [pet,setPet] = useState(initialPet)
    const [errors,setErrors] = useState(initialErrors);
    const handleInput = e => {
        setPet({
            ...pet,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.post("http://localhost:8000/api/create/pet",pet)
            .then(res => {
                if (res.data.results){
                    setPet(initialPet);
                    navigate("/")
                }
                else{
                    console.log(res.data)
                    setErrors(res.data)
                }
            })
            .catch(err => console.log(err));
    }
    return(
        <div>
            <h2> Add A Pet</h2>
            <PetForm 
                inputs = {pet}
                errors={errors}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                submitValue="Add Pet"
            />
        </div>
    )
}

export default New;