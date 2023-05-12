import { useLocation } from "react-router-dom";
import "./Country.css";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
import DropdownMenu from "../../DropdownMenu";
import { useDispatch } from "react-redux";
//import { updateCountry } from "../../../Redux/Repositories/CountrysRepo";

export default function Country() {
    const location = useLocation();
    const countryId = location.pathname.split('/')[2];
    const categories = useSelector((state)=> state.home.categories);

    const country = useSelector((state)=> state.country.countrys.find(s => s.id === parseInt(countryId)));
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
        setImageUrl(country['picture_url'])
        setCoverUrl(country['cover_url'])
      }, [])

  const handleChange = (e)=> {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  
    const uploadImage = (file) => {
      const formData = new FormData();
       formData.append('image', file);
      formData.append('country_id', country.id)
      return axios.post('', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    };
      const uploadCover = (file) => {
      const formData = new FormData();
       formData.append('image', file);
      formData.append('country_id', country.id)
      return axios.post('', formData, {
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
          const countryData = { ...inputs, category_id: selectedValue.id };
         // updatecountry(country.id, countryData, dispatch);
  }
  return (
    <div className="country">
        <h1 className="countryTitle">{country.name}</h1>
      <div className="countryTop">
          <div className="countryTopRight">
             <div className="countryInfoItem">
                      <span className="countryInfoKey">Owner ID:</span>
                      <span className="countryInfoValue">{country.owner_id}</span>
                  </div>
              <div className="countryInfoBottom">
                  <div className="countryInfoItem">
                      <span className="countryInfoKey">ID:</span>
                      <span className="countryInfoValue">{country.id}</span>
                  </div>
                      <div className="countryInfoItem">
                      <span className="countryInfoKey">description:</span>
                      <span className="countryInfoValue">{country.description}</span>
                  </div>
                   <div className="countryInfoItem">
                      <span className="countryInfoKey">categories:</span>
                      <span className="countryInfoValue">{getCategory(country.category_id)}</span>
                  </div>
              </div>
          </div>
      </div>
      <div className="countryMiddle">
        <div className="middleLeft">
                {coverUrl && <img className="countryCover" src={coverUrl} alt="Uploaded cover" />}
                      <label for="cover">
                          <Publish/>
                      </label>
                      <span>Upload country Cover</span>
                     <input type="file" id="cover" style={{display:"none"}}
                      onChange={(e) => handleFileUpload(e.target.files[0], 1)} /> 
            </div>
             <div className="middleRight">
                 {imageUrl && <img className="countryImg" src={imageUrl} alt="Uploaded Image" />}
                        <label for="pic">
                            <Publish/>
                        </label>
                      <span>Upload country Picture</span>
                      <input type="file" id="pic" style={{display:"none"}}
                      onChange={(e) => handleFileUpload(e.target.files[0], 0)} />
          </div>
        </div>
      <div className="countryBottom">
          <form className="countryForm">
              <div className="countryFormLeft">
                  <label>country Name</label>
                  <input name="title" type="text" placeholder={country.title} onChange={handleChange}/>
                       <label>country Description</label>
                  <input name="descreption" type="text" placeholder={country.descreption} onChange={handleChange}/>
                      <label>country Categories</label>
                     <DropdownMenu options={categories} onDropdownChange={handleDropdownChange}/>

                     <button onClick={handleClick} className="countryButton">Update</button>
              </div>
            
          </form>
      </div>
    </div>
  );
}