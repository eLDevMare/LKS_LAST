import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'; 
import { NavLogin } from '../component/NavLogin';

export const Index = () => {
    const token = localStorage.getItem("token"); 
    const navigate = useNavigate();
    const [myCourses, setMyCourses] = useState([]);
    const [otherCourses, setOtherCourses] = useState([]); 

    useEffect(() => {
      if (token == null) {
        navigate("/login"); 
      }
      
      const fetchCourses = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/course/get/course', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setMyCourses(response.data.data);

          const otherResponse = await axios.get('http://localhost:8000/api/course/other/course', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setOtherCourses(otherResponse.data.data);

        } catch (error) {
          console.error(error);
        }
      };

      fetchCourses();
    }, [navigate, token]);

    return (
        <>
        <NavLogin />
        <main className="py-5">
            <section className="my-courses">
                <div className="container">
                    <h4 className="mb-3">My courses</h4>
                    <div className="courses d-flex flex-column gap-3">
                        {myCourses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/detail-course-registered/${course.slug}`} 
                                className="card text-decoration-none bg-body-tertiary"
                            >
                                <div className="card-body">
                                    <h5 className="mb-2">{course.name}</h5>
                                    <p className="text-muted mb-0">{course.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="other-courses mt-4">
                <div className="container">
                    <h4 className="mb-3">Other courses</h4>
                    <div className="d-flex flex-column gap-3">
                        {otherCourses.map((course) => (
                            <Link
                                key={course.id}
                                to={`/detail-course/${course.slug}`} 
                                className="card text-decoration-none bg-body-tertiary"
                            >
                                <div className="card-body">
                                    <h5 className="mb-2">{course.name}</h5>
                                    <p className="text-muted mb-0">{course.description}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};
