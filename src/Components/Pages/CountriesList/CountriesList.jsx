import "./CountriesList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getCountries} from '../../../Redux/Repositories/CountriesRepo'


export default function CountriesList() {
  const dispatch = useDispatch();
  const countries = useSelector((state)=> state.country.countries);
  //const categories = useSelector((state)=> state.home.categories);

  const limit = useSelector((state)=> state.country.Limit);
  

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
   // console.log('categories' + categories)
    getCountries(dispatch, currentPage, limit);
  }, [dispatch, currentPage])

  
// const getCategory = ((id)=> {
 //const cat = categories.find(c => c.id === id);
 // return cat.name})
  const columns = [
    { field: "_id", headerName: "ID", width: 100 },
    {
      field: "img_url",
      headerName: "Picture",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="countryListItem">
            <img className="countryListImg" src={params.row.img_url} alt="" />
          </div>
        );
      },
    },
    {
      field: "name_ar",
      headerName: "Country",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="countryListItem">
            {params.row.name_ar}
          </div>
        );
      },
    },
    { field: "rooms_count", headerName: "Rooms", width: 150 },
    { field: "users_count", headerName: "Users", width: 150 },
 
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
 <DataGrid
        rows={countries}
        disableSelectionOnClic
        columns={columns}
        getRowId= {(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
    </>  
  
  );
}