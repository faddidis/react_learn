import React, {useRef, useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState(
    [
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    const [post, setPost] = useState( {title: '', body: ''})

    const addNewPost = (e) => {
      e.preventDefault();
       
      setPosts( [ ...posts, {...post, id: Date.now()}])
      setPost( {title: '', body: ''})
    }
  return (
    <div className="App"> 
      <form>
        {/*уПРАВЛЯЕМЫЙ КОМПОНЕНТ*/}
        <MyInput 
            value={post.title}
            onChange={e => setPost( {...post, title: e.target.value})}
            type="text"
            placeholder="Название поста"
          />
          {/* Неконторлируемый компонент */}
        <MyInput
            value={post.body}
            onChange={e => setPost( {...post, body: e.target.value})}
            type="text" 
            placeholder="Описание поста"
        />
        {/* test */}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
        <PostList posts={posts} title="Посты про JS"/>
      </form>
    </div>  
  );
}

export default App;
