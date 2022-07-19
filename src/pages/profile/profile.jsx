import Footer from "../../components/footer/Footer";
import ProfileBody from "../../components/ProfileBody";
import Layout from "../../components/Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchConversations } from "../../features/conversation/conversationSlice";

export default function Profile() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchConversations());
  },[])
  return (
    <Layout>
      <ProfileBody />
      <Footer />
    </Layout>
  );
}
