import React, { useEffect, useState } from "react";
import Post from './components/RedditPosts';
import './App.css';


const App = () => {
  
      const [posts, setPosts] = useState([]);
      const [search, setSearch] = useState('');
      const [query, setQuery] = useState('games');
     

useEffect(() => {
    getPosts();

}, [query]);

useEffect(() => {
    // const _replies =  posts.map(post => { getReplies(post.data.permalink)
    console.log(posts)
    }, [posts]);

const getPosts = async () => {
      const response = await fetch(`https://www.reddit.com/search.json?q=${query}`);
      const data = await response.json();
      setPosts(data.data.children.map(({data}) => data));
      // setPosts(data.data.children.map(post => post.data));
     

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
      return data[1].data.body;
      console.log(data[1].data.body);
  
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
          key={post.id}
          title={post.title}
          description={post.selftext}
          image={post.thumbnail}
          comments={post.num_comments}
          permalink={post.permalink}
        />
     ))} 
         
    </div>
 
    </div>
  );
};

export default App;
