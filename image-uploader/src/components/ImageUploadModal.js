import React, { Component } from 'react'
import '../css/modal.css'
import SideDesc from './SideDesc'
import ImageBody from './ImageBody';
import {connect} from 'react-redux';
import processImage from '../Imageprocssor/ImageProcessor'

 class ImageUploadModal extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.fileRef = new React.createRef()
    }

    
addImgSrc = ()=>{
    console.log(this.fileRef.current.files.length )
    if(this.fileRef.current.files.length === 0)
    return;

    let objUrl = URL.createObjectURL(this.fileRef.current.files[0]);
    this.props.addImageSource(objUrl);
}
    render() {
        return (
            <div className="modal">
                {/* this is root modal */}
                <div className="modal-dialog">
                    
                     {/* this is header panel */}
                    <div className="modal-header">
                        <h4>Create Items</h4>
                        <div>
                            <label >
                                <i className="fa fa-image"></i> Add Photo
                                <input ref ={this.fileRef} onChange={this.addImgSrc} type="file" style={{ display: "none" }} name="image" />
                            </label>
                        </div>
                    </div>

                    {/* this is modal */}
                    <div className="modal-body">
                        <SideDesc />
                        <ImageBody />

                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatcherToProps = (dispatch)=>{
    const res = {type:"ADD_SOURCE",value:""}
    return(
        {
            addImageSource: (source) =>{
                res.value = source
                dispatch(res)
            }
        }
    )

}

export default  connect(null,mapDispatcherToProps)( ImageUploadModal)
