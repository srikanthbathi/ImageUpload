import React, { Component } from 'react';
import '../css/imagebody.css';
import imgWidthHeightCalc from './ImageWidthHeightCalc';
import Image from './Image';

export default class ImageBody extends Component {
    constructor(props){
        super(props);
        this.state= {
            dim:"",
            sources:[]
        }
        this.fileRef = React.createRef();
    }

    componentDidMount(){
        let bodyElm =   document.getElementsByClassName("image-container")[0];
        let dim=  imgWidthHeightCalc(bodyElm.offsetWidth-20);
        this.setState(
            {
               dim:dim
            }
        )
    }
addImage = (e)=>{
    console.log(this.state.sources);
    let newSources = this.state.sources.slice(0);
    newSources.push(this.fileRef.current.files[0]);
    this.setState({
        sources:newSources
    })
}
    render() {
        const sources = []
        return (
            <div className="image-body">
                <div ref = {this.imgContainer} className="image-container">
                          {
                              this.state.sources.map(
                                  (item)=><Image width = {this.state.dim.width} height={this.state.dim.height} 
                                  src = {item} img={true}/>)
                          }

                          <Image  width = {this.state.dim.width} height = {this.state.dim.height}>
                          <label  className="add-img">
                              <i className="fa fa-image" ></i> Add Photo
                              <input onChange={this.addImage} ref = {this.fileRef} type="file" name="image" className ="input-file"/>
                          </label>
                        </Image>
                </div>
            </div>
        )
    }
}
