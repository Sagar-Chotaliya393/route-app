import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                "https://reqres.in/api/login",
                {
                    email,
                    password
                },
                {
                    headers: {
                        "x-api-key": "reqres-free-v1"
                    }
                }
            );

            localStorage.setItem("token", response.data.token);
            alert("Login successful");
        }
        catch (error) {
            alert(error.response.data.error);
        }
    }

    return (
        <>

            <h4>Login Page</h4>

            <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />
            <button onClick={handleLogin}>
                Login
            </button>
        </>
    )
}

export default Login;