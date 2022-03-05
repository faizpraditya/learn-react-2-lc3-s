import { Component } from "react";

const withSubmit = (WrappedComponent) => {
    class WithSubmit extends Component {
        // constructor(props){
        //     super(props)
        //     this.state = {
        //     }
        // }

        submit = (newData,nav) => {
            if (nav===1) {
                this.props.addMenu(newData)
            } else if (nav===2) {
                this.props.addTable(newData)
            }
            // this.props.addData(newData)
        }

        render(){
            return(
                <WrappedComponent
                    changeFormList = {this.props.changeFormList}
                    submit={this.submit}
                    addData = {this.props.addData}
                />
            )
        }
    }
    return WithSubmit
}

export default withSubmit