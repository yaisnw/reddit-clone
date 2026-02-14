import "./UserPost.css"
import { useSelector } from 'react-redux';
import avatar from "./avatar.png"
import Expanded from './Expanded';

function UserPost({ post, onToggleExpansion }) {
    const { subreddit_name_prefixed, thumbnail, selftext, author, title, ups, url_overridden_by_dest } = post.data;
    const profilePictureObject = post?.data?.author_flair_richtext?.find(item => item.e === 'emoji');
    const profilePicture = profilePictureObject ? profilePictureObject.u : null;
    const video = post.data?.media?.reddit_video?.fallback_url;
    const postId = post.data.id;
    const expanded = useSelector(state => state.userposts.expandedPosts[postId]);
    const isImage = url_overridden_by_dest?.match(/\.(jpg|jpeg|png|gif|webp)$/i);
    const isGallery = post.data?.is_gallery;
    const media_metadata = post.data?.media_metadata;
    const galleryImage = isGallery && media_metadata
        ? Object.values(media_metadata)[0]?.s?.u?.replace(/&amp;/g, '&')
        : null;
    console.log('postId:', postId, 'expanded:', expanded)
    return (
        <div className={expanded ? "userPostExpanded" : "userPost"} onClick={() => onToggleExpansion(postId)}>
            <section className='sub2'>
                <div className='sub'>
                    {profilePicture
                        ? <img className='profile' src={profilePicture} alt="profile avatar" />
                        : <img className='profile' src={avatar} alt="default avatar" />
                    }
                    <p>{subreddit_name_prefixed}</p>
                </div>
                <p>Posted by {author}</p>
            </section>

            {selftext.length > 0
                ? <p className='caption'>{!expanded && selftext.length >= 100 ? selftext.slice(0, 60) + "..." : selftext}</p>
                : <p className='caption'>{!expanded && title.length >= 100 ? title.slice(0, 60) + "..." : title}</p>
            }

            {!expanded && video && (
                <video width="300px" height="200px" controls>
                    <source src={video} type="video/mp4" />
                </video>
            )}
            {!expanded && !video && isImage && (
                <img src={url_overridden_by_dest} alt="" style={{ width: "100%", height: "auto" }} />
            )}
            {!expanded && !video && !isImage && galleryImage && (
                <img src={galleryImage} alt="" style={{ width: "100%", height: "auto" }} />
            )}
            {!expanded && !video && !isImage && !galleryImage && thumbnail && (
                <img src={thumbnail} alt="" />
            )}

            {expanded && video && (
                <video width="500px" height="300px" controls>
                    <source src={video} type="video/mp4" />
                </video>
            )}
            {expanded && !video && isImage && (
                <img src={url_overridden_by_dest} alt="" style={{ width: "300px", height: "200px", objectFit: "contain" }} />
            )}
            {expanded && !video && !isImage && galleryImage && (
                <img src={galleryImage} alt="" style={{ width: "300px", height: "200px", objectFit: "contain" }} />
            )}
            {expanded && !video && !isImage && !galleryImage && thumbnail && (
                <img src={thumbnail} alt="" style={{ width: "300px", height: "200px", objectFit: "contain" }} />
            )}

            {expanded && ups > 0 && <Expanded ups={ups} />}
        </div>
    )
}

export default UserPost