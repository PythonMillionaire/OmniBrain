import React from 'react';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';
import ChatMessagesToolBar from "./middle-section/ChatMessagesToolBar";
import ChatMessagesSection from "./middle-section/ChatMessagesSection";
import ChatInputSection from "./middle-section/ChatInputSection";


import facebookLogo from "../../assets/images/third-party/facebook-logo.svg";
import googleLogo from "../../assets/images/third-party/google-logo.svg";

const Main = () => {
    return (
        <div id="main">
            <LeftSection />
            <ChatMessagesToolBar/>

            <ChatMessagesSection/>

            <ChatInputSection/>
            <RightSection/>

            <div id={"authentication"}>
                <div id="authentication-overlay"></div>

                <div id="authentication-section">
                    <div id="authentication-section-close-button" className="button"
                         onClick={() => document.getElementById("authentication")?.remove()}>×
                    </div>

                    <div id="authentication-left">
                        <div>
                            <div id={"authentication-left-top"}>
                                <div id={"authentication-left-title"}>OmniBrain</div>

                                <div id={"authentication-left-description"}>
                                    The future of <b>Artificial Intelligence</b>.
                                </div>
                            </div>

                            <div id={"authentication-left-bottom"}>

                            </div>
                        </div>
                    </div>

                    <div id="authentication-right">
                        <div id="third-party-authentication-section">
                            <div id="sign-in-with-google">
                                <img src={googleLogo} alt="Google logo" id="sign-in-with-google-logo"/>
                                <div id="sign-in-with-google-text">Continue with Google</div>
                            </div>

                            <div id="sign-in-with-facebook">
                                <img src={facebookLogo} alt="Facebook logo" id="sign-in-with-facebook-logo"/>
                                <div id="sign-in-with-facebook-text">Continue with Facebook</div>
                            </div>
                        </div>

                        <div id="authentication-section-or-divider">
                            <div className="authentication-section-or-divider-line"></div>
                            <div id="authentication-section-or-divider-text">or</div>
                            <div className="authentication-section-or-divider-line"></div>
                        </div>

                        <div id={"omnibrain-authentication-section"}>
                            <div id="login-section">
                                <div id="login-section-header">
                                    <div id="login-section-title">Sign in</div>
                                </div>
                                <div>
                                    <label htmlFor="username-input" id="login-section-username">Username</label>
                                    <input type="text" id="username-input" name="username"/>
                                </div>
                                <div>
                                    <label htmlFor="password-input" id="login-section-password">Password</label>
                                    <input type="password" id="password-input" name="password"/>
                                </div>
                                <div>
                                    <button type="button" id="login-section-login-button">Login</button>
                                </div>
                            </div>

                            <div id="registration-section">
                                <div id="registration-section-header">
                                    <div id="registration-section-title">New here? Create an account</div>
                                </div>
                                <div>
                                    <label htmlFor="username-input" id="registration-section-username">Username</label>
                                    <input type="text" id="username-input" name="username"/>
                                </div>
                                <div>
                                    <label htmlFor="password-input" id="registration-section-password">Password</label>
                                    <input type="password" id="password-input" name="password"/>
                                </div>
                                <div>
                                    <button type="button" id="registration-section-registration-button">Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="portal-root"></div>
        </div>
    );
};

export default Main;