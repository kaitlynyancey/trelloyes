import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  console.log(props);
  const allList = props.store.lists.map(function(item){
    return (
    <List
      header = {item.header}
      cards = {item.cardIds.map(function(id){
        return props.store.allCards[id]
      })}
      key = {item.id}
    />
    )
  })
  console.log(allList)
  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {allList}
      </div>
    </main>
  );
}

export default App;
