import React, { Component } from 'react';
import '../css/sidedesc.css'

export default class SideDesc extends Component {
    render() {
        return (
            <div className="main">
                 <div className="desc-container">
                      <input placeholder="Item name" type="text" className="item-name"></input>
                      <div placeholder="Description" contentEditable="true" type="text" className="item-desc editor" ></div>
                 </div>
            </div>
        )
    }
}
