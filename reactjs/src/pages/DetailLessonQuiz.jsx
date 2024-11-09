import React, { useState, useEffect } from 'react';
import { Nav } from '../component/nav';
 const DetailLessonQuiz = () => {

    return (
        <>
        <Nav/>
        <main class="py-5">
            <section>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h4 class="mb-0">[Lesson name]</h4>
            </div>
            <div class="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{ width: "16%" }}></div>
            </div>

            <div class="mb-4">
                <p class="mb-4">
                    [Lesson content text]
                </p>

                <div>
                    <div class="my-2">
                        <input type="radio" id="choice-1" name="answer" class="input-choice"/>
                        <label for="choice-1" class="card">
                            <div class="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div class="my-2">
                        <input type="radio" id="choice-2" name="answer" class="input-choice"/>
                        <label for="choice-2" class="card">
                            <div class="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div class="my-2">
                        <input type="radio" id="choice-3" name="answer" class="input-choice"/>
                        <label for="choice-3" class="card">
                            <div class="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                    <div class="my-2">
                        <input type="radio" id="choice-4" name="answer" class="input-choice"/>
                        <label for="choice-4" class="card">
                            <div class="card-body">
                                [Option text]
                            </div>
                        </label>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <a href="detail-course-registered.html" class="btn btn-primary w-100 mt-2">Check</a>
                </div>
            </div>

        </div>
            </section>
        </main>
        </>
    );
}


export default DetailLessonQuiz