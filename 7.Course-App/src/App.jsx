import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Courses from './components/Course'
import './css/Course.css';

function App() {

  return (
    <>
      <Header/>
      <div className='course-main'>
      {
        courses?.map((courses)=>(
          <Courses key={courses.id} course={courses}/>
        ))
      }
      </div>
    </>
  )
}

export default App
