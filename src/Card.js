import React from 'react';
import './Card.css';

function Card(props) {
    return(
        <div className='Card' id={props.id}>
            <button type="button" onClick={() => props.onDeleteItem(props.id, props.listId)}>
                delete
            </button>
            <h3>
                {props.title}
            </h3>
            <p>      
                {props.content}
             </p>
        </div>
    )
}

export default Card