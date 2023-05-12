import "./RoomsList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getRooms} from '../../../Redux/Repositories/RoomsRepo'

export default function RoomsList() {
  const dispatch = useDispatch();
  const rooms = useSelector((state)=> state.room.rooms)
    const [currentPage, setCurrentPage] = useState(1);

  useEffect(()=> {
    getRooms(currentPage, 10, dispatch);
  }, [dispatch, currentPage])
  const handleDelete = (id) => {
    //deleteRooms(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 100 },

    { field: "room_name", headerName: "Name", width: 200 },
    {
      field: "room_owner",
      headerName: "Owner",
      width: 160,
    },
     {
      field: "room_country",
      headerName: "Country",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/rooms/" + params.row._id}>
              <button className="roomsListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="roomsListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (     
    <div className="roomsList">
    <div className="addButtonContainer">
        <Link to="/newRoom">
          <button className="roomAddButton">Add new room</button>
        </Link>
      </div>
        <DataGrid
        rows={rooms}
        disableSelectionOnClic
        columns={columns}
        getRowId= {(row) => row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}