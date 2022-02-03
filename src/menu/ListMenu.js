import { Component } from "react";

class ListMenu extends Component {
    render(){
        return(
            <>
            <div className="card bg-dark p-4 d-block">
                <button onClick={this.props.changeFormList} className="btn btn-primary mb-3">+ Tambah Menu</button>
                <table className="table table-hover table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.menu.map((food, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{food.name}</td>
                                    <td>Rp {food.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default ListMenu