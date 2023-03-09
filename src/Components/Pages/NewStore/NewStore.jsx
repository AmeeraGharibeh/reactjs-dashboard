import { useEffect, useState } from "react";
import "./NewStore.css";
import { useDispatch, useSelector } from "react-redux";
import { addStore } from "../../../Redux/Repositories/StoresRepo";
import DropdownMenu from "../../DropdownMenu";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewStore() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState('');
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [currency, setCurrency] = useState(null);
  const categories = useSelector((state)=> state.home.categories);
  const countries = useSelector((state)=> state.home.countries);
  const success = useSelector((state)=> state.store.isSuccess);
  const loading = useSelector((state)=> state.store.isFetching);

  const dispatch = useDispatch();
  
  useEffect(() => {
    setCat(categories[0])
    setCountry(countries[0])
    setCity(countries[0].cities[0])
    setCurrency(countries[0].currency)
  
  }, [])
  useEffect(() => {
  if (success.success) {
    toast.success(success.message);
  } else {
        toast.success(success.message);
  }
}, [success]);

  
  const handleChange = (e)=> {
    setInputs(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
   const handleDropdownCat = (value) => {
    console.log(value)
      setCat(value);
    };
       const handleDropdownCountry = (value) => {
      setCountry(value);
      setCurrency(value.currency);
    };
       const handleDropdownCity = (value) => {
      setCity(value);
    };
 
  const handleClick = (e)=> {
    e.preventDefault();
       const Store = { ...inputs,
           category_id: cat.id,
           country_id: country.id,
           city_id : city.id,
           currency_id: currency.id };
          addStore(Store, dispatch);
  }
  return (
    <div className="newStore">
      <h1 className="addStoreTitle">New Store</h1>
      <form className="addStoreForm">
       <div className="addStoreItem">
          <label>Store Name</label>
          <input name="name" type="text" placeholder="Type your store name" onChange={handleChange}/>
        </div>
            <div className="addStoreItem">
          <label>Description</label>
          <input name="descreption" type="text" placeholder="Description" onChange={handleChange}/>
        </div>
           <div className="addStoreItem">
          <label>Category</label>
          <DropdownMenu options={categories} onDropdownChange={handleDropdownCat}/>
        </div>
         <div className="addStoreItem">
          <label>Country</label>
          <DropdownMenu options={countries} onDropdownChange={handleDropdownCountry}/>
        </div>
         <div className="addStoreItem">
          <label>City</label>
          <DropdownMenu options={country !== null ? country.cities : countries[0].cities} onDropdownChange={handleDropdownCity}/>
        </div>
            <div className="addStoreItem">
          <label>Currency</label>
          <label>{country !== null ? country.currency.symbol : countries[0].currency.symbol}</label>
        </div>

        <button onClick={handleClick} className="addStoreButton">{loading === true ? 'loading...' : 'Create'}</button>
              <ToastContainer />

      </form>
    </div>
  );
}