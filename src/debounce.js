import React from 'react'
import { useState } from 'react'

export default function Debounce() {
    const [inputValue, setInputValue] = useState("")
    
    const myDebounce = (cb, d) => {
        let timer;
        return function (...args) {
            if (timer) clearTimeout(timer);
        timer=setTimeout(() => {
            cb(...args)
        }, d);
      }
    }
    const handleChange = myDebounce((e) => {
        setInputValue(e.target.value)
    },1000)
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
       
          
          <h1>Debounce </h1>
          <input type={'text'} placeholder="input"  onChange={handleChange} />
          <div>
             <h4>{ inputValue}</h4>
         </div>
    </div>
  )
}
