import React from "react";


// Dentro de 
const Card = ({name, mail, id}) => {
    return(
        //Si pones más de un elemento tiene que ser 
        //un array para cada elemento. Cada div es un elmento.
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots' src={`https://robohash.org//${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{mail}</p>
            </div>
        </div>
    )
}

export default Card