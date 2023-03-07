import { Link, useLocation } from "react-router-dom";
import "./Store.css";
import Chart from "../../Chart/Chart"
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { publicRequest } from "../../../apiRequest";
import { updatestore } from "../../../Redux/Repositories/StoresRepo";
import { useDispatch } from "react-redux";

export default function Store() {
    const location = useLocation();
    const storeId = location.pathname.split('/')[2];
    const [storeStats, setstoreStats] = useState([]) 
    const store = useSelector((state)=> state.store.stores.find((s)=> s.id === storeId));
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
        const res = await publicRequest.get("orders/income?pid=" + storeId);
        console.log(res.data);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setstoreStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [storeId, MONTHS]);
  

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
   /* if(file !== null){
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
          const store = { ...inputs, img: downloadURL, categories: cat };
          updatestore(storeId, store, dispatch);
        });
      }
    );
    }
    else {
    const store = {...inputs, ...(cat && {categories: cat})} ;
    console.log(cat)
    updatestore(storeId, store, dispatch);
    } */
   
  }
  return (
    <div className="store">
      <div className="storeTitleContainer">
        <h1 className="storeTitle">Store</h1>
        <Link to="/newstore">
          <button className="storeAddButton">Create</button>
        </Link> 
      </div>
      <div className="storeTop">

          <div className="storeTopRight">
              <div className="storeInfoTop">
                  <img src={store.picture_url}></img>
                  <span className="storeName">{store.name}</span>
              </div>
              <div className="storeInfoBottom">
                  <div className="storeInfoItem">
                      <span className="storeInfoKey">id:</span>
                      <span className="storeInfoValue">{store._id}</span>
                  </div>
                      <div className="storeInfoItem">
                      <span className="storeInfoKey">description:</span>
                      <span className="storeInfoValue">{store.descreption}</span>
                  </div>
                   <div className="storeInfoItem">
                      <span className="storeInfoKey">categories:</span>
                      <span className="storeInfoValue">{store.categories}</span>
                  </div>
                  <div className="storeInfoItem">
                      <span className="storeInfoKey">price:</span>
                      <span className="storeInfoValue">{store.price}$</span>
                  </div>
                  <div className="storeInfoItem">
                      <span className="storeInfoKey">in stock:</span>
                      <span className="storeInfoValue">{store.inStock? 'Yes' : 'No'}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="storeBottom">
          <form className="storeForm">
              <div className="storeFormLeft">
                  <label>store Name</label>
                  <input name="title" type="text" placeholder={store.title} onChange={handleChange}/>
                       <label>store Description</label>
                  <input name="descreption" type="text" placeholder={store.descreption} onChange={handleChange}/>
                      <label>store Categories</label>
                  <input name="categories" type="text" placeholder={store.categories} onChange={handleCategories}/>
                           <label>store Price</label>
                  <input name="price" type="number" placeholder={store.price} onChange={handleChange}/>
                  <label>In Stock</label>
                  <select name="inStock" onChange={handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                     <button onClick={handleClick} className="storeButton">Update</button>
              </div>
              <div className="storeFormRight">
                  <div className="storeUpload">
                      <img src={store.img}></img>
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