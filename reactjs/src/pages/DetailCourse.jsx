import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLogin } from '../component/NavLogin';
import { useNavigate, Link } from "react-router-dom";

const DetailCourse = () => {
    const navigate = useNavigate();
    const { slug } = useParams(); 
    const token = localStorage.getItem('token');
    const [course, setCourse] = useState(null);

    useEffect(() => {
        const fetchCourseDetails = async (slug) => {
            const response = await fetch(`http://localhost:8000/api/course/${slug}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.status === "success" && data.data) {
                setCourse(data.data);
            }
        };

        fetchCourseDetails(slug);
    }, [slug, token]); 

    const handleRegister = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/course/${slug}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.status === "success") {
                navigate("/index"); 
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while registering for the course.");
        }
    };

    return (
        <>
            <NavLogin />
            <main className="py-5">
                <section>
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h3 className="mb-0">{course ? course.name : ''}</h3>
                            <button onClick={handleRegister} className="btn btn-primary">Register to this course</button>
                        </div>

                        <p className="mb-5">{course ? course.description : ''}</p>

                        <div className="mb-4">
                            <h4 className="mb-3">Outline</h4>
                            {course && course.sets && course.sets.length > 0 ? (
                                <div className="row">
                                    {course.sets.map((set, index) => (
                                        <div key={index} className="col-md-12">
                                            <div className="card mb-3">
                                                <div className="card-body">
                                                    <h5 className="mb-0">{set.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default DetailCourse;