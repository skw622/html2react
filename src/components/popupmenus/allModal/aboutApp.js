import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class AboutApp extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform" id="about-app-popup" tabIndex="-1" role="dialog" aria-labelledby="about-app-popup" aria-hidden="true">
                <div className="modal-dialog content-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>About the App</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title="About the App" />
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-12 pl-2 m-pl-0 confirm-txt m-text-center">
                                    <div className="mob-t-4">
                                        <h2 className="mob-model-title">About us</h2>
                                        <div className="text-left">
                                            <p> About the App Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from, making it over 2000 years old.</p>
                                            <p> About the App Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from, making it over 2000 years old.</p>
                                            <p> About the App Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from, making it over 2000 years old.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
