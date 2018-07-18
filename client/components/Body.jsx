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
      <div className='body container-fluid'>
      <h3>Projects</h3>
        <div className='row project-row'>
          {this.state.projects.map(project => {
            return (
              <Project key={project.projectId} props={project}/>
            )
          })}
        </div>
      </div>
    )
  }
}


export default Body