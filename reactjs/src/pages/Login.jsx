import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Nav } from "../component/nav";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                username,
                password,
            });

            if (response) {
                localStorage.setItem("token", response.data.data.token)
                navigate('/index')
            } else {
                alert("Login failed: " + response.data.message);
            }
        } catch (error) {
            console.error("Login error:", error);
        }        
    };
    
    useEffect(() => {
        if(token){
            navigate('/index')
        }
    })

    return (
        <>
            <Nav/>
            <main className="py-5">
                <section>
                    <div className="container">
                        <h3 className="mb-3 text-center">Login</h3>

                        <div className="row justify-content-center">
                            <div className="col-md-7">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mb-2">
                                                <label htmlFor="username">Username</label>
                                                <input
                                                    type="text"
                                                    name="username"
                                                    required
                                                    className="form-control"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="password">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    required
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>
                                            <div className="mt-3">
                                                <button type="submit" className="btn btn-primary w-100">
                                                    Login
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
