import Login, { LoginInfo } from "../login/login";

function ForgetPassword() {
    return <LoginInfo>
        <section className="login-page">
            <div className="container">
                <div className="login-form">
                    <h1>Forget your password..!</h1>
                    <p>
                    Type your account email to recive reset link.
                    </p>
                    <form>
                        <div className="form-group inputWithIcon">
                            <input type="email" placeholder="Email *" />
                            <svg className="fa-envelope" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 256 256">
                                <g fill="#676363" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                                    <g transform="scale(5.33333,5.33333)">
                                        <path d="M10.5,8c-3.57194,0 -6.5,2.92806 -6.5,6.5v19c0,3.57194 2.92806,6.5 6.5,6.5h27c3.57194,0 6.5,-2.92806 6.5,-6.5v-19c0,-3.57194 -2.92806,-6.5 -6.5,-6.5zM10.5,11h27c1.95006,0 3.5,1.54994 3.5,3.5v1.10547l-17,9.18945l-17,-9.18945v-1.10547c0,-1.95006 1.54994,-3.5 3.5,-3.5zM7,19.01563l16.28711,8.80469c0.44489,0.24028 0.98089,0.24028 1.42578,0l16.28711,-8.80469v14.48438c0,1.95006 -1.54994,3.5 -3.5,3.5h-27c-1.95006,0 -3.5,-1.54994 -3.5,-3.5z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                       
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="login-background">
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            "/photos/257cdf6122cadf5b56b96eddf37c41ea.png"
                        }
                        alt="login-background"
                    />
                </div>
            </div>
        </section>
    </LoginInfo>
}
export default ForgetPassword;