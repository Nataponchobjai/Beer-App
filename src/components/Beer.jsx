import React, { useState } from "react";

function Beer(props) {
    const [isLiked, setIsLiked] = useState(false);
    
    const handleLike = () => {
        setIsLiked(!isLiked); 
    };

    return (
        <li className="beer">
            <h4 className="beer-title">{props.beer.name}    {props.beer.first_brewed}</h4>
            <img className="beer-image" src={props.beer.image_url} alt={props.beer.name} />
            <p className="beer-description">{props.beer.description}</p> {}
            <button onClick={handleLike}>
                {isLiked ? "I Love it" : "I hate it"}
            </button>
        </li>
    );
}

export default Beer;
