import React from 'react'
import styled from '@emotion/styled'
import { small, medium, mediumUp, largeUp } from '../assets/js/media-query'

import Courses from '../components/courses'

const BadgeCardWrapper = styled.div`
  width: 100%;
  padding: 10px;

  ${medium} {
    width: 50%;
  }

  ${largeUp} {
    width: 33.33339%;
  }

  .badge-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border: solid 1px black;
    border-radius: 8px;

    ${mediumUp} {
      flex-direction: row;
      height: 100%;
    }
  }

  .badge-icon-container {
    width: 100%;
    max-width: 80px;
    height: 100%;
    margin-bottom: 15px;

    ${mediumUp} {
      margin-bottom: 0;
    }
  }

  .badge-icon {
    width: 80px;
    height: auto;
  }
  
  .badge-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    ${mediumUp} {
      padding-left: 15px;
    }
  }

  .top-part {
    display: flex;
    flex-direction: column;
    text-align: center;

    ${mediumUp} {
      height: 50%;
      text-align: left;
    }
  }

  .badge-title {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.1;
  }

  .badge-date {
    font-size: 12px;
  }

  .no-courses {
    margin-bottom: 2px;

    ${small} {
      text-align: center;
    }
  }
`

const BadgeCard = badgeData => (
  <BadgeCardWrapper>
    
    <div className="badge-card">
      
      <div className="badge-icon-container">
        <img 
          className="badge-icon"
          src={badgeData.icon} 
          alt={`${badgeData.name} badge icon`}
        />
      </div>
      
      <div className="badge-info">
        <div className="top-part">
          <h3 className="badge-title">{badgeData.name}</h3>
          <p className="badge-date">Earned on: <span>{badgeData.earnedDate}</span></p>
        </div>
        { badgeData.courses.length !== 0 ? <Courses courseData = {badgeData.courses}/> : <p className="no-courses">No Course Required.</p> }
      </div>
    
    </div>
  
  </BadgeCardWrapper>
)

export default BadgeCard
