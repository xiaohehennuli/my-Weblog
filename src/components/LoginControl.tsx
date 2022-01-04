import React from "react"

function UserLoginIn() {
  return <h1>login in </h1>
}

function UserLoginSignUp() {
  return <h1>sign up</h1>
}


function Greeting(props: any) {
  const isLogin = props.isLogin
  if (isLogin === "in") {
    return <UserLoginSignUp />
  } else {
    return <UserLoginIn />
  }
}

function LoginButton(props: any) {
  if (props.type === "up") {
    return <button onClick={props.loginClick}>登陆</button>
  } else {
    return <button onClick={props.logOutClick}>登出</button>
  }
}

class LoginControl extends React.Component {
  state!: {
    userStatus: number
    loginType: string
  }
  constructor(props: any) {
    super(props)
    this.state = {
      userStatus: 1,
      loginType: "up",
    }
  }

  handleLogin() {
    console.log(this)
    this.setState({ loginType: "in" })
    console.log(this.state.loginType)
  }

  handleLoginOut() {
    console.log(this)
    this.setState({ loginType: "up" })
    console.log(this.state.loginType)
  }

  render() {
    const isLoggedIn = this.state.loginType
    let button
    const listItem = [1,2,3,4,5].map(item => {
    return <li key={item.toString()}>{item}</li>
    })
    if (isLoggedIn === "up") {
      button = (
        <LoginButton
          type={isLoggedIn}
          loginClick={() => this.handleLogin()}
        ></LoginButton>
      )
    } else {
      button = (
        <LoginButton
          type={isLoggedIn}
          logOutClick={() => this.handleLoginOut()}
        ></LoginButton>
      )
    }
    return (
      <div>
        <Greeting isLogin={this.state.loginType}></Greeting>
        {button}
        <ul>
            {listItem}            
        </ul>
      </div>
    )
  }
}

export default LoginControl
