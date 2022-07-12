import React, { useState } from 'react'

const Folder = ({ explorer }) => {
    const [isClicked,setIsClicked]=useState(false)
  return (
      <div style={{cursor:'pointer',color: 'yellow'}}>
         
          <span onClick={() => { setIsClicked(!isClicked) }}>{explorer.isFolder &&isClicked&&'⬇️' } {explorer.isFolder &&!isClicked&&'➡️' }{explorer.isFolder?'🗂':'📄'} {explorer.name}</span> 

          {isClicked && <div style={{ paddingLeft: '10px', cursor: 'pointer' }}>
       
              {Array.isArray(explorer.item)&& explorer.item.map(e => {
                  return  <Folder key={e.name} explorer={e} />
              })}
          </div>} 
        
         
        
</div>
  )
}

export default Folder


