import { Component } from "react";
import "./Login.css";

class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      username:'',
    }
  }

  handleLogin = (event) => {
    this.props.login(this.state)
    event.preventDefault()
  }

  handleChangeEmail = (event) => {
    this.setState({
      email : event.target.value,
    })
  }

  handleChangePassword = (event) => {
    this.setState({
      password : event.target.value,
    })
  }

  render() {
    return (
      <div className="login main">
        <form>
          <div className="d-flex flex-column login container">
            <div className="d-flex align-items-center login containerCenter">
              <div className="d-flex justify-content-end login containerEnd">
                <div className="card bg-dark w-50 login backgroundColorCard">
                  <div className="card-body">
                    <h2 className="login">
                      <i className="fas fa-unlock-alt"></i> Login Page
                    </h2>
                    <br />
                    <div>
                      <div className={`form-group`}>
                        <label htmlFor="exampleInputusername1">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputusername1"
                          aria-describedby="usernameHelp"
                          placeholder="Enter email"
                          onChange={(e)=>this.handleChangeEmail(e)}
                        
                        />
                        <small className="text-danger"></small>
                      </div>
                      <label htmlFor="exampleInputusername1">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        aria-describedby="usernameHelp"
                        placeholder="Enter password"
                        onChange={(e)=>this.handleChangePassword(e)}
                      />
                      <small className="text-danger"></small>
                    </div>
                    <br></br>
                    <div>
                      <button
                        type="submit"
                        className={`btn btn-primary login inputButtonawesome-button-sm`}
                        onClick={this.handleLogin}
                      >
                        <i className="fas fa-sign-in"></i> Login
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginScreen;
