import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import JokeForm from '../components/JokeForm';
import { navigate } from '@reach/router';

const Edit = props => {
    const initialErrors = {
        setup:"",
        punchline:""
    }
    const [edit,setEdit] = useState({
        setup:"",
        punchline:""
    });
    const [errors,setErrors] = useState(initialErrors);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/joke/${props.id}`)
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
        Axios.put(`http://localhost:8000/api/update/joke/${edit._id}`,edit)
            .then(res => {
                if (res.data.results){
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
            <h2>Edit joke</h2>
            <JokeForm 
                inputs = {edit}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Edit Joke"
            />

        </div>
    )
}

export default Edit;