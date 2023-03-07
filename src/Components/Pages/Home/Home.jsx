import Chart from '../../Chart/Chart'
import FeaturedInfo from '../Featured/FeaturedInfo'
import './Home.css'
import SmallWidget from "../../SmallWidget/SmallWidget";
import LargeWidget from "../../LargeWidget/LargeWidget";
import { useEffect, useMemo, useState } from 'react';
import { publicRequest } from "../../../apiRequest";

export default function Home() {
    const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await publicRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (err){
        console.log(err)
      }
    };
    getStats();
  }, [MONTHS]);
  return (
       <div className='home'>
        <FeaturedInfo/>
        <Chart data= {userStats} title= 'Users Analytics' grid dataKey ='Active User' />
        <div className="homWidgets">
          <SmallWidget/>
          <LargeWidget/>
        </div>
    </div>   
  )
}
