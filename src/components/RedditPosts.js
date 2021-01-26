import React from 'react';

//can pass
const Post = ({title, description, image, comments, replies}) => {


    return( 
        <div className='getPosts'>
            <h2>{title}</h2>
            <p>{description}</p>
            <img className='postImg' src={image} alt='' />
            <h5><button onClick={replies}>Comments: {comments}</button></h5>
        </div>
     );
}
 
export default Post;