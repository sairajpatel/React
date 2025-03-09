import React from 'react'
import {Link} from 'react-router-dom'
import appWriteService from '../AppWrite/config'

function PostCard({$id,title,featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
             <div className='w-full bg-gray-100 rounded-xl p-3'>
             <div className='w-full justify-center'>
                <img src={appWriteService.getFilePreview(featuredImage)} alt={title}  className="w-full h-auto max-w-[500px] max-h-[500px] object-cover rounded-xl"/>
             </div>
             <h2
            className='text-xl font-bold'
            >{title}</h2>
                
             </div>

        </Link>
        
    )
}

export default PostCard
