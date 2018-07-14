import React from 'react'

import {getAllProjects} from '../apiClient'
import Project from './Project'

class Body extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      projects:[]
    }
  }

  componentDidMount () {
    getAllProjects()
      .then(projects => {
        this.setState({projects: projects})
      })
  }

  render() {
    return (
      <div className='Body'>
        {this.state.projects.map(project => {
          return (
            <Project key={project.name} props={project}/>
          )
        })}
      </div>
    )
  }
}


export default Body