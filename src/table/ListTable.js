import { Component } from "react";

class ListTable extends Component {
    setStatus = (status,index,number) => {
        if (status==="Available") {
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{number}</td>
                    <td className="text-success">{status}</td>
                </tr>
            )
        } else {
            return(
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{number}</td>
                    <td className="text-warning">{status}</td>
                </tr>
            )
        }
    }

    render(){
        return(
            <>
            <div className="card bg-dark p-4 d-block">
                <button onClick={this.props.clickTable} className="btn btn-primary mb-3">+ Tambah Table</button>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Number</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.table.map((table, index) => {
                            return(this.setStatus(table.status,index,table.number))
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default ListTable