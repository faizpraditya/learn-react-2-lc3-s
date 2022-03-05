import { Component } from "react";

const withSend = (WrappedComponent) => {
    class withSend extends Component {
        constructor(props) {
            super(props)
            this.state = {
                newItem:'',
            }
        }
        handleSubmit = (e) => {
            console.log("Withsend", this.props);
            e.preventDefault()
            this.props.submit(this.state.newItem)
            console.log(this.state)
        }
        handleChange = (e) => {
            this.setState({
                newItem: {
                    ...this.state.newItem,
                    [e.target.name]:e.target.value
                }
            })
            console.log(this.state);
        }
        render(){
            return(
                <WrappedComponent
                    item = {this.state.newItem}
                    submit = {this.handleSubmit}
                    change = {this.handleChange}
                />
            )
        }
    }
    return withSend
}

export default withSend