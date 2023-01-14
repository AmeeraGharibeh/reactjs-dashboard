import './FeaturedInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="featuredMonyContainer">
                <span className='featuredMoney'>2,555$</span>
                <span className='featuredMoneyRate'>-20,5 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>

        </div>
          <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMonyContainer">
                <span className='featuredMoney'>3000$</span>
                <span className='featuredMoneyRate'>-11,5 <ArrowDownward className='featuredIcon negative'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>

        </div>
          <div className="featuredItem">
            <span className="featuredTitle">Costs</span>
            <div className="featuredMonyContainer">
                <span className='featuredMoney'>2,555$</span>
                <span className='featuredMoneyRate'>+20,5 <ArrowUpward className='featuredIcon'/></span>
            </div>
            <span className='featuredSub'>Compared to last month</span>

        </div>
    </div>
  )
}
