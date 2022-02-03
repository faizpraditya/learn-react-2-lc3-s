import { Component } from "react";

class FormTable extends Component {
    render(){
        return(
            <>
            <div className="col-6 card bg-dark p-4">
                <form>
                <h3 className="mb-4">Tambah Table Baru</h3>
                <div className="form-group">
                    <label>Table ID</label>
                    <input className="form-control" placeholder="Enter ID"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Number</label>
                    <input className="form-control" placeholder="Enter Number"/>
                    <small className="text-danger"></small><br/>
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <input className="form-control" placeholder="Enter Status"/>
                    <small className="text-danger"></small><br/>
                </div>
                <button className="btn btn-warning mx-2 mt-3">Cancel</button>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
            </>
        )
    }
}

export default FormTable