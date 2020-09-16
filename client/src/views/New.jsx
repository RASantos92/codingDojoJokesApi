import React,{useState} from 'react';
import Axios from 'axios';
import JokeForm from '../components/JokeForm';
import { navigate } from '@reach/router';

const New = props => {
    const initialJoke = {
        setup:"",
        punchline:""
    }
    const initialErrors = {
        setup:"",
        punchline:""
    }
    const [joke,setJoke] = useState(initialJoke)
    const [errors,setErrors] = useState(initialErrors);
    const handleInput = e => {
        setJoke({
            ...joke,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(initialErrors)
        Axios.post("http://localhost:8000/api/create/joke",joke)
            .then(res => {
                if (res.data.results){
                    setJoke(initialJoke);
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
            <h2> Add A Joke</h2>
            <JokeForm 
                inputs = {joke}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                errors={errors}
                submitValue="Add Joke"
            />

        </div>
    )
}

export default New;