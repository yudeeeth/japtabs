import React,{useEffect,useState} from 'react'
import './Card.css';

const Card = (props) => {
    const [height,setHeight] = useState(20);
    const [width,setWidth] = useState(20);
    useEffect(() => {
        if(props.height !== undefined){
            setHeight(props.height)
        }
        if(props.width !== undefined){
            setWidth(props.width);
        }
    })
    return (
        <div className="card-container" 
        style={{width:`${width}em`,
                height: `${height}em`}} 
        >
            <div className="card-inner">
                <div className="card-front">
                    {props.front}
                </div>
                <div className="card-back">
                    {props.back}
                </div>
            </div>

        </div>
    )
}

export default Card;
