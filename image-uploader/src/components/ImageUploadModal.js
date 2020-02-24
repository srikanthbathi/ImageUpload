import React, { Component } from 'react'
import '../css/modal.css'
import SideDesc from './SideDesc'
import ImageBody from './ImageBody'

export default class ImageUploadModal extends Component {
    render() {
        return (
            <div className="modal">
                {/* this is root modal */}
                <div className="modal-dialog">
                    
                     {/* this is header panel */}
                    <div className="modal-header">
                        <h4>Create Items</h4>
                        <div>
                            <label>
                                <i className="fa fa-image"></i> Add Photo<input type="file" style={{ display: "none" }} name="image" />
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
