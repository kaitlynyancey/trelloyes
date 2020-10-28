import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }
  handleDeleteItem = (item, id) =>{
    //console.log('test delete', { item }, {id})
    const newList = this.state.lists.map((lists, index) =>{
      if((id-1) === index){
        lists.cardIds = lists.cardIds.filter(itm => itm !== item)
      }
      return lists
    })
    //console.log(newList)
    this.setState({
      lists: newList,
    })
  }

  handleRandomItem = (listId) => {
    //console.log('test random')
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      const newObject = {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
      this.state.lists[listId-1].cardIds.push(newObject.id)
      const newList = this.state.lists
      //console.log(newList)
      this.state.allCards[newObject.id] = newObject
      //console.log(this.state.allCards)
      const newCards = this.state.allCards
      this.setState({
        lists: newList,
        allCards: newCards,
      })

  }

  render(){
    const allList = this.state.lists.map(item =>(
      <List
        header = {item.header}
        cards = {item.cardIds.map((id)=>(
          this.state.allCards[id]
        ) 
        )}
        id={item.id}
        onDeleteItem={this.handleDeleteItem}
        onRandomItem={this.handleRandomItem}
      />
    ))
    return(
      <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {allList}
      </div>
    </main>
    )
  }
  
}

export default App;
