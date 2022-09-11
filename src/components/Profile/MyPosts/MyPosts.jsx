import Post from "./Post/Post";
import React from "react";
import s from "./MyPosts.module.css"


const MyPosts = ({posts, newPostText, updateNewPostText, addPost}) => {
    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={newPostText} />
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className='posts'>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;