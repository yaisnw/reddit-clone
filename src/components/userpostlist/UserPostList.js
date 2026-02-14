import React from 'react'
import UserPost from '../userpost/UserPost'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchInitialSub } from '../../features/userPostSlice'
import { togglePostExpansion } from '../../features/userPostSlice'

function UserPostList() {
  const dispatch = useDispatch();
  const postList = useSelector(state => state.userposts.results?.data?.children.slice(0, 10));
  const filter = useSelector(state => state.userposts.filter)
  const searchLoading = useSelector(state => state.search.isLoading)
  
  useEffect(() => {
    dispatch(fetchInitialSub(filter))
  }, [dispatch, filter])

  const handleToggleExpansion = (postId) => {
    dispatch(togglePostExpansion(postId))
  }

  return (
    <div>

      {!postList?.length || searchLoading ? <p>loading...</p> : postList.map((post, index) => <UserPost onToggleExpansion={handleToggleExpansion} post={post} key={index} />)}
    </div>
  )
}

export default UserPostList