import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectAllConversations, selectConvById, sendReplay } from "../../features/conversation/conversationSlice"
import Conversation from "./conversation";
export default function Conversations() {
  const conversations=useSelector(selectAllConversations);
  const {replayTo}=useSelector(state=>state.conversations);
  const conv=useSelector(state=>selectConvById(state,replayTo));
 const [text, setText] = useState();
 const dispatch=useDispatch()
 const handleSendReplay=()=>{
   dispatch(sendReplay({id:replayTo,text}))
 }
const conversationList=conversations.map(conv=><Conversation key={conv.id} conversation={conv}/>)
  return (
    <div className="col-12 col-xl-4">
    <div className="card card-plain h-100">
      <div className="card-header pb-0 p-3">
        <h6 className="mb-0">Conversations</h6>
      </div>
      <div className="card-body p-3">
        <ul className="list-group">
          {conversationList}
        </ul>
      </div>
    </div>
{/* <!-- Modal --> */}
<div className="modal fade" id="conversationModal" tabIndex="-1" aria-labelledby="conversationModalLabe" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="conversationModalLabe">replay to:{conv?conv.name:null}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    <textarea
    onChange={(e)=>setText(e.target.value)}
    value={text}
     className="w-100 border-0 p-1" placeholder="type here"></textarea>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button 
        data-bs-dismiss="modal"
        onClick={handleSendReplay}
        type="button" className="btn btn-primary">send Replay</button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}
