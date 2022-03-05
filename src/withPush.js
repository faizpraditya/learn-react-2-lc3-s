import { Component } from "react";

const withPush = (WrappedComponent) => {
    class withPush extends Component {
        state = {
            addForm : false,
            items : [],
        }
        handleClickMenu = () => {
            this.setState({
                addForm:true
            })
        }
        handleSubmit = (data) => {
            console.log(data)
            const items = this.state.items
            items.push(data)
            this.setState({
                addForm:false,
                items:items,
            })
        }
        render(){
            return(
                <WrappedComponent
                    items = {this.state.items}
                    addForm = {this.state.addForm}
                    handleSubmit = {this.handleSubmit}
                    handleClickMenu = {this.handleClickMenu}
                />
            )
        } 
    }
    return withPush
}

export default withPush