import { useLocation } from "react-router-dom";
import "./Store.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import DropdownMenu from "../../DropdownMenu";
import { useDispatch } from "react-redux";
import { updateStore } from "../../../Redux/Repositories/StoresRepo";

export default function Store() {
    const location = useLocation();
    const storeId = location.pathname.split('/')[2];
    const categories = useSelector((state)=> state.home.categories);

    const store = useSelector((state)=> state.store.stores.find(s => s.id === parseInt(storeId)));
    const [inputs, setInputs] = useState({});
    const [imageUrl, setImageUrl] = useState('');
    const [coverUrl, setCoverUrl] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const dispatch = useDispatch();

    const handleDropdownChange = (value) => {
      setSelectedValue(value);
    };

    const getCategory = ((id)=> {
      const cat = categories.find(c => c.id === id);
        return cat.name
      })


      useEffect(() => {
        setImageUrl(store['picture_url'])
        setCoverUrl(store['cover_url'])
      }, [])

  const handleChange = (e)=> {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  
    const uploadImage = (file) => {
      const formData = new FormData();
       formData.append('image', file);
      formData.append('store_id', store.id)
      return axios.post('https://app.momentoart.com/api/react/stores/change-picture', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    };
      const uploadCover = (file) => {
      const formData = new FormData();
       formData.append('image', file);
      formData.append('store_id', store.id)
      return axios.post('https://app.momentoart.com/api/react/stores/change-cover', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    };

   const handleFileUpload = async (file, type) => {
      type === 1 ? await uploadCover(file).then(response => {
        console.log('cover uploaded successfully', response.data);
        setCoverUrl(response.data.picture_url);
      })
      .catch(error => {
        console.error('Error uploading image', error);
      }) 
      : await uploadImage(file).then(response => {
        console.log('Image uploaded successfully', response.data);
        setImageUrl(response.data.picture_url) 
      })
      .catch(error => {
        console.error('Error uploading image', error);
      });
    };
  const handleClick = (e)=> {
    e.preventDefault();
          const storeData = { ...inputs, category_id: selectedValue.id };
          updateStore(store.id, storeData, dispatch);
  }
  return (
    <div className="store">
        <h1 className="storeTitle">{store.name}</h1>
      <div className="storeTop">
          <div className="storeTopRight">
             <div className="storeInfoItem">
                      <span className="storeInfoKey">Owner ID:</span>
                      <span className="storeInfoValue">{store.owner_id}</span>
                  </div>
              <div className="storeInfoBottom">
                  <div className="storeInfoItem">
                      <span className="storeInfoKey">ID:</span>
                      <span className="storeInfoValue">{store.id}</span>
                  </div>
                      <div className="storeInfoItem">
                      <span className="storeInfoKey">description:</span>
                      <span className="storeInfoValue">{store.description}</span>
                  </div>
                   <div className="storeInfoItem">
                      <span className="storeInfoKey">categories:</span>
                      <span className="storeInfoValue">{getCategory(store.category_id)}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="storeMiddle">
        <div className="middleLeft">
                {coverUrl && <img className="storeCover" src={coverUrl} alt="Uploaded cover" />}
                      <label for="cover">
                          <Publish/>
                      </label>
                      <span>Upload Store Cover</span>
                     <input type="file" id="cover" style={{display:"none"}}
                      onChange={(e) => handleFileUpload(e.target.files[0], 1)} /> 
            </div>
             <div className="middleRight">
                 {imageUrl && <img className="storeImg" src={imageUrl} alt="Uploaded Image" />}
                        <label for="pic">
                            <Publish/>
                        </label>
                      <span>Upload Store Picture</span>
                      <input type="file" id="pic" style={{display:"none"}}
                      onChange={(e) => handleFileUpload(e.target.files[0], 0)} />
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
                     <DropdownMenu options={categories} onDropdownChange={handleDropdownChange}/>

                     <button onClick={handleClick} className="storeButton">Update</button>
              </div>
            
          </form>
      </div>
    </div>
  );
}