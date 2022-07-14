import { useSelector } from "react-redux"
import Cart from "./Cart";
export default function BillingCart() {
  const {cards}=useSelector(state=>state.cards);
  return (<>
  {cards?cards.map(cart=><Cart key={cart.id} cart={cart}/>):null}
  </>
  )
}
