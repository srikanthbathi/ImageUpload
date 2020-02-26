import React, { Component } from 'react'
import AvatarEditor from 'react-avatar-editor'

export default class ImageCropper extends Component {
    render() {
        return (
            <div className="modal">
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
                <AvatarEditor style={{}}
                width={450}
                height={450}
                border={1}
                color={[0, 0, 0, 0.4]}/>
                </div>
                
            </div>
        )
    }
}