import Chart from '../../Chart/Chart'
import FeaturedInfo from '../Featured/FeaturedInfo'
import './Home.css'
import {userData} from '../../../dummydata'
import SmallWidget from "../../SmallWidget/SmallWidget";
import LargeWidget from "../../LargeWidget/LargeWidget";

export default function Home() {
  return (
       <div className='home'>
        <FeaturedInfo/>
        <Chart data= {userData} title= 'Users Analytics' grid dataKey ='Active User' />
        <div className="homWidgets">
          <SmallWidget/>
          <LargeWidget/>
        </div>
    </div>   
  )
}
