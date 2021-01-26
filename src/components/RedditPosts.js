import React from 'react';
import getReplies from './replies';

//can pass
const Post = ({title, description, image, comments, replyLink, postID}) => {
    return( 
        <div className='getPosts' id={postID}>
            <h2>{title}</h2>
            <p>{description}</p>
            <img className='postImg' src={image} alt='' />
            <h5><button onClick={() => getReplies(replyLink, postID)}>Comments: {comments}</button></h5>
        </div>
     );
}
 
export default Post;