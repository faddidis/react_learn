import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState(
    [
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
    {id: 4, title: 'Javascript 4', body: 'Description'},
    {id: 5, title: 'Javascript 5', body: 'Description'},
    ])
  return (
    <div className="App">
      <Post/>
    </div>  
  );
}

export default App;
