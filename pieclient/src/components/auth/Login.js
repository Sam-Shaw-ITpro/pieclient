import React from "react";
import Authform from "../layout/Authform";

class Login extends React.Component {

    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Authform
                    formName="Login"
                    changeInputs={ this.handleChange }
                />
                <h6>Register <button onClick={this.props.toggleForm}>HERE</button> if you have an account</h6>
            </div>
        )
    }
}

export default Login;