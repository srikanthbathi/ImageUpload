import React, { Component } from 'react'
import '../css/imgcomp.css';

export default class Image extends Component {
    render() {
        return (
            <div style={{width:this.props.width,height:this.props.height}} className="img-div"> 
        {
               this.props.children
               }
            </div>
        )
    }
}
