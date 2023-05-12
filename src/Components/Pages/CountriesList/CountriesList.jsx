import "./CountriesList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
///import {getCountries} from '../../../Redux/Repositories/CountriesRepo'


export default function CountriesList() {
  const dispatch = useDispatch();
  //const countries = useSelector((state)=> state.country.countries);
  //const categories = useSelector((state)=> state.home.categories);

  //const limit = useSelector((state)=> state.country.Limit);
  //const totalRows = useSelector(state => state.country.totalRows);
  //const loading = useSelector(state => state.country.isFetching);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
   // console.log('categories' + categories)
   // getCountries(dispatch, currentPage, limit);
  }, [dispatch, currentPage])

  
// const getCategory = ((id)=> {
 //const cat = categories.find(c => c.id === id);
 // return cat.name})
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "picture_url",
      headerName: "Picture",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="countryListItem">
            <img className="countryListImg" src={params.row.picture_url} alt="" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Country",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="countryListItem">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "owner_id", headerName: "Owner ID", width: 150 },
      {
      field: "category_id",
      headerName: "Category",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="countryListItem">
        
          </div>
        );
      },
    },

 
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/country/" + params.row.id}>
              <button className="countryListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="countryListDelete"
            />
          </>
        );
      },
    },
  ];

  return (   
    <>
    
      <div className="countryList">
       <div className="newcountrybutton">
         <Link to="/newcountry">
          <button className="countryAddButton">Add New country</button>
        </Link> 
       </div>

    </div>
    </>  
  
  );
}