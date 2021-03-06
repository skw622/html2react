import React, { Component } from 'react'

export default class MuteSystem extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links" id="mute-system-popup" tabIndex="-1" role="dialog" aria-labelledby="ban-popup" aria-hidden="true">
                <div className="modal-dialog mute-system-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Mute Window</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/lg-mute-icon.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Mute System</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">

                                    <div className="mob-t-4">
                                        <div className="sm-text-left">
                                            Sorry you cannot send messages
                                    </div>
                                        <div className="sm-text-left">
                                            because you are muted by <span className="theme-txt-color">Lin Zhengh</span>
                                        </div>
                                        <div className="sm-text-left">
                                            you will be able to send in <span className="theme-txt-color">MIN 05:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center justify-content-center mt-2">
                                <a href="#ok" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn" title="Ok">Ok</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
