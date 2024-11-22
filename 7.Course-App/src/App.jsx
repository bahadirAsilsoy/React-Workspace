import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './Data'
import Courses from './components/Courses'

function App() {

  return (
    <>
      <Header/>
      {
        courses?.map((courses)=>(
          <Courses key={courses.id} course={courses}/>
        ))
      }
    </>
  )
}

export default App
