import React from 'react'
import styled from '@emotion/styled'
import { small } from '../assets/js/media-query'

const CoursesWrapper = styled.div`
  ${small} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  p {
    margin-bottom: 2px;
  }

  ol {
    margin-left: 1em;
    font-size: 12px;
  }
`

const Courses = courseData => (  
  <CoursesWrapper>
    <p>Can Be Aquired in:</p>
    <ol>
      {
        courseData.courseData.map(course => {
          return (<li key = {course.title}>{course.title}</li>)
        })
      }
    </ol>
  </CoursesWrapper>  
)

export default Courses
