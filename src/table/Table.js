import { Component } from "react";
import FormTable from "./FormTable";
import ListTable from "./ListTable";

class Table extends Component {
    state = {
        addForm : false,
    }
    handleClickTable = () => {
        this.setState({
            addForm : true
        })
    }
    render(){
        return(
            <>
                {
                    this.state.addForm ? <FormTable
                    /> : <ListTable
                        clickTable = {this.handleClickTable}
                        table = {this.props.table}
                    /> 
                }
            </>
        )
    }
}

export default Table