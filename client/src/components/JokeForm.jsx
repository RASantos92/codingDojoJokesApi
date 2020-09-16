import React from 'react';

const JokeForm = props => {
    const {inputs,handleInput,handleSubmit,errors,submitValue} = props;
    return(
        <form className="col-5 mx-auto"onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="setup">Setup:</label>
                <input className="form-control" type="text" value={inputs.setup} onChange={handleInput} name="setup"/>
                <span className="text-danger">{errors.setup ? errors.setup.message : ""}</span>
            </div>
            <div className="form-group">
                <label htmlFor="setup">punchline:</label>
                <input className="form-control" type="text" value={inputs.punchline} onChange={handleInput} name="punchline"/>
                <span className="text-danger">{errors.punchline ? errors.punchline.message : ""}</span>
            </div>
            <input type="submit" value={submitValue} className="btn btn-info"/>
        </form>
    )
}

export default JokeForm;