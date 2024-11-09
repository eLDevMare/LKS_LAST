import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter, RouterProvider} from "react-router-dom" 
import './App.css'
import Login from './pages/login'
import Register from './pages/Regsiter'
import { Index } from './pages/Index'
import DetailCourseFinished from './pages/DetailCourseFinished'
import DetailCourseRegis from './pages/DetailCourseRegis'
import DetailCourse from './pages/DetailCourse'
import DetailLessonQuiz from './pages/DetailLessonQuiz'
import DetailLesson from './pages/DetailLesson'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/index",
      element: <Index/>
    },
    {
      path: "/detail-course/:slug",
      element: <DetailCourse />
    },
    {
      path: "/detail-course-regis",
      element: <DetailCourseRegis/>
    },
    {
      path: "/detail-course-finished",
      element: <DetailCourseFinished/>
    },
    {
      path: "/detail-lesson-quiz",
      element: <DetailLessonQuiz/>
    },
    {
      path: "/detail-lesson",
      element: <DetailLesson/>
    },
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
