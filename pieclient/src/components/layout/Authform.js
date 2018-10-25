import React from 'react';
const Authform = (props) => {
    

    return (
    <div>
        <form>
            <h1>{props.formName}</h1>
            <div className="imput-group">
            <label htmlFor="email">Email</label>
            <input
            type='text'
            id="emailField"
            name="email"
            className="input-field"
            onChange={props.changeInputs}
            />
            </div>
            <div className='input-group'>
            <label htmlFor="password">Password</label>
            <input
            type="text"
            id="passwordField"
            name="password"
            className="input-feild"
            onChange={props.changeInputs}
            />
            </div>
            <input type="button" value="Submit" />
        </form>

    </div>
)
}

export default Authform;