import { useState } from "react";
import "./NewRoom.css";
import { useDispatch } from "react-redux";
//import { addRoom } from "../../../Redux/Repositories/RoomsRepo";



export default function NewRoom() {
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
          const Room = { ...inputs, img: downloadURL, categories: cat };
          addRoom(Room, dispatch);
        });
      }
    );*/
  }
  return (
    <div className="newRoom">
      <h1 className="addRoomTitle">New Room</h1>
      <form className="addRoomForm">
        <div className="addRoomItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className="addRoomItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="V-neck T-shirt" onChange={handleChange}/>
        </div>
            <div className="addRoomItem">
          <label>Description</label>
          <input name="descreption" type="text" placeholder="white T-shirt" onChange={handleChange}/>
        </div>
           <div className="addRoomItem">
          <label>Categories</label>
          <input name="categories" type="text" placeholder="jeans, coat.." onChange={handleCategories}/>
        </div>
          <div className="addRoomItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="100" onChange={handleChange}/>
        </div>
        <div className="addRoomItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleClick} className="addRoomButton">Create</button>
      </form>
    </div>
  );
}