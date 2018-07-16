import React from 'react'

var divStyle = {
  width: '18em'
};

const Project = (props) => (
  <div className='project col-sm'>
    <div className="card" style={divStyle}>
    <img className="card-img-top" src="https://picsum.photos/200/200/?random"
 alt={`image of ${props.props.title}`} />
    <div className="card-body">
      <h5 className="card-title">{props.props.title}</h5>
      <p className="card-text">{props.props.description}</p>
      <a href={props.props.link} className="btn btn-secondary">{props.props.link}</a>
    </div>
    </div> 
  </div>
)


export default Project