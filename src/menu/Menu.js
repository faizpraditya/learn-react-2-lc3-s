import { Component } from "react";
import FormMenu from "./FormMenu";
import ListMenu from "./ListMenu";

class Menu extends Component {
    state = {
        addForm : false,
    }

    changeFormList = () => {
        this.setState({
            addForm : !this.state.addForm
        })
    }
    render(){
        return(
            <>
                {
                    this.state.addForm ? <FormMenu
                        changeFormList = {this.changeFormList}
                        addMenu = {this.props.addMenu}
                    /> : <ListMenu
                        changeFormList = {this.changeFormList}
                        menu = {this.props.menu}
                    /> 
                }
            </>
        )
    }
}

export default Menu