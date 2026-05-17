import { Outlet } from "react-router-dom";
// import FormDashboard from "../../components/ui/formDashboard/FormDashboard";
// import TableDashbooard from "../../components/ui/tableDashbooard/tableDashbooard";


const User = () => {
  return (
    <section className="py-4">
      {/* <FormDashboard /> */}
      {/* <TableDashbooard /> */ }
      <Outlet/>
    </section>
  );
};

export default User;

