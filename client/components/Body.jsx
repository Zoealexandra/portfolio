import React from 'react'

import {getAllProjects} from '../apiClient'
import Project from './Project'

class Body extends React.Component {
  constructor (props) {
    super (props) 
    this.state = {
      projects:[
      {id: 1001, name: 'name 1', description: 'goose', image: '../goose.png', link: 'www.google.com'}
      ]
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
            <Project key={project.id} props={project}/>
          )
        })}
      </div>
    )
  }
}


export default Body