import React, { useState, useEffect } from 'react';
import { Nav } from '../component/nav';
 const DetailLesson = () => {

    return (
        <>
        <Nav/>
        <main class="py-5">
    <section>
        <div class="container">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h4 class="mb-0">[Lesson name]</h4>
            </div>
            <div class="progress mb-5" role="progressbar" aria-label="Example with label" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width: "0"}}></div>
            </div>

            <div class="mb-4">
                <p class="mb-4">
                    [Lesson content text]
                </p>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <a href="detail-lesson-quiz.html" class="btn btn-primary w-100 mt-2">Continue</a>
                </div>
            </div>

        </div>
    </section>
</main>
        </>
    );
}


export default DetailLesson