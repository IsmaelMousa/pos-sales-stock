import './TableStyle.css'
const Table = () => {
    const Print = () => {
        window.print();
    }
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Jacket</th>
                    <td>1</td>
                    <td>30$</td>
                    <td><button className="btn btn-outline-danger"> Delete</button></td>
                </tr>
                <tr>
                    <th scope="row">Hat</th>
                    <td>1</td>
                    <td>15$</td>
                    <td><button className="btn btn-outline-danger"> Delete</button></td>
                </tr>
                <tr>
                    <th scope="row">dresses</th>
                    <td>1</td>
                    <td>68$</td>
                    <td><button className="btn btn-outline-danger"> Delete</button></td>
                </tr>
                <tr>
                    <th scope="row">scarf</th>
                    <td>1</td>
                    <td>5$</td>
                    <td><button className="btn btn-outline-danger"> Delete</button></td>
                </tr>
                <tr>
                    <td colSpan={3}>Total Price = 118$</td>
                    <td>  <button id="but11" className=" btn btn-outline-primary" onClick={Print}> Checkout</button></td>
                </tr>
            </tbody>
        </table>
    )
}


export default Table;