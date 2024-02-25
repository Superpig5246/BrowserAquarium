import "./tank.css";
import Fish from '../Fish/fish'
import Counter from './FishCoinCounter/counter'
import { useState } from "react"


const Tank = () => {
    const goldfish = {link: 'https://i.imgur.com/OLx2WWh.png', value: 1}
    const clownfish = {link: 'https://i.imgur.com/K0jMnqT.png', value: 1}
    const jellyfish = {link: 'https://i.imgur.com/Jl0HuWl.png', value: 5}
    const squarefish = {link: 'https://i.imgur.com/uS6tRru.png', valie: 5}
    const eel = {link: 'https://i.imgur.com/qFoknMt.png', value: 5}
    const starfish = {link: 'https://i.imgur.com/GQnIWkF.png', value: 5}
    const seahorse = {link: 'https://i.imgur.com/M8n49yp.png', value: 10}
    const trianglefish = {link: 'https://i.imgur.com/FXcCRfV.png', value: 10}
    const piratefish = {link: 'https://i.imgur.com/V00GPbY.png', value: 10} 
    const catfish = {link: 'https://i.imgur.com/yBLaO3X.png', value: 20}
    const lightfish = {link: 'https://i.imgur.com/kbAIHzL.png',value: 20}
    const ghostfish = {link: 'https://i.imgur.com/LLHHvCI.png', value: 30}
    const skelefish = {link: 'https://i.imgur.com/1Rr6rhZ.png', value: 30}
    const stingray = {link: "https://i.imgur.com/ZGqhYSL.png", value: 30}
    const robofish = {link: 'https://i.imgur.com/Cv2YGcD.png', value: 30}
    const cheepcheep = {link: "https://i.imgur.com/dMXznC0.png", value: 40}
    const bird = {link: 'https://i.imgur.com/DIL4VDF.png', value: 40}
    const octopus = {link: 'https://i.imgur.com/S5YTmHM.png', value: 50}
    const shark = {link: 'https://i.imgur.com/HJB5gZf.png', value: 70}
    const turtle = {link: 'https://i.imgur.com/4tuFxzY.png', value: 70}
    const hammerhead = {link: "https://i.imgur.com/UfyZQyg.png", value: 80}
    const squirrel = {link: 'https://i.imgur.com/QKtma0M.png', value: 80}
    const blooper = {link: "https://i.imgur.com/uMNWzce.png", value: 90}
    const plankton = {link: 'https://i.imgur.com/jhyxx1O.png', value: 100}

    const [coinCount, setCount] = useState(0)
    const [cheapBait, setCheap] = useState(0)
    const [normalBait, setNormal] = useState(0)
    const [highBait, setHigh] = useState(0)
    const [tankUpgradeNumber, setUpgrade] = useState(10)
    

    const fishes = [
        goldfish,
        clownfish,
        jellyfish, 
        squarefish, 
        eel,
        starfish, 
        trianglefish, 
        piratefish,
        catfish,
        lightfish,
        ghostfish,
        skelefish,
        robofish,
        bird,
        seahorse,
        octopus,
        shark,
        turtle,
        squirrel,
        plankton,
        stingray,
        cheepcheep,
        hammerhead,
        blooper
    ]

    const commonFish = [
        goldfish,
        clownfish,
        jellyfish, 
        squarefish, 
        eel,
        starfish, 
        trianglefish, 
        piratefish,
        seahorse
    ]
    const normalFish = [
        catfish,
        lightfish,
        ghostfish,
        skelefish,
        robofish,
        bird,
        octopus,
        stingray, 
        cheepcheep
    ]
    const rareFish = [
        shark,
        turtle,
        squirrel,
        plankton,
        hammerhead,
        blooper
    ]

    const [myFish, setFish] = useState([fishes[0]])


    const incrementCount = (val) => {
        console.log("Getting called")
        setCount(coinCount + val)
    }

    const buyCheapBait = () =>  {
        if (coinCount >= 100) {
            setCount(coinCount - 100)
            setCheap(cheapBait + 1)
        }
    }

    const buyNormalBait = () =>  {
        if (coinCount >= 5000) {
            setCount(coinCount - 5000)
            setNormal(normalBait + 1)
        }
    }

    const buyHighBait = () =>  {
        if (coinCount >= 50000) {
            setCount(coinCount - 5000)
            setHigh(highBait + 1)
        }
    }

    const fishCheapBait = () => {
        if (cheapBait > 0) {
            setCheap(cheapBait - 1)
            let newFishes = myFish

            if (Math.random() > .7) {
                newFishes.push(commonFish[Math.floor(Math.random() * commonFish.length)])
            } else {
                newFishes.push(normalFish[Math.floor(Math.random() * normalFish.length)])
            }

            setFish(newFishes)

            if (newFishes.length >= tankUpgradeNumber) {
                setUpgrade(tankUpgradeNumber + 10)
            }
        }
    }

    const fishNormalBait = () => {
        if (normalBait > 0) {
            setNormal(normalBait - 1)
            let newFishes = myFish

            if (Math.random() > .9) {
                newFishes.push(rareFish[Math.floor(Math.random() * rareFish.length)])
            } else if (Math.random > .4) {
                newFishes.push(normalFish[Math.floor(Math.random() * normalFish.length)])
            } else {
                newFishes.push(commonFish[Math.floor(Math.random() * commonFish.length)])
            }

            setFish(newFishes)

            if (newFishes.length >= tankUpgradeNumber) {
                setUpgrade(tankUpgradeNumber + 10)
            }
        }
    }

    const fishHighBait = () => {
        if (highBait > 0) {
            setHigh(highBait - 1)
            let newFishes = myFish

            if (Math.random() > .4) {
                newFishes.push(rareFish[Math.floor(Math.random() * rareFish.length)])
            } else {
                newFishes.push(normalFish[Math.floor(Math.random() * normalFish.length)])
            }

            setFish(newFishes)

            if (newFishes.length >= tankUpgradeNumber) {
                setUpgrade(tankUpgradeNumber + 10)
            }
        }
    }

    const moveStyles = {
        minHeight: `${100}vh`,
    };

    return (<div className="tank" id="tank" style = {moveStyles}>
        <div><Counter coinCount={coinCount} buyCheapBait={buyCheapBait} buyNormalBait={buyNormalBait} buyHighBait={buyHighBait} normal={normalBait} low={cheapBait} high={highBait} fishCheap={fishCheapBait} fishNormal={fishNormalBait} fishHigh={fishHighBait}/></div>
        <div>
            {
            myFish.map((fish) => <Fish incrementCount={incrementCount} fish = {fish.link} value={fish.value}/>)
            //All fish
            //fishes.map((fish) => <Fish incrementCount={incrementCount} fish = {fish.link} value={fish.value}/>)
            }
        </div>
        </div>)
}

export default Tank