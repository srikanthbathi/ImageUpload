import React, { Component } from 'react';
import { PropagateLoader } from "react-spinners";


export default class LoadingIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: false
        };
      }
     
      render() {
        return (
            <div style={{display:"inline"}}>
            <PropagateLoader
              size={50}
              //size={"150px"} this also works
              color={"#000000"}
              loading={this.state.loading}
              style={{color:"green"}}
            />
            </div>
        );
      }
}
