import React, { Component } from 'react'

export default class Report extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform" id="report-group-popup" tabIndex="-1" role="dialog" aria-labelledby="report-group-popup" aria-hidden="true">
                <div className="modal-dialog report-group-model actions-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Report Group</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center d-flex align-items-center justify-content-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/reported-icon.png" className="img-fluid image-34" alt="no" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Report Group</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <b>Are you sure you want to report this group <span className="theme-txt-color">"Group-name"</span></b>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center mt-0 justify-content-center">
                                <a href="#Report" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn order-1" title="Report">Report</a>
                                <a href="#Cancel" className="btn sm-btn dark-gray-bg mob-radius-btn m-r-sm cancel-btn order-2" title="Cancel">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
