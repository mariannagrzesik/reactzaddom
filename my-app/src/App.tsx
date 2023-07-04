import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { InputField } from './components/InputField';
import { TodoList } from './components/TodoList';
import { Toggle } from './components/Toggle';
import { List } from './components/List';
import { Timer } from './components/Timer';

function App() {

  const headerList='Lista przekazywanna jako propsy';
  const list=['cos', 'tam', 'nie', 'mam', 'pomyslu']
  
  const listProp={
    header: headerList,
    list
  }
  
  return (
    <div className="App">
      <Button />
      <Counter />
      <InputField />
      <TodoList />
      <Toggle />
      <List {...listProp} />
      <Timer seconds={10} />
    </div>
  );
}

export default App;
