import React, { Component } from 'react'

export default class Delete extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform" id="delete-popup" tabIndex="-1" role="dialog" aria-labelledby="delete-popup" aria-hidden="true">
                <div className="modal-dialog delete-model actions-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Delete Group</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center d-flex align-items-center justify-content-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/dustbin-icon.png" className="img-fluid image-34" alt="mo" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Delete Group</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <b>Are you sure you want to delete this group <span className="theme-txt-color">"Group-name"</span></b>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center mt-0 justify-content-center">
                                <a href="#done" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn order-1" title="Done">Done</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn m-r-sm cancel-btn order-2" title="Cancel">Cancel</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
