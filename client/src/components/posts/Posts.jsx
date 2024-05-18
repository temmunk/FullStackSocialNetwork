import React from 'react'
import Post from '../post/Post'
import './posts.scss'
import {
  useQuery,
} from '@tanstack/react-query'
const Posts = () => {

  // TEMPORARY DATA 

  const posts = [
    
  ];



  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id} />

      ))}
      
    </div>
  )
}

export default Posts