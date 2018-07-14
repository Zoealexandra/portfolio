import React from 'react'

var divStyle = {
  width: '18em'
};

const Project = (props) => (
  <div className='project'>
    <div className="card" style={divStyle}>
    <img className="card-img-top" src={props.props.img} alt="image of project" />
    <div className="card-body">
      <h5 className="card-title">{props.props.name}</h5>
      <p className="card-text">{props.props.description}</p>
      <a href={props.props.link} className="btn btn-primary" /> {props.props.link}
    </div>
    </div> 
  </div>
)


export default Project