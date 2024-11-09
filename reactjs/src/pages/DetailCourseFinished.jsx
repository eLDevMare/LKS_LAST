import React, { useState, useEffect } from 'react';
import { Nav } from '../component/nav';
 const DetailCourseFinished = () => {

    return (
        <>
<Nav/>
<main class="py-5">
    <section>
        <div class="container">
            <h3 class="mb-3">[Course Name]</h3>
            <div class="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width: "100%"}}>100%</div>
            </div>

            <div class="mb-4">
                <h4 class="mb-3">[Set name]</h4>
                <div class="row">
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <h4 class="mb-3">[Set name]</h4>
                <div class="row">
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="mb-4">
                <h4 class="mb-3">[Set name]</h4>
                <div class="row">
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="detail-lesson.html" class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body d-flex justify-content-between">
                                <div>
                                    <small class="text-muted">Lesson</small>
                                    <h5 class="mt-2">[Lesson name]</h5>
                                </div>
                                <div>
                                    <div class="badge border border-primary text-primary">Completed</div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="mb-3">Certificate</h4>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card mb-3 text-decoration-none bg-body-tertiary">
                            <div class="card-body text-center d-flex flex-column gap-5 p-4">
                                <h5>Course Certificate</h5>

                                <div class="text-center d-flex flex-column gap-2">
                                    <p class="mb-0 text-muted"><small>This is to certify that</small></p>
                                    <h1 class="mb-0 fw-bold">[Full name]</h1>
                                    <p class="mb-0 text-muted">
                                        <small>has successfully completed the course by demonstrating <br/> theorical and practical understanding to</small>
                                    </p>
                                    <h3 class="fw-normal">[Course name]</h3>
                                </div>

                                <h6 class="mb-0">[App name]</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>
        </>
    );
}


export default DetailCourseFinished