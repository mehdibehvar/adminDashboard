import { useRef } from "react";
import { useDispatch } from "react-redux";
import { replayConversation } from "../../features/conversation/conversationSlice";
export default function Conversation({conversation}) {
    const replayRef=useRef();
    const dispatch=useDispatch();
    const {message,name,image,id}=conversation;
    const handleHover=()=>{
        replayRef.current.classList.add("shadow-sm")
    }
    const handleMouseLeave=()=>{
        replayRef.current.classList.remove("shadow-sm")
    }
    const handleReplay=()=>{
        dispatch(replayConversation(id))
    }
  return (
    <li className="list-group-item border-0 d-flex align-items-center px-0 mb-2 pt-0">
            <div className="avatar me-3">
              <img src={`${image}`} alt="kal" className="border-radius-lg shadow"/>
            </div>
            <div className="d-flex align-items-start flex-column justify-content-center">
              <h6 className="mb-0 text-sm">{name}</h6>
              <p className="mb-0 text-xs">{message}</p>
            </div>
        <button 
         onClick={handleReplay}
        ref={replayRef} 
        onMouseOver={handleHover} 
        onMouseLeave={handleMouseLeave} 
        className="btn btn-link pe-2 ps-1 mb-0 ms-auto w-25 w-md-auto text-center"
        data-bs-toggle="modal"
         data-bs-target="#conversationModal"
        > Reply</button>
    </li>
  )
}
