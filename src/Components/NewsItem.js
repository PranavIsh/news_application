import React, { Component } from "react";

export class NewsItem extends Component {
  render() {

    let{title,description,imgUrl,newsUrl} = this.props

    return (
      <div className="">
        <div className="card my-3" style={{width: "20rem",height:description===null?"398px":''}}>
          <img src={imgUrl === null ?"https://cdn.motor1.com/images/mgl/0eO903/s1/2026-chevrolet-corvette-zr1x.jpg":imgUrl} style={{height:'190px'}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text ">
              {description}
            </p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
