import React from 'react'
import styled from 'styled-components'

const GreenDiv = styled.div`
  height: 1em;
  width: 1em;
  margin-right: 0.5em;
  background-color: green;
  box-shadow: 0.2em 0.2em gray;
`

export default props => {
  const size =
    props.statNumber / 2 <= 10 ? Math.floor(props.statNumber / 2) : 10
  const statArray = []
  for (let i = 0; i < size; i++) {
    statArray.push({id: i})
  }

  return (
    <div className="flex dotContainer">
      {statArray.map(stat => <GreenDiv key={stat.id} />)}
    </div>
  )
}
