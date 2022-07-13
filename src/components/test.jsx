import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function Test() {
  const [files,setFiles]=useState();
  const handleOnchange=(e)=>{
setFiles(e.target.files)
  };

  const handleSubmit=(e)=>{
          e.preventDefault();

        const data = new FormData();

        for(let i = 0; i < files.length; i++) {
            data.append('file', files[i]);
        }

        axios.post('//localhost:8000/upload', data)
            .then((response) => {
          console.log(response);
                // onSuccess(response.data)
            })
            .catch((e) => {
           console.log("error");
            })
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <input type={"file"} onChange={e=>handleOnchange(e)}/>
      <button type='submit'>submit</button>
    </form>
  )
}
