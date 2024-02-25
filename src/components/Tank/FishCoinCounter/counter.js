import './counter.css'
import FishingButtons from './FishingButtons/FishingButtons'

const Counter = ({coinCount, buyCheapBait, buyNormalBait, buyHighBait, low = 0, normal = 0, high = 0, fishCheap, fishNormal, fishHigh}) => {
    return(<div className='header'><img src='https://i.imgur.com/X4090LM.png'/><p  id='text'>{coinCount}</p> <FishingButtons className="fishingButtons" buyCheapBait={buyCheapBait} buyNormalBait={buyNormalBait} buyHighBait={buyHighBait} low={low} normal={normal} high={high} fishCheap={fishCheap} fishNormal={fishNormal} fishHigh={fishHigh}/></div>)
}

export default Counter