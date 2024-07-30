'use client'

import SyllabusCard from "../all-cards/SyllabusCard"

export default function page() {
  return (
    <>
      <div className="syllabus container">
        <div className="d-flex justify-content-center">
            <h1 className="badge" style={{backgroundColor:'var(--blue)', fontSize:'35px'}}>Syllabus</h1>
        </div>
        <div className="row d-flex justify-content-center">
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        <SyllabusCard/>
        </div>
      </div>
    </>
  )
}
