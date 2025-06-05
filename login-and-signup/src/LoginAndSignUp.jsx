import { useState } from "react";
const LoginAndSignUp = () => {
  const [isLogin, setIsLogin] = useState(true); // true for login, false for signup
  return (
    <>
      <div className="container">
        <div className="form-container">
          <div className="form-toggle">
            <button
              className={isLogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              login
            </button>
            <button
              className={!isLogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              signup
            </button>
          </div>
          {isLogin ? (
            <>
              <div className="form">
                <h2>login form</h2>
                <input type="email" placeholder="email address" />
                <input type="password" placeholder="password" />
                <a href="#">forgot password?</a>
                <button>login</button>
                <p>
                  not a member?
                  <a href="#" onClick={() => setIsLogin(false)}>
                    signup now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="form">
                <h2>signup form</h2>
                <input type="email" placeholder="email address" />
                <input type="password" placeholder="password" />

                <input type="password" placeholder="confirm password" />

                <button>signup</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default LoginAndSignUp;
