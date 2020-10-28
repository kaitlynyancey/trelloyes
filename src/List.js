import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
    static defaultProps = {
        store:{
            cards: []
        } 
    }
    render(){
        //console.log(this.props.cards)
        const allCards = this.props.cards.map((card)=>
                (<Card 
                    title = {card.title}
                    content = {card.content}
                    id = {card.id}
                    onDeleteItem={this.props.onDeleteItem}
                    listId = {this.props.id}
                />)
            
        )
        return(
            <section className='List' id={this.props.id}>
                <header className="List-header">
                    <h2>{this.props.header}</h2>
                </header>
                <div className='List-cards'>
                    {allCards}
                    <button type="button" className="List-add-button" onClick={() => this.props.onRandomItem(this.props.id)}>
                        + Add Random Card
                    </button>
                </div>
            </section>
           
        )      
}
}

export default List