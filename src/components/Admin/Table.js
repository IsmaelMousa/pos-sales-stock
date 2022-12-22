import React, { useState } from "react";
import nextId from "react-id-generator";
import EditRow from "./EditRow";
import Data from "../UI/ProductsData";
const Table = () => {
  const [products, setProducts] = useState(Data);

  const [addData, setAddPost] = useState({
    category: "",
    subCategory: "",
    productName: "",
    costPrice: "",
    price: "",
    quantity: "",
  });
  //Get ID
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    category: "",
    subCategory: "",
    productName: "",
    costPrice: "",
    price: "",
    quantity: "",
  });
  //Get Form Values
  const handleChange = (input) => (get) => {
    get.preventDefault();
    setAddPost({ ...addData, [input]: get.target.value });
  };

  //Add Data To Table
  const handleAddPost = (get) => {
    get.preventDefault();

    const newProduct = {
      id: nextId(),
      category: addData.category,
      subCategory: addData.subCategory,
      productName: addData.productName,
      costPrice: addData.costPrice,
      price: addData.price,
      quantity: addData.quantity,
    };

    const newProducts = [...products, newProduct];
    setProducts(newProducts);
    console.log(newProducts);
  };

  //Edit data
  const handleEditPostForm = (set, product) => {
    set.preventDefault();
    setEditProductId(product.id);
    console.log(product.id);

    const formValues = {
      category: product.category,
      subCategory: product.subCategory,
      productName: product.productName,
      costPrice: product.costPrice,
      price: product.price,
      quantity: product.quantity,
    };
    setEditFormData(formValues);
  };

  //Edit Form Data
  const handleEditFormClick = (input) => (get) => {
    get.preventDefault();
    console.log(editFormData);
    setEditFormData({ ...editFormData, [input]: get.target.value });
  };
  //Save Form Data
  const handleFormSave = (save) => {
    save.preventDefault();

    const savePost = {
      id: editProductId,
      category: editFormData.category,
      subCategory: editFormData.subCategory,
      productName: editFormData.productName,
      costPrice: editFormData.costPrice,
      price: editFormData.price,
      quantity: editFormData.quantity,
    };

    const newProducts = [...products];

    const formIndex = products.findIndex(
      (product) => product.id === editProductId
    );

    newProducts[formIndex] = savePost;

    setProducts(newProducts);
    setEditProductId(null);
    console.log(editProductId);
  };

  //Delete Data
  const handleDelete = (e) => {
    e.preventDefault();
    const newProducts = [...products];

    const formIndex = products.findIndex(
      (product) => product.id === editProductId
    );

    newProducts.splice(formIndex, 1);

    setProducts(newProducts);

    console.log(newProducts);
  };

  //Search Filter Data
  const [searchQuery, setSearchQuery] = useState("");
  function search() {
    return products.filter(
      (row) =>
        row.subCategory.toLowerCase().indexOf(searchQuery) > -1 ||
        row.productName.toLowerCase().indexOf(searchQuery) > -1 ||
        row.category.toLowerCase().indexOf(searchQuery) > -1
    );
  }

  return (
    <div>
      <div className="d-flex flex-row">
        <button
          type="button"
          className="me-3 btn btn-outline-primary btn-lg ml-auto d-block mb-5"
          data-bs-toggle="modal"
          data-bs-target="#addModalForm"
        >
          Add Product <i className="fa-sharp fa-solid fa-plus"></i>
        </button>
        <form className="row g-3 ms-auto">
          <div className="col-auto">
            <input
              type="text"
              className="form-control ms-auto"
              placeholder="Search"
              value={searchQuery}
              onChange={(get) => setSearchQuery(get.target.value)}
            />
          </div>
        </form>
      </div>
      <table className="table table-bordered border-primary table-hover table-responsive">
        <thead>
          <tr className="text-center">
            <th scope="col">Category</th>
            <th scope="col">Sub Category</th>
            <th scope="col">Product</th>
            <th scope="col">Cost Price</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <EditRow
            products={search(products)}
            handleEditPostForm={handleEditPostForm}
          />
        </tbody>
      </table>

      {/*Add Modal */}
      <div
        className="modal fade"
        id="addModalForm"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">
                <b>Add New Product</b>{" "}
                <i class="fa-sharp fa-solid fa-cart-plus"></i>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleAddPost}>
                <div class="btn-group mb-3 col-12">
                  <button
                    type="button"
                    class="btn bg-white border border-dark border-opacity-25 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                    name="category"
                    value="Men"
                    onClick={handleChange("category")}
                  >
                    Men
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Men"
                        onClick={handleChange("category")}
                      >
                        Men
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Women"
                        onClick={handleChange("category")}
                      >
                        Women
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Kids"
                        onClick={handleChange("category")}
                      >
                        Kids
                      </button>
                    </li>
                  </ul>
                </div>

                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="subCategory"
                    placeholder="subcategory"
                    required
                    onChange={handleChange("subCategory")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    placeholder="product"
                    required
                    onChange={handleChange("productName")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="costPrice"
                    placeholder="costprice"
                    required
                    onChange={handleChange("costPrice")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="price"
                    required
                    onChange={handleChange("price")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    placeholder="quantity"
                    required
                    onChange={handleChange("quantity")}
                  />
                </div>
                <hr></hr>
                <div className="modal-footer d-block">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-outline-success btn-lg float-start btn-hover"
                  >
                    Add <i className="fa-sharp fa-solid fa-plus"></i>
                  </button>
                  <button
                    type="reset"
                    data-bs-dismiss="modal"
                    className="btn btn-outline-danger btn-lg float-end"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*Edit Row Modal */}
      <div
        className="modal fade"
        id="editModalForm"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h4 className="modal-title text-center" id="exampleModalLabel">
                <b>Edit Product</b>{" "}
                <i className="fa-sharp fa-solid fa-pen-to-square"></i>
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleFormSave}>
                <div class="btn-group mb-3 col-12">
                  <button
                    type="button"
                    class="btn bg-white border border-dark border-opacity-25 dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-expanded="false"
                    name="category"
                    value="Men"
                    onClick={handleEditFormClick("category")}
                  >
                    Men
                  </button>
                  <ul class="dropdown-menu dropdown-menu-lg-end">
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Men"
                        onClick={handleEditFormClick("category")}
                      >
                        Men
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Women"
                        onClick={handleEditFormClick("category")}
                      >
                        Women
                      </button>
                    </li>
                    <li>
                      <button
                        class="dropdown-item"
                        type="button"
                        name="category"
                        value="Kids"
                        onClick={handleEditFormClick("category")}
                      >
                        Kids
                      </button>
                    </li>
                  </ul>
                </div>{" "}
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="subCategory"
                    placeholder="subcategory"
                    value={editFormData.subCategory}
                    required
                    onChange={handleEditFormClick("subCategory")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="productName"
                    placeholder="product"
                    value={editFormData.productName}
                    required
                    onChange={handleEditFormClick("productName")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="costPrice"
                    placeholder="costprice"
                    value={editFormData.costPrice}
                    required
                    onChange={handleEditFormClick("costPrice")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    placeholder="price"
                    value={editFormData.price}
                    required
                    onChange={handleEditFormClick("price")}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"></label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    placeholder="quantity"
                    value={editFormData.quantity}
                    required
                    onChange={handleEditFormClick("quantity")}
                  />
                </div>
                <div className="modal-footer d-block">
                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn  btn-outline-success btn-lg float-start"
                  >
                    <i className="fa-sharp fa-solid fa-check"></i>
                  </button>

                  <button
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn  btn-outline-danger btn-lg float-end"
                    onClick={handleDelete}
                  >
                    <i className="fa-sharp fa-solid fa-trash"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
