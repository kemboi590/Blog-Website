import React from 'react'
import './blogs.css'
import blogData from './blogData'
import summaryData from './summarydata'

function Blogs() {
  return (
      <div className='containBlogs'>
          
          <div className="mapBlog">
          {blogData.map(({ title, content }) => {
                return (
                    <div className="blog">
                        <h2 className="title" >{title}</h2>
                        <p className="content">{content}</p>
                    </div>
                )
          })} 
        </div>

          <div className="shortSummary">
              
              <div className="summaryItems">
                  <h2 className='sammary-title'>Summary of my blogs</h2>
                  {summaryData.map(({ summary }) => { 
                        return (
                            <div className="summaryItem">
                                <p className="summary">{summary}</p>
                            </div>
                        )
                  })}
             </div>
              
        </div>

          
       
          
    </div>
  )
}

export default Blogs