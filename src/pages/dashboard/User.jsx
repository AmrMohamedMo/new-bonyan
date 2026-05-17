import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <section className="py-4">
      <Outlet />
    </section>
  );
};

export default User;

