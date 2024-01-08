import React from 'react'
import "./UserPost.css"
import { useSelector, useDispatch } from 'react-redux';
import avatar from "./avatar.png"
import Expanded from './Expanded';

function UserPost({ post, key, onToggleExpansion }) {
    const { subreddit_name_prefixed, thumbnail, selftext, author, title, ups,  } = post.data;
    const profilePictureObject = post?.data?.author_flair_richtext?.find(item => item.e === 'emoji');
    const profilePicture = profilePictureObject ? profilePictureObject.u : null;
    const video = post.data?.media?.reddit_video?.fallback_url
    const postId = post.data.id
    const expanded = useSelector(state=> state.userposts.expandedPosts[postId])


    return (
        <div className={expanded ? "userPostExpanded" : "userPost"} onClick={() => onToggleExpansion(postId)} >
            <section className='sub2'>
                <div className='sub'>
                    {profilePicture ? <img className='profile' src={profilePicture} /> : <img className='profile' src={avatar} /> }
                    <p>{subreddit_name_prefixed}</p>
                </div>
                <p>Posted by {author}</p>
            </section>
            {selftext.length > 0 ? <p className='caption'>{selftext.length  >= 100 ? selftext.slice(0, 60) + "..." : selftext }</p> :  <p className='caption'>{title.length  >= 100 ? title.slice(0, 60) + "..." : title }</p>}
            {thumbnail && <img src={thumbnail} alt="" />}
            {video && !expanded && <video width="300px" height="200px" controls><source src={video} type="video/mp4"/></video>}
            {expanded && <video width="500px" height="300px" controls><source src={video} type="video/mp4"/></video>}
            {expanded && (
                <Expanded ups={ups}/>
            )}

        </div>



    )
}

export default UserPost