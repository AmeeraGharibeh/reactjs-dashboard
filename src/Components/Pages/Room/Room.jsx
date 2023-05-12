import { Link, useLocation } from "react-router-dom";
import "./Room.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Room() {
    const location = useLocation();
    const roomId = location.pathname.split('/')[2];
    const room = useSelector((state)=> state.room.rooms.find((p)=> p._id === roomId));
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
          const room = { ...inputs, img: downloadURL, categories: cat };
          updateroom(roomId, room, dispatch);
        });
      }
    );
    }
    else {
    const room = {...inputs, ...(cat && {categories: cat})} ;
    console.log(cat)
    updateroom(roomId, room, dispatch);
    }*/
   
  }
  return (
    <div className="room">
      <div className="roomTitleContainer">
        <h1 className="roomTitle">room</h1>
        <Link to="/newroom">
          <button className="roomAddButton">Create</button>
        </Link> 
      </div>
      <div className="roomTop">
        
          <div className="roomTopRight">
              <div className="roomInfoTop">
                  <img src={room.img}></img>
                  <span className="roomName">{room.title}</span>
              </div>
              <div className="roomInfoBottom">
                  <div className="roomInfoItem">
                      <span className="roomInfoKey">id:</span>
                      <span className="roomInfoValue">{room._id}</span>
                  </div>
                      <div className="roomInfoItem">
                      <span className="roomInfoKey">description:</span>
                      <span className="roomInfoValue">{room.descreption}</span>
                  </div>
                   <div className="roomInfoItem">
                      <span className="roomInfoKey">categories:</span>
                      <span className="roomInfoValue">{room.categories}</span>
                  </div>
                  <div className="roomInfoItem">
                      <span className="roomInfoKey">price:</span>
                      <span className="roomInfoValue">{room.price}$</span>
                  </div>
                  <div className="roomInfoItem">
                      <span className="roomInfoKey">in stock:</span>
                      <span className="roomInfoValue">{room.inStock? 'Yes' : 'No'}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="roomBottom">
          <form className="roomForm">
              <div className="roomFormLeft">
                  <label>room Name</label>
                  <input name="title" type="text" placeholder={room.title} onChange={handleChange}/>
                       <label>room Description</label>
                  <input name="descreption" type="text" placeholder={room.descreption} onChange={handleChange}/>
                      <label>room Categories</label>
                  <input name="categories" type="text" placeholder={room.categories} onChange={handleCategories}/>
                           <label>room Price</label>
                  <input name="price" type="number" placeholder={room.price} onChange={handleChange}/>
                  <label>In Stock</label>
                  <select name="inStock" onChange={handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                  </select>
                     <button onClick={handleClick} className="roomButton">Update</button>
              </div>
              <div className="roomFormRight">
                  <div className="roomUpload">
                      <img src={room.img}></img>
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