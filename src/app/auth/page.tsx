"use client";
import { useState } from "react";
import "./auth.css";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { TabView, TabPanel } from "primereact/tabview";

export default function AuthPage() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    return (
        <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
            {/* Sign Up Form */}
            <div className="form-container sign-up-container">
                <form action="#">
                    <h1 className="text-xl">Đăng ký</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>hoặc sử đụng email của bạn để đăng ký</span>
                    <div className="p-fluid flex flex-col">
                        <InputText type="text" placeholder="Name" className="custom-input" />
                        <InputText type="email" placeholder="Email" className="custom-input" />
                        <Password placeholder="Password" className="custom-input" feedback={false} toggleMask />
                    </div>

                    <Button>Đăng ký</Button>
                </form>
            </div>

            {/* Sign In Form */}
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1 className="text-xl">Đăng nhập</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>

            {/* Overlay */}
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <img
                            src="/images/login-icon2.png"
                            alt="Login Icon"
                            style={{ width: "190px", marginBottom: "10px" }}
                        />
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
                            Sign In
                        </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <img
                            src="/images/login-icon2.png"
                            alt="Login Icon"
                            style={{ width: "190px", marginBottom: "10px" }}
                        />
                        <h1>XLVISUDEPTRAINAY XIN CHÀO</h1>
                        <p>Vui lòng đăng ký ngay tại đây</p>
                        <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
