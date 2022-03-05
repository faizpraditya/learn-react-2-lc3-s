import { Component } from "react";
import withSubmit from "../withSubmit";

class FormTable extends Component {
    state = {
        id: '',
        number: '',
        status: '',
    }

    handleChange = (event) => {
        if(event.target.name === 'tableID'){
            this.setState({
                id: event.target.value
            })
        } else if(event.target.name === 'tableNumber'){
            this.setState({
                number: event.target.value
            })
        } else if(event.target.name === 'tableStatus'){
            this.setState({
                status: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        // this.props.addTable(this.state)
        this.props.submit(this.state,2)
        // this.props.addData(this.state)
        this.props.changeFormList()
    }

    handleCancel = (event) => {
        this.props.changeFormList()
        event.preventDefault()
    }

    render(){
        return(
            <>
            <div className="col-6 card bg-dark p-4">
                <form onSubmit={this.handleSubmit}>
                <h3 className="mb-4">Tambah Table Baru</h3>
                <div className="form-group">
                    <label>Table ID</label>
                    <input onChange={this.handleChange} className="form-control" name="tableID" placeholder="Enter ID"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Number</label>
                    <input onChange={this.handleChange} className="form-control" name="tableNumber" placeholder="Enter Number"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input onChange={this.handleChange} className="form-control" name="tableStatus" placeholder="Enter Status"/>
                    <small className="text-danger"></small><br/>
                </div>
                <button onClick={this.handleCancel} className="btn btn-warning mx-2 mt-3">Cancel</button>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

// export default FormTable
export default withSubmit(FormTable)