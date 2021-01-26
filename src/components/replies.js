const getReplies = async (permalink, postID) => {
    const response = await fetch(`https://www.reddit.com${permalink}.json`);
    const data = await response.json();

    data[1].data.children.map(reply => (
        console.log(reply.data.body)

        /* I have each comment and it's body however I do not know how to add it to the post as defined and displayed in ./RedditPost.js
        */
    ))
}

export default getReplies