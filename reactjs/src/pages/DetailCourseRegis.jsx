import React, { useState, useEffect } from 'react';
import { Nav } from '../component/nav';
 const DetailCourseRegis = () => {

    return (
        <>
<Nav/>

<main class="py-5">
    <section>
        <div class="container">
            <h3 class="mb-3">[Course name]</h3>
            <div class="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width: "25%"}}>25%</div>
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
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge border">Current</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-center mb-4">
                <p class="mb-2"><b>Too easy?</b></p>
                <a href="jump.html" class="btn btn-outline-primary">Jump Here</a>
            </div>

            <div class="mb-4">
                <h4 class="mb-3">[Set name]</h4>
                <div class="row">
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
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
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-12">
                        <a href="#" class="card mb-3 text-decoration-none bg-body-tertiary opacity-50">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <small class="text-muted">Lesson</small>
                                        <h5 class="mt-2">[Lesson name]</h5>
                                    </div>
                                    <div>
                                        <div class="badge">Locked</div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</main>
        </>
    );
}


export default DetailCourseRegis