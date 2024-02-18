import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to Voting Decentralized Application</h1>
            <button className="login-button" onClick={props.connectWallet}>Login to Metamask</button>
        </div>
    )
}

export default Login;