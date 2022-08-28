import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import  {postAdd}  from './postSlice'
import '../../styles/addPostForm.css'
import { FcPlus } from "react-icons/fc";
import { selectAllUsers } from '../users/userSlice';

const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')
    
    const users = useSelector(selectAllUsers)

    const handleTitle = e => setTitle(e.target.value)
    const handleContent = e => setContent(e.target.value)
    const handleAuth = e => setUserId(e.target.value)
    const [show, setShow] = useState(false)
    const handleSave =() => {
        setShow(false)
        if (title && content) {
            dispatch (
                postAdd(title,content,userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    const usersOptions = users.map(user =>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))
    return (
    <div className='add-cont'>
        <div className='plus'>
        <span onClick={(e)=>setShow(true)}><FcPlus/></span>
    <h2>Add a New Post</h2>
    </div>
    {show?   <div className='view'>
    <h1 onClick={(e)=>setShow(false)}>X</h1>
    <div className='user-c'>
    <h3 >User:</h3>
        <select id="postAuthor" value={userId} onChange={handleAuth}>
            <option value=""></option>
            {usersOptions}
        </select>
        </div>

        <div className='add-title'>
        <h3>Post Title:</h3>
        <input
            type="text"
            id="postTitle"
            name="postTitle"
            placeholder='Add your title here'
            value={title}
            onChange={handleTitle}
        />
        </div>
        
        <div className='add-content'>
        <h3>Content:</h3>
        <textarea
            placeholder='Add your content here'
            id="postContent"
            name="postContent"
            value={content}
            onChange={handleContent}
        />
        </div>
        <div >
        <button className='btn-sv'
            type="button"
            onClick={handleSave}
            disabled={!canSave}
        >Save Post</button>
        </div>
    </div>
    :null}
  
</div>
  )
}

export default AddPostForm