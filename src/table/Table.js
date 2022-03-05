import { Component } from "react";
import FormTable from "./FormTable";
import ListTable from "./ListTable";

class Table extends Component {
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
                    this.state.addForm ? <FormTable
                        changeFormList = {this.changeFormList}
                        addTable = {this.props.addTable}
                        addData = {this.props.addData}
                    /> : <ListTable
                        changeFormList = {this.changeFormList}
                        table = {this.props.table}
                    /> 
                }
            </>
        )
    }
}

export default Table