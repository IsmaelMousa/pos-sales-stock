//
const ShoppingListTable = () =>{
    return(<table className="table">
    <thead>
    <tr>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Action</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>TimberLand Shirt for men</td>
        <td>200$</td>
        <td>1</td>
        <td>Delete</td>
    </tr>
    <tr>
        <td>Addidas Sport-Shirt for men</td>
        <td>110$</td>
        <td>1</td>
        <td>Delete</td>
    </tr>
    <tr>
        <td>Cargo Pants for kids</td>
        <td>70$</td>
        <td>1</td>
        <td>Delete</td>
    </tr>
    </tbody>
</table>)
}

export default ShoppingListTable;