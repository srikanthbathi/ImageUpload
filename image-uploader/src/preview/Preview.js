import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getImageSize,getImageContainerResolution} from '../Imageprocssor/utils'

 class Preview extends Component {

    constructor(props){
        super(props);
        this.state ={
            imageContainer:{},
            imageActSize:{}

        }
    }



   async componentDidMount(){
        console.log(this.props);
        console.log();
        let imgAct = {width:"",height:""},imgContainer = {width:"",height:""}
        let res = await getImageSize(this.props.src);
        imgAct.width = res.width;
        imgAct.height = res.height;
        res = getImageContainerResolution();
        console.log("updating state",imgAct);
        imgContainer.width = res.width;
        imgContainer.height = res.height;
        this.setState({
            imageContainer:imgContainer,
            imageActSize:imgAct

        })

    }



    render() {
        return (
            <div className="modal">
                <div className="modal-dialog" style={{backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <img style={{width:this.state.imageActSize.width,height:this.state.imageActSize.height}} src = {this.props.src}></img>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state)=>{
   return{
       src:state.preview
   }
}

export default connect(mapStateToProps,null)(Preview)
