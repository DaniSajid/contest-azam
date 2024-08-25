const AddProduct = () => {
    return (
      <form className="col-6 offset-3 my-5" encType="multipart/form-data"> 
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Product Title</label>
          <input type="text" className="form-control" id="productTitle" aria-describedby="textHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input type="text" className="form-control" id="productPrice"/>
        </div>                
        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Product Image</label>
          <input type="file" className="form-control" id="productImage"/>
        </div>                
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Product Category</label>
          <select className="form-select" aria-label="Default select example" id="productCategory">
            <option selected>Please select Category</option>
            <option value="1">Indoor</option>
            <option value="2">Outdoor</option>
            <option value="3">Succulent</option>
            <option value="4">Flowering Shrubs</option>
          </select>
        </div>                
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">Product Description</label>
          <div className="form-floating">
            <textarea 
              className="form-control" 
              placeholder="Leave a comment here" 
              id="productDescription" 
              style={{ height: '100px' }}></textarea>
            <label htmlFor="productDescription">Description</label>
          </div>
        </div>                
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
  
  export default AddProduct;
  