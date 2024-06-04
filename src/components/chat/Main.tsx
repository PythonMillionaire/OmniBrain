import React from 'react';
import LeftSection from './left-section/LeftSection';
import RightSection from './right-section/RightSection';
import ChatMessagesToolBar from "./middle-section/ChatMessagesToolBar";
import ChatMessagesSection from "./middle-section/ChatMessagesSection";
import ChatInputSection from "./middle-section/ChatInputSection";

const Main = () => {
    return (
        <div id="main">
            <LeftSection />
            <ChatMessagesToolBar/>

            <ChatMessagesSection/>

            <ChatInputSection/>
            <RightSection/>
            <div id="login">
                <div id="login-overlay"></div>
                <div id="login-section">
                    <div id="login-section-header">
                        <div id="login-section-title">Login</div>
                        <div id="login-section-close-button" className="button" onClick={() => document.getElementById("login")?.remove()}>×</div>
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
            </div>
            <div id="portal-root"></div>
        </div>
    );
};

export default Main;