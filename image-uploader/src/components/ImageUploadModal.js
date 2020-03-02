import React, { Component } from 'react'
import '../css/modal.css'
import SideDesc from './SideDesc'
import ImageBody from './ImageBody';
import {connect} from 'react-redux';
import Footer from '../footer/Footer';


 class ImageUploadModal extends Component {

    constructor(props){
        super(props);
        console.log(props);
        this.fileRef = new React.createRef()
        this.state = {
            close: false
        }
    }

    closeModal = () => {
      this.setState({
          close:true
      })
    }

addImgSrc = ()=>{
    console.log(this.fileRef.current.files.length)
    if(this.fileRef.current.files.length === 0)
    return;

    let objUrl = URL.createObjectURL(this.fileRef.current.files[0]);
    this.props.addImageSource(objUrl);
}
    render() {
        return (
            <div  className={this.state.close?"display-none":"modal"} >
                {/* this is root modal */}
                <div className="modal-dialog">
                    
                     {/* this is header panel */}
                    <div className="modal-header">
                        <h4>Create Items</h4>
                        <div style={{display:"flex",justifyContent:"space-between",width:"120px"}}>
                        <div>
                            <label>
                                <i className="fa fa-image"></i> Add Photo
                                <input ref ={this.fileRef} onChange={this.addImgSrc} type="file" style={{ display: "none" }} name="image" />
                            </label>
                        </div>
                        <i onClick={this.closeModal} class="fa fa-times"></i>
                        </div>
                        
                    </div>

                    {/* this is modal */}
                    <div className="modal-body">
                        <SideDesc />
                        <ImageBody />
                    </div>
                    <Footer/>
                </div>

            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return{preview:state.preview}
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

export default  connect(mapStatetoProps,mapDispatcherToProps)( ImageUploadModal)
