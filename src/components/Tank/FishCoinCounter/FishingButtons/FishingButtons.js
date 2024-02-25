

const FishingButtons = ({low = 0, normal = 0, high = 0, buyCheapBait, buyNormalBait, buyHighBait, fishCheap, fishNormal, fishHigh}) => {
const lowQuality = "https://i.imgur.com/1U1kapH.png"
const normalQuality = "https://i.imgur.com/wqhSafC.png"
const highQuality = "https://i.imgur.com/0u9wpCD.png"

    return (<div className="fishingButtons">
        <button id="text" onClick={buyCheapBait}>Buy Cheap Bait: 100</button>
        <button id="text" onClick={buyNormalBait}>Buy Decent Bait: 5,000</button>
        <button id="text" onClick={buyHighBait}>Buy Exceptional Bait: 50,000</button>
        <button id="text" onClick={fishCheap}><img src = {lowQuality}/>{low}</button>
        <button id="text" onClick={fishNormal}><img src = {normalQuality}/>{normal}</button>
        <button id="text" onClick={fishHigh}><img src = {highQuality}/>{high}</button>
    </div>)
}

export default FishingButtons;