import { useEffect, useState } from "react";
import "./NewCountry.css";
import { useDispatch, useSelector } from "react-redux";
//import { addCountry } from "../../../Redux/Repositories/CountrysRepo";
import DropdownMenu from "../../DropdownMenu";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function NewCountry() {
  const [inputs, setInputs] = useState({});
  const [cat, setCat] = useState('');
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [currency, setCurrency] = useState(null);
  //const categories = useSelector((state)=> state.home.categories);
  //const countries = useSelector((state)=> state.home.countries);
  //const success = useSelector((state)=> state.Country.isSuccess);
  //const loading = useSelector((state)=> state.Country.isFetching);

  const dispatch = useDispatch();
  
 /* useEffect(() => {
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
       const Country = { ...inputs,
           category_id: cat.id,
           country_id: country.id,
           city_id : city.id,
           currency_id: currency.id };
         // addCountry(Country, dispatch);
  }*/
  return (
    <div className="newCountry">
      <h1 className="addCountryTitle">New Country</h1>
      <form className="addCountryForm">
       <div className="addCountryItem">
          <label>Country Name</label>
          <input name="name" type="text" placeholder="Type your Country name" />
        </div>
            <div className="addCountryItem">
          <label>Description</label>
          <input name="descreption" type="text" placeholder="Description" />
        </div>
           <div className="addCountryItem">
          <label>Category</label>
          <DropdownMenu options={[]} />
        </div>
         <div className="addCountryItem">
          <label>Country</label>
          <DropdownMenu options={[]} />
        </div>
    

       
       <button >Create</button>
              
              <ToastContainer />

      </form>
    </div>
  );
}