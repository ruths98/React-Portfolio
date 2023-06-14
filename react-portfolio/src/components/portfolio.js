import React from 'react';

export default function Portfolio(props) {//passing in each project as props
        return (        
        < div className="portfolioContainer">
        <div className="card" >
        <img
          className="projectImage"
          src={props.img}
          alt="Screenshot of project"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.title}</h5>
          <p className="card-text">Description: {props.description}</p>
          <a href={props.href} className="btn btn-primary">
          </a>
        </div>
      </div>
        </div >
        )
}