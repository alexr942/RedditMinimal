import React, { useEffect, useState } from "react";
import Post from './components/RedditPosts';
import UserReplies from './components/comments'
// import SubRedditCard from './components/SubReddit'
import './App.css';


const App = () => {
  

    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('home');
    const [replies,setReplies] = useState([]);

useEffect(() => {
  getPosts();
  getReplies();
}, [query]);

const getPosts = async () => {
    const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
    const data = await response.json();
    setPosts(data.data.children);
    console.log(data.data.children);
};

const updateSearch = e => {
  setSearch(e.target.value);
  
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('')
}

const getReplies = async (permalink) => {
  const response = await fetch(`https://www.reddit.com${permalink}.json`);
  const data = await response.json();
  setReplies(data[1].data.children);
  console.log(data[1].data.children);
}



return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form"> 
        <input className="search-bar" type='text' value={search} onChange={updateSearch}/>
        <button className="search-button" type='submit'>search</button>
  </form>
    <div className='posts'>
      {posts.map(post => (
        <Post
        key={post.data.id}
        title={post.data.title}
        description={post.data.selftext}
        image={post.data.thumbnail}
        comments={post.data.num_comments}
        />
        ))} 
         
      </div>
      <div className='replies' >

      {replies.map(replie => (
        <UserReplies
       replies={replie.data.body}
        />
        ))} 

      </div>
  
    </div>
  );
};

export default App;
