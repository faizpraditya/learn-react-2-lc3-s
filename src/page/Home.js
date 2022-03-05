import { Component } from "react";
import Navbar from "./Navbar";
import "./Page.css";
import Dashboard from "./Dashboard";
import Menu from "../menu/Menu";
import Table from "../table/Table";

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            navbar : '',
        }
    }

    handleNavbar = (nav) => {
        console.log(nav);
        this.setState({
            navbar : nav,
        })
    }

    selectPage = () => {
        if (this.state.navbar === '') {
            return <Dashboard/>
        } else if (this.state.navbar === 'menu') {
            return <Menu
                menu = {this.props.menu}
                addMenu = {this.props.addMenu}
                addData = {this.props.addData}
            />
        } else if (this.state.navbar === 'table') {
            return <Table
                table = {this.props.table}
                addTable = {this.props.addTable}
                addData = {this.props.addData}
            />
        }
    }

    render(){
        // let setPage = ""
        // if (this.state.navbar === '') {
        //     setPage = <Dashboard/>
        // } else if (this.state.navbar === 'menu') {
        //     setPage = <Menu/>
        // } else if (this.state.navbar === 'table') {
        //     setPage = <Table/>
        // }

        return(
            <>
                <Navbar
                    handleNavbar = {this.handleNavbar}
                    logout = {this.props.logout}
                />
                {/* {this.selectPage}<Dashboard/> */}
                <div className="container my-5 py-5">
                    {/* <Menu/> */}
                    {/* {setPage} */}
                    {this.selectPage()}
                </div>
            </>
        )
    }
}

export default Home