import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import StatusPage from "./StatusPage";
import Projects from "./Projects";
import User from "./User";
import Tasks from "./Tasks";
import Cms from "./Cms";
import LiveChat from "./LiveChat";

// import User from "./User";
function Dashboard() {
  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">
        
        <Sidebar />

        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={ <StatusPage /> } />
            <Route path="/projects" element={ <Projects /> } />
            <Route path="/user" element={<User />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/cms" element={<Cms />} />
            <Route path="/livechat" element={<LiveChat />} />
          </Routes>
        </main>
        
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
