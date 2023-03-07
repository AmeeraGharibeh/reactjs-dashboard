import { useState } from "react";
import "./NewStore.css";
import { useDispatch } from "react-redux";
import { addStore } from "../../../Redux/Repositories/StoresRepo";



export default function NewStore() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

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
   /* const filename = new Date().getTime() + file.name;
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
          const Store = { ...inputs, img: downloadURL, categories: cat };
          addStore(Store, dispatch);
        });
      }
    );*/
       const Store = { ...inputs };
          addStore(Store, dispatch);
  }
  return (
    <div className="newStore">
      <h1 className="addStoreTitle">New Store</h1>
      <form className="addStoreForm">
        <div className="addStoreItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
       <div className="addStoreItem">
          <label>Store Name</label>
          <input name="name" type="text" placeholder="Type your store name" onChange={handleChange}/>
        </div>
            <div className="addStoreItem">
          <label>Description</label>
          <input name="descreption" type="text" placeholder="Description" onChange={handleChange}/>
        </div>
           <div className="addStoreItem">
          <label>Categories</label>
          <input name="categories" type="text" placeholder="handmade, crochet" onChange={handleCategories}/>
        </div>
        
        <button onClick={handleClick} className="addStoreButton">Create</button>
      </form>
    </div>
  );
}