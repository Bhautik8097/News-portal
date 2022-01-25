import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
      let {title,description,urlToImage,newUrl,author,date,source} = this.props;
    return <div>
                <div className="card my-4 mx-1">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%',zIndex:'1'}}>
                              {source}
                             <span className="visually-hidden">unread messages</span>
                             </span>
                    <img src={urlToImage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">
                          {title}
                          
                        </h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                        <a href={newUrl} target="_blank" className="btn btn-primary">Read More..</a>
                    </div>
                </div>
           </div>;
  }
}

export default Newsitem;
