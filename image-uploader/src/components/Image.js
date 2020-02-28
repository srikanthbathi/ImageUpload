import React, { Component } from 'react'
import '../css/imgcomp.css';
import {connect} from 'react-redux';

class Image extends Component {

    constructor(props){
        super(props);
        this.imgref = React.createRef();
    }
    performDelete = (e)=>{
       console.log(e.target.parentElement,this.imgref.current)
       this.props.deleteImage(this.imgref.current.src)
    }
    
    render() {
        return (
            <div  style={{width:this.props.width,height:this.props.height}} 
            className={this.props.img?"img-div def":"img-div addimg-style-border"}> 
               {
               this.props.img ? 
               [
               <img ref ={this.imgref} className="img" alt="Img" src = {this.props.src}></img>,
               <div key={this.props.key} className="toolBox">
                   <i class="fa fa-eye"></i>
                   <i class="fa fa-edit"></i>
                   <i class="fa fa-trash" onClick={this.performDelete}></i>
               </div>
               ] :
               this.props.children
               }
            </div>
        )
    }
}



const mapDispatchToProps = (dispatch)=>
{
    return ({
       deleteImage:(source)=>{dispatch({type:"DELETE_SOURCE",value:source})}
    })

}

export default connect(null,mapDispatchToProps)(Image)
