import React, { Component } from 'react';
import '../css/imagebody.css';
import {isEditable,imgWidthHeightCalc} from './ImageWidthHeightCalc';
import Image from './Image';
import {connect} from 'react-redux';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

 class ImageBody extends Component {
    constructor(props){
        super(props);
        console.log("constructor props",props)
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
    componentDidUpdate(){
        console.log("componentDidUpdate",this.props)
    }
addImage = (e)=>{
    console.log(this.fileRef.current.files.length )
    if(this.fileRef.current.files.length === 0)
    return;

    let objUrl = URL.createObjectURL(this.fileRef.current.files[0]);
    this.props.addImageSource(objUrl);
    
}
    render() {
        return (
            <div className="image-body">
                <div ref = {this.imgContainer} className="image-container">
                          {
                              this.props.sources.map(
                                  (item,index)=><Image key={index} width = {this.state.dim.width} height={this.state.dim.height} 
                                  src = {item} img={true}/>)
                          }
                           <LoadingIndicator loading = {true} color={"#000000"}/>

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

const mapStateToprops = state=>{
    return {
        sources:state.imgSources
    }
}

const mapDispatcherToprops = (dispatch)=>{

    const res = {type:"ADD_SOURCE",value:"Source"}
    return {
        addImageSource : (source)=>{
            res.value=source;
            dispatch(res);
        }
    }
}

export default connect(mapStateToprops,mapDispatcherToprops)(ImageBody);
