import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import '../../styles/postListe.css'
import React from 'react'
import AddPostForm from "./AddPostForm";
import PostAuth from "./PostAuth";
import PostAuthor from "./PostAuth";
import TimesAgo from "./TimesAgo";
import ReactionBottom from "./ReactionBottom";

const PostListe = ({text}) => {
    const posts = useSelector(selectAllPosts)
    const orderPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
    const renderPosts = orderPosts.filter((el) => el.title.toLowerCase().includes(text)).map(post =>(
        <div className="tit-content" key={post.id}>
            <h3> {post.title}</h3> 
            <p> {post.content}</p>
            <p>
              <PostAuth userId={post.userId}/>

              <TimesAgo timestamp={post.date}/>

            </p>
            <ReactionBottom post={post}/>
        </div>
    ))
  return (
    <>
    <AddPostForm/>
    <div className="post-cont">
        {renderPosts}
        </div>
    </>
  )
}

export default PostListe