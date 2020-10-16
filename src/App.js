import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {
  static defaultProps ={
    store:{
      lists: [],
      allCards: {},
    }
  };
  render(){
    const {store} = this.props
    const allList = store.lists.map(item =>(
      <List
        header = {item.header}
        cards = {item.cardIds.map(function(id){
          return store.allCards[id]
        })}
        key = {item.id}
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
