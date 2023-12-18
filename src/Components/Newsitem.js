import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title,description ,URL,sourceurl}=this.props;
    return (
      <>
        <div className="card" style={{margin:"1.5vh 0",}} >
  <img src= {URL} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={sourceurl}   target="_blank" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </>
    )
  }
}

export default Newsitem