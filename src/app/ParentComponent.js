import React,{createContext,useState,useEffect} from 'react'
import ChildComponent from './ChildComponent'

export const PostStore = createContext();

function ParentComponent() {
    const [post, setPost] = useState('Hi')
    const [status, setStatus] = useState(true)

    
  return (
    <>
        <PostStore.Provider value={{post,setPost,status,setStatus}}>
            <ChildComponent/>
        </PostStore.Provider>
    </>
  )
}

export default ParentComponent