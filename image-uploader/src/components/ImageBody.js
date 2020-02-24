import React, { Component } from 'react';
import '../css/imagebody.css';

export default class ImageBody extends Component {

    componentDidMount(){
        let bodyElm =   document.getElementsByClassName("image-body")[0];
        console.log(bodyElm.offsetWidth)
    }

    render() {
        return (
            <div className="image-body">
                <div className="image-container">

                </div>
            </div>
        )
    }
}
