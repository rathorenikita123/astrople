import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  //   const [show, setShow] = React.useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    console.log(data);
  };

  //   const visible = () => {
  //     setShow(!show);
  //   };

  return (
    <div className="login" style={{ fontFamily: "'Roboto Slab', 'serif'" }}>
      <section>
        <div className="container  p-5">
          <div className="row d-flex justify-content-center align-items-center w-100">
            <div className="card text-black ">
              <div className="card-body px-0">
                <div className="row justify-content-evenly">
                  <div
                    className="col-md-6 col-lg-6 col-xl-4 form d-flex  flex-column  justify-content-around "
                    style={{ height: "80vh" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <div>
                        <img
                          src="/images/logo.png"
                          alt="logo"
                          className="logo "
                          style={{ width: "8rem" }}
                        />
                      </div>
                      <div>
                        <p
                          className="fw-bold fs-5 mb-0 "
                          style={{ color: "#0B2447" }}
                        >
                          EyeVision
                        </p>
                      </div>
                    </div>
                    <form className=" mx-md-4">
                      <div className="d-flex flex-column align-items-center justify-content-center justify-content-lg-start">
                        <div>
                          <h3>Sign in to EyeVision</h3>
                        </div>
                        <div>
                          <p className="lead mb-0  text-primary">
                            Send, spend and save smarter
                          </p>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="btn btn-floating signin mt-4"
                            style={{ backgroundColor: "#39B5E0" }}
                          >
                            <img
                              src="/images/google.png"
                              alt="google"
                              className="img-fluid "
                              style={{ width: "3rem" }}
                            />
                            <a
                              href="/"
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Sign in with Google
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="divider d-flex justify-content-center my-3">
                        <p
                          className="text-center mx-3 mb-0"
                          style={{ color: "#0B2447" }}
                        >
                          Or with email
                        </p>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3"
                          className="form-control form-control"
                          placeholder="Username or email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-outline icon d-flex align-items-center mb-3 ">
                        <input
                          //   type={show ? "text" : "password"}
                          id="form3Example4"
                          className="form-control form-control"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <i
                          className="fa fa-eye-slash mr-2"
                          aria-hidden="true"
                          onClick={visible}
                        ></i> */}
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="form-check mb-0">
                          <input
                            className="form-check-input me-2 circle"
                            type="checkbox"
                            value=""
                            id="form2Example3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            Remember me
                          </label>
                        </div>
                        <a
                          href="/forgot"
                          className=" text-primary"
                          style={{ textDecoration: "none" }}
                        >
                          Forgot password?
                        </a>
                      </div>
                      <div className="text-center text-lg-start d-flex flex-column align-items-center justify-content-center mt-3 ">
                        <div className="d-flex justify-content-center  mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-sm btn-login p-2"
                            onClick={handleLogin}
                          >
                            Sign In
                          </button>
                        </div>
                        <p className="small   mb-0 text-center">
                          Don't have an account?
                          <a
                            href="/signup"
                            className="link mx-1 fw-bold"
                            style={{ textDecoration: "none" }}
                          >
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </form>
                    <div className="footer d-flex align-items-center justify-content-between p-3 bg-primary rounded text-white">
                      <div>
                        <p className="mb-0">Privacy Policy</p>
                      </div>
                      <div>
                        <p className="mb-0">Copyright 2022</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-6 col-xl-6  d-flex align-items-center "
                    style={{ height: "80vh" }}
                  >
                    <img
                      src="/images/background.jpg"
                      className="img-fluid background"
                      alt="bg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
