import { useState } from "react";
import Footer from "../../components/Dashborad/Footer/Footer";
import Navbar from "../../components/Dashborad/Navbar/Navbar";
import Sidebar from "../../components/Dashborad/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import StatusPage from "./StatusPage";
import Projects from "./Projects";
import User from "./User";
import Developer from "./Developer";
import Cms from "./Cms";
import LiveChat from "./LiveChat";
import TableDashbooard from "../../components/ui/tableDashbooard/tableDashbooard";
import FormDashboard from "../../components/ui/formDashboard/FormDashboard";

// import User from "./User";
function Dashboard () {
  const [ sidebarValue, setSidebarValue ] = useState( "user" );

  const handleSidebarSelect = ( value ) => {
    setSidebarValue( value );
  };

  return (
    <>
      <Navbar adminName="mohamed" />

      <div className="d-flex">

        <Sidebar onSelect={ handleSidebarSelect } />

        <main className="flex-grow-1">
          <Routes>

            <Route path="/" element={ <StatusPage /> } />


            <Route path="/user" element={ <User /> } >
              <Route index element={ <TableDashbooard selectedMenu={ sidebarValue } /> } />
              <Route path="add" element={ <FormDashboard /> } />
            </Route>

            <Route path="/projects" element={ <Projects /> } >
              <Route index element={ <TableDashbooard selectedMenu={ sidebarValue } /> } />
              <Route path="add" element={ <FormDashboard /> } />
            </Route>

            <Route path="/developer" element={ <Developer /> } >
              <Route index element={ <TableDashbooard selectedMenu={ sidebarValue } /> } />
              <Route path="add" element={ <FormDashboard /> } />
            </Route>


            <Route path="/cms" element={ <Cms /> } />
            <Route path="/livechat" element={ <LiveChat /> } />
          </Routes>
        </main>

      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
