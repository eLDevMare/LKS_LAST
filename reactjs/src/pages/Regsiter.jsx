import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Nav } from "../component/nav";

const Register = () => {
    const [username, setUsername] = useState("");
    const [full_name, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/register", {
                username,
                password,
                full_name,
            });

            if (response) {
                localStorage.setItem("token", response.data.data.token)
                navigate('/index')
            } else {
                alert("register failed: " + response.data.message);
            }
        } catch (error) {
            console.error("register error:", error);
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

<main class="py-5">
    <section>
        <div class="container">
            <h3 class="mb-3 text-center">Register</h3>

            <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="card mb-4">
                        <div class="card-body">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group mb-2">
                                    <label for="full_name">Full Name</label>
                                        <input
                                            type="text"
                                            name="full_name"
                                            required
                                            className="form-control"
                                            value={full_name}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                </div>
                                <div class="form-group mb-2">
                                    <label for="username">Username</label>
                                    <input
                                            type="text"
                                            name="username"
                                            required
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                </div>
                                <div class="form-group mb-2">
                                    <label for="password">Password</label>
                                    <input
                                            type="password"
                                            name="password"
                                            required
                                            className="form-control"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn btn-primary w-100">Register</button>
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
    )
}

export default Register;