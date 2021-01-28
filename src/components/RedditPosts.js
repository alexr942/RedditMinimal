import React, { useState, useEffect }from 'react';
import UserReplies from './comments'
import getReplies from '../App'
//can pass
const Post = ({title, description, image, comments, permalink, coms}) => {

    const [replies, setReplies] = useState([]);

const handleClick = () => {

   getComments();


}

useEffect(() => {
    // const _replies =  posts.map(post => { getReplies(post.data.permalink)
    console.log(replies)
    }, [replies]);


const getComments = async () => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const data = await response.json();
    // debugger;
    setReplies(data[1].data.children.map(({data})  => data));
    // setPosts(data.data.children.map(post => post.data));
   

};


    return( 
            <>
        <div className='getPosts'> 

            <h2>{title}</h2>
            <small>{permalink}</small>
            <p>{description}</p>
            <img className='postImg' src={image} alt='' />
            <h5><button onClick={handleClick}>Comments: {comments}</button></h5>
        </div>

              <div className='replies'>
      {replies.map(reply => (
        <UserReplies
          coms={reply.body}
          key={reply.id}
          userName={reply.author}
        />
     ))} 

   </div>
   </>
     );
}
 
export default Post;