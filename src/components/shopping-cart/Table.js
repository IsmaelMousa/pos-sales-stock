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
                    <th scope="col" ><svg xmlns="http://www.w3.org/2000/svg" id="icon" width="25" height="25" fill="currentColor" className="bi bi-trash-fill fa-3x" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jacket</td>
                    <td>1</td>
                    <td>30$</td>
                    <td> 
                        <button  id ="icon1"><svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25"  className="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg></button></td>
                </tr>
                <tr>
                    <td>Hat</td>
                    <td>1</td>
                    <td>15$</td>
                    <td> <button id ="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button></td>
                </tr>
                <tr>
                    <td>dresses</td>
                    <td>1</td>
                    <td>68$</td>
                    <td><button id ="icon1">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </button>
                    </td>
                </tr>
                <tr>
                    <td>scarf</td>
                    <td>1</td>
                    <td>5$</td>
                    <td>
                        <button id ="icon1">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="25" height="25" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td colSpan={3}> <b>Total Price = 118$</b></td>
                    <td>
                        <button className="button1" onClick={Print}><b> Checkout </b></button></td>
                </tr>
            </tbody>
        </table>
    )
}


export default Table;