import "./StoresList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getStores} from '../../../Redux/Repositories/StoresRepo'
import { userRows } from "../../../dummydata";


export default function StoreList() {
  const dispatch = useDispatch();
  const stores = useSelector((state)=> state.store.stores);
  const categories = useSelector((state)=> state.home.categories);

  const limit = useSelector((state)=> state.store.Limit);
  const totalRows = useSelector(state => state.store.totalRows);
  const loading = useSelector(state => state.store.isFetching);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
    console.log('categories' + categories)
    getStores(dispatch, currentPage, limit);
  }, [dispatch, currentPage])

 const getCategory = ((id)=> {
 const cat = categories.find(c => c.id === id);
  return cat.name
 })
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "picture_url",
      headerName: "Picture",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="storeListItem">
            <img className="storeListImg" src={params.row.picture_url} alt="" />
          </div>
        );
      },
    },
    {
      field: "name",
      headerName: "Store",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="storeListItem">
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
          <div className="storeListItem">
            {getCategory(params.row.category_id)}
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
            <Link to={"/store/" + params.row.id}>
              <button className="storeListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="storeListDelete"
            />
          </>
        );
      },
    },
  ];

  return (   
    <>
    
      <div className="storeList">
       <div className="newstorebutton">
         <Link to="/newstore">
          <button className="storeAddButton">Create New Store</button>
        </Link> 
       </div>
      <DataGrid
        rows={stores}
        disableSelectionOnClic
        loading = {loading}
        checkboxSelection
        columns={columns}
        getRowId= {(row) => row.id}
        pageSize={15}
        rowCount={totalRows}
        page = {currentPage - 1}
        onPageChange={(params) => {
          setCurrentPage(params + 1)
        }}

      />
    </div>
    </>  
  
  );
}