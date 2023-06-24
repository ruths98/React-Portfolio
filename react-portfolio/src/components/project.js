import React from 'react';

export default function Project(props) {//passing in each project as props

  return (
    
      <div className="card" >
        <div className="card-body">
          <a href={props.href} className="btn btn-primary" >
            <img
            style={{width:'600px'}}
              className="projectImage"
              src={props.img}
              alt="Screenshot of project"
            />

            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </a>
        </div>
      </div>
   
  )
}