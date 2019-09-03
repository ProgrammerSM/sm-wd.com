import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'

import BadgeCard from '../components/badge-card'

const MyBadges = styled.section`
  display: flex;
  flex-flow: row wrap;
`

const MyPoints = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0 10px;
  padding-top: 10px;
  border: solid 1px black;
  border-radius: 8px;

  .points-item {
    margin: 5px;
    padding: 5px 10px;
    border: solid 1px dodgerblue; 
    border-radius: 8px;
  }
`

const SecondPage = ({ data }) => {
  const pointObj = data.allDataJson.edges[0].node.points

  Object.size = function(obj) {
    var size = 0, key
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++
    }
    return size;
  }

  // Get the size of an object
  const size = Object.size(pointObj)
  
  return (
    <Layout>
      <SEO title='Treehouse Badges' />
      
      <h1 css={{ padding: '0 10px' }}>{data.allDataJson.edges[0].node.name}'s Earned Treehouse Badges</h1>

      <MyPoints>
        {          
          Object.keys(pointObj).map(pointType => {

            const pointTypeUnderscoreSplit = pointType.split("_")

            const filteredPointType = pointTypeUnderscoreSplit.filter(value => {
              return value !== ""
            })
            
            if (filteredPointType.length === 1) {
              pointType = filteredPointType[0]
            } else {
              pointType = filteredPointType.join(" ")
            }

            if (pointObj[pointType] === undefined || pointObj[pointType] === "") {
              pointObj[pointType] = 0
            }

            if (pointType === 'total') {
              return (
                <div 
                  key={pointType} 
                  css={{
                    width: '100%',
                    marginTop: '10px',
                    padding: '10px',
                    backgroundColor: 'black',
                    color: 'white',
                    textAlign: 'right',
                    order: `${size}`,                     
                  }}
                >
                  Total: { pointObj[pointType] }
                </div>
              )
            }

            return (
              <div key={pointType} className="points-item">{ pointType }: { pointObj[pointType] }</div>
            )

          })
        }
      </MyPoints>
      
      <MyBadges>
        {
          data.allDataJson.edges[0].node.badges.map(badgeData => {
            const earnedDate = new Date(badgeData.earned_date)
            const month = earnedDate.getMonth()
            const day = earnedDate.getDate()
            const year = earnedDate.getFullYear()
            
            return <BadgeCard 
              key = {badgeData.id}
              name = {badgeData.name}
              icon = {badgeData.icon_url}
              earnedDate = {`${month}/${day}/${year}`}
              courses = {badgeData.courses}
            />
          })
        }
      </MyBadges>    
    
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          badges {
            earned_date
            icon_url
            id
            name
            courses {
              title
            }
          }
          name
          points {
            APIs
            Android
            Business
            CSS
            C_
            Computer_Science
            Data_Analysis
            Databases
            Design
            Development_Tools
            Digital_Literacy
            Go
            HTML
            Java
            JavaScript
            Learning_Resources
            Machine_Learning
            PHP
            Python
            Quality_Assurance
            Ruby
            Security
            Swift
            iOS
            total
          }
        }
      }
    }
  }
`
