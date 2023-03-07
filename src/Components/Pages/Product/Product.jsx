import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import Chart from "../../Chart/Chart"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../../apiRequest";
import { updateProduct } from "../../../Redux/Repositories/ProductsRepo";
import { useDispatch } from "react-redux";

export default function Product() {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const [productStats, setProductStats] = useState([]) 
    const product = useSelector((state)=> state.product.products.find((p)=> p._id === productId));
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await publicRequest.get("orders/income?pid=" + productId);
        console.log(res.data);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setProductStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  

  const handleChange = (e)=> {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
   const handleCategories = (e)=> {
    setCat(e.target.value.split(','));
  }
  const handleClick = (e)=> {
    e.preventDefault();
    /*if(file !== null){
      const filename = new Date().getTime() + file.name;
    const storage = getStorage(app);
     const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL, categories: cat };
          updateProduct(productId, product, dispatch);
        });
      }
    );
    }
    else {
    const product = {...inputs, ...(cat && {categories: cat})} ;
    console.log(cat)
    updateProduct(productId, product, dispatch);
    }*/
   
  }
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link> 
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productStats} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src={product.img}></img>
                  <span className="productName">{product.title}</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">id:</span>
                      <span className="productInfoValue">{product._id}</span>
                  </div>
                      <div className="productInfoItem">
                      <span className="productInfoKey">description:</span>
                      <span className="productInfoValue">{product.descreption}</span>
                  </div>
                   <div className="productInfoItem">
                      <span className="productInfoKey">categories:</span>
                      <span className="productInfoValue">{product.categories}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">price:</span>
                      <span className="productInfoValue">{product.price}$</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">in stock:</span>
                      <span className="productInfoValue">{product.inStock? 'Yes' : 'No'}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input name="title" type="text" placeholder={product.title} onChange={handleChange}/>
                       <label>Product Description</label>
                  <input name="descreption" type="text" placeholder={product.descreption} onChange={handleChange}/>
                      <label>Product Categories</label>
                  <input name="categories" type="text" placeholder={product.categories} onChange={handleCategories}/>
                           <label>Product Price</label>
                  <input name="price" type="number" placeholder={product.price} onChange={handleChange}/>
                  <label>In Stock</label>
                  <select name="inStock" onChange={handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                     <button onClick={handleClick} className="productButton">Update</button>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src={product.img}></img>
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}}
                       onChange={e => setFile(e.target.files[0])}/>
                  </div>
              </div>
          </form>
      </div>
    </div>
  );
}