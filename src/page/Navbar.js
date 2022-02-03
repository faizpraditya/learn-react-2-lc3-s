import { Component } from "react";

class Navbar extends Component {
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 opacity-75 fixed-top">
                <div className="container-fluid">
                    <span className="navbar-brand">Bakari (not Sagna)</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="button bg-dark" onClick={()=>this.props.handleNavbar('')}>
                                    <span>Home</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="button bg-dark" onClick={()=>this.props.handleNavbar('menu')}>
                                    <span>Menu</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="button bg-dark" onClick={()=>this.props.handleNavbar('table')}>
                                    <span>Table</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="button bg-dark" onClick={this.props.logout}>
                                    <span>Logout</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default Navbar