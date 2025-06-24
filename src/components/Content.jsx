import "@/app/sidebar.css";
import Sidebar from "@/components/Sidebar"
import SpotifySection from "@/components/MovieSection"
import Header from "@/components/Layout/Header"
const Content = () => {
  return (
    <div className = "flex h-screen">
      <Sidebar/>
    </div>
  );
};

export default Content;