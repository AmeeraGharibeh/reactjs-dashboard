import "./RoomsList.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
//import {deleteRoom, getRooms} from '../../../Redux/Repositories/RoomsRepo'

export default function RoomsList() {
  const dispatch = useDispatch();
  //const rooms = useSelector((state)=> state.rooms.rooms)
  useEffect(()=> {
    //getrooms(dispatch);
  }, [dispatch])
  const handleDelete = (id) => {
    //deleterooms(id, dispatch);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "img",
      headerName: "Room",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="roomsListItem">
            <img className="roomsListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    {
      field: "price",
      headerName: "Price",
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
    </div>
  );
}