import { Component } from 'react';
import './App.css';
import LoginScreen from './login/LoginScreen.js'
import Home from './page/Home';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      logged:false,
      menu:[
        {
          id: '001',
          name : 'Ayam Geprek',
          price : 25000
        },
        {
          id: '002',
          name : 'Ayam Bakar',
          price : 30000
        },
        {
          id: '003',
          name : 'Ayam Goreng',
          price : 20000
        },
      ],
      table:[
        {
          id: '001',
          number : '001',
          status : "Available"
        },
        {
          id: '002',
          number : '002',
          status : "Unavailable"
        },
        {
          id: '003',
          number : '003',
          status : "Available"
        },
      ],
    }
  }

  login = (params) => {
    console.log(params);
    if (params.email === "admin@example.com" && params.password === "12345678") {
      this.setState({
        logged : true
      })
    } else {
      alert("Incorrect email or password")
      this.setState({
        logged : false
      })
    }
  }

  addMenu = (newMenu) => {
    this.setState({
      menu:[...this.state.menu, newMenu]
    })
  }

  logout = () => {
    this.setState({
      logged : false
    })
  }

  render(){
    console.log(this.state.logged);
    return(
      <>
        {
          this.state.logged ? <Home
            menu = {this.state.menu}
            table = {this.state.table}
            addMenu = {this.addMenu}
            logout = {this.logout}
          /> : <LoginScreen
            login = {this.login}
          /> 
        }
      </>
    )
  }
}

export default App;
