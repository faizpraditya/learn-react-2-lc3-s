import { Component } from "react";
import withSubmit from "../withSubmit";

class FormMenu extends Component {
    state = {
        id: '',
        name: '',
        price: '',
    }

    handleChange = (event) => {
        if(event.target.name === 'menuID'){
            this.setState({
                id: event.target.value
            })
        } else if(event.target.name === 'menuName'){
            this.setState({
                name: event.target.value
            })
        } else if(event.target.name === 'menuPrice'){
            this.setState({
                price: event.target.value
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
        // this.props.addMenu(this.state)
        this.props.submit(this.state,1)
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
                <h3 className="mb-4">Tambah Menu Baru</h3>
                <div className="form-group">
                    <label>Menu ID</label>
                    <input name="menuID" onChange={this.handleChange} className="form-control" placeholder="Enter ID"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input name="menuName" onChange={this.handleChange} className="form-control" placeholder="Enter Name"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input name="menuPrice" onChange={this.handleChange} type="number" className="form-control" placeholder="Enter Price"/>
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

// export default FormMenu
export default withSubmit(FormMenu)