import React from 'react';

const PetForm = props => {
    const {inputs,handleInput,handleSubmit,errors,submitValue} = props;
    return(
        <form className="col-5 mx-auto"onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="petName">Pet Name:</label>
                <input className="form-control" type="text" value={inputs.petName} onChange={handleInput} name="petName"/>
                <span className="text-danger">{errors.petName ? errors.petName.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="petType">Pet Type:</label>
                <input className="form-control" type="text" value={inputs.petType} onChange={handleInput} name="petType"/>
                <span className="text-danger">{errors.petType ? errors.petType.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="petDesc">Pet Description:</label>
                <input className="form-control" type="text" value={inputs.petDesc} onChange={handleInput} name="petDesc"/>
                <span className="text-danger">{errors.petDesc ? errors.petDesc.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillOne">Pet Skill 1:</label>
                <input className="form-control" type="text" value={inputs.skillOne} onChange={handleInput} name="skillOne"/>
                <span className="text-danger">{errors.skillOne ? errors.skillOne.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillTwo">Pet Skill 2:</label>
                <input className="form-control" type="text" value={inputs.skillTwo} onChange={handleInput} name="skillTwo"/>
                <span className="text-danger">{errors.skillTwo? errors.skillTwo.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="skillThree">Pet Skill 3:</label>
                <input className="form-control" type="text" value={inputs.skillThree} onChange={handleInput} name="skillThree"/>
                <span className="text-danger">{errors.skillThree? errors.skillThree.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-info"/>
        </form>
    )
}

export default PetForm;