import React from 'react';



const Post = ({title, description, image, comments, linkToComs}) => {



    return( 
        <div className='getPosts'>
            <h2>{title}</h2>
            <p>{description}</p>
            <img className='postImg' src={image} alt='' />
            <h5><button onClick={User}>Comments: {comments}</button></h5>
        </div>
     );
}
 
export default Post;