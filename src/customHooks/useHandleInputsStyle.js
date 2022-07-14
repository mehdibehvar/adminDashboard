const handleStyle=(e,inputRef)=>{
    const name=e.target.name;
    if(name==="email"){
      inputRef.current.classList.add("is-filled");
     }
    if(name==="fullName"){
      inputRef.current.classList.add("is-filled");
     }
  
     if(name==="password"){
      inputRef.current.classList.add("is-filled");
     }

}
export default handleStyle;