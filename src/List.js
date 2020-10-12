import React from 'react';
import Card from './Card';
import './List.css';

function List(props){
    console.log(props)
    const allCards = props.cards.map(function(card){
        return (
            <Card 
                title = {card.title}
                content = {card.content}
                key = {card.id}
            />
        )
    })

    return(
        <section className='List'>
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {allCards}

                <button type="button" className="List-add-button">
                    + Add Random Card
                </button>
            </div>
        </section>
       
    )
}

export default List