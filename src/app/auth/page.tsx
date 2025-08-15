"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { registerUser, loginUser } from "../../service/authService";
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';               // Core
import 'primeicons/primeicons.css';

export default function AuthPage() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const router = useRouter();

    // Lưu lỗi và success riêng cho mỗi form
    const [registerErrors, setRegisterErrors] = useState<{ [key: string]: string[] }>({});
    const [loginErrors, setLoginErrors] = useState<{ [key: string]: string[] }>({});
    const [registerSuccess, setRegisterSuccess] = useState("");
    const [loginSuccess, setLoginSuccess] = useState("");

    // State form đăng ký
    const [registerData, setRegisterData] = useState({
        username: "",
        email: "",
        password: ""
    });

    // State form đăng nhập
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    // Xử lý đăng ký
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegisterErrors({});
        setRegisterSuccess("");
        try {
            const data = await registerUser(registerData);
            if (data.errors) {
                setRegisterErrors(data.errors);
            } else {
                setRegisterSuccess("Đăng ký thành công");
                setRegisterData({ username: "", email: "", password: "" }); // reset input
            }
        } catch (err: any) {
            if (err.response?.status === 422) {
                setRegisterErrors(err.response.data.errors || {});
            } else {
                console.error("Register error:", err);
            }
        }
    };

    // Xử lý đăng nhập
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginErrors({});
        setLoginSuccess("");
        try {
            const data = await loginUser(loginData);
            if (data.errors) {
                setLoginErrors(data.errors);
            } else {
                setLoginSuccess("Đăng nhập thành công");
                setLoginData({ username: "", password: "" });
            }

            // Chuyển hướng dựa trên role
            if (data.user.role === "admin") {
                router.push("admin/dashboard");
            } else if (data.user.role === "user") {
                router.push("/client");
            } else {
                router.push("/");
            }
        } catch (err: any) {
            if (err.response) {
                if (err.response.status === 422) {
                    setLoginErrors(err.response.data.errors || {});
                } else if (err.response.status === 401) {
                    // Lỗi 401: Sai username hoặc password
                    setLoginErrors({ general: [err.response.data.message || "Sai username hoặc mật khẩu"] });
                } else {
                    setLoginErrors({ general: ["Lỗi không xác định, vui lòng thử lại"] });
                }
            } else {
                console.error("Login error:", err);
            }
        }
    };


    return (
        <div className="auth-page">
            <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
                {/* Form Đăng ký */}
                <div className="form-container sign-up-container">
                    <form className="auth" onSubmit={handleRegister}>
                        <h1 className="auth text-xl">Đăng ký</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="auth">hoặc sử dụng email của bạn để đăng ký</span>
                        {registerSuccess && <p style={{ color: 'green' }}>{registerSuccess}</p>}
                        <div className="p-fluid flex flex-col">
                            <InputText
                                type="text"
                                placeholder="Tên người dùng"
                                className="auth custom-input"
                                value={registerData.username}
                                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
                            />
                            {registerErrors.username && <small style={{ color: "red" }}>{registerErrors.username[0]}</small>}

                            <InputText
                                type="email"
                                placeholder="Email"
                                className="auth custom-input"
                                value={registerData.email}
                                onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                            />
                            {registerErrors.email && <small style={{ color: "red" }}>{registerErrors.email[0]}</small>}

                            <Password
                                placeholder="Mật khẩu"
                                className="auth custom-input"
                                feedback={false}
                                toggleMask
                                value={registerData.password}
                                onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                            />
                            {registerErrors.password && <small style={{ color: "red" }}>{registerErrors.password[0]}</small>}
                        </div>
                        <div className="pt-4">
                            <Button className="auth" type="submit">Đăng ký</Button>
                        </div>
                    </form>
                </div>

                {/* Form Đăng nhập */}
                <div className="form-container sign-in-container">
                    <form className="auth" onSubmit={handleLogin}>
                        <h1 className="auth text-xl" >Đăng nhập</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span className="auth">or use your account</span>
                        {loginSuccess && <p style={{ color: "green" }}>{loginSuccess}</p>}
                        <div className="p-fluid flex flex-col gap-2">
                            <InputText
                                type="text"
                                className="auth custom-input"
                                placeholder="Tên người dùng"
                                value={loginData.username}
                                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                            />

                            <Password
                                placeholder="Mật khẩu"
                                className="pt-1 custom-input"
                                feedback={false}
                                toggleMask
                                value={loginData.password}
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                            />
                            {loginErrors.general && (
                                <small style={{ color: "red", marginTop: "5px", display: "block" }}>
                                    {loginErrors.general[0]}
                                </small>
                            )}
                        </div>
                        <div className="auth pt-4">
                            <Button className="auth" type="submit">Đăng nhập</Button>
                        </div>
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
                            <h1>XLVISUDEPTRAINAY XIN CHÀO</h1>
                            <p className="auth">Nếu bạn đã có tài khoản , vui lòng đăng nhập tại đây!</p>
                            <Button className="auth ghost" onClick={() => setIsRightPanelActive(false)}>
                                Sign In
                            </Button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <img
                                src="/images/login-icon2.png"
                                alt="Login Icon"
                                style={{ width: "190px", marginBottom: "10px" }}
                            />
                            <h1>XLVISUDEPTRAINAY XIN CHÀO</h1>
                            <p className="auth">Vui lòng đăng ký ngay tại đây!</p>
                            <Button className="auth ghost" onClick={() => setIsRightPanelActive(true)}>
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
