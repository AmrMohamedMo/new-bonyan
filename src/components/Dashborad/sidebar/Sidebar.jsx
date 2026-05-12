import { NavLink } from "react-router-dom";
import Styles from "./Sidebar.module.css";
const Sidebar = () => {
  const links = [
    {
      icon: "fa-chart-line",
      title: "Status",
      path:"/"
    },
    {
      icon: "fa-users",
      title: "User Management",
      path:"user"
    },
    {
      icon: "fa-building",
      title: "Projects Management",
      path:"projects"
    },
    {
      icon: "fa-building",
      title: "Tasks Management",
      path: "tasks"
    },
    {
      icon: "fa-globe",
      title: "CMS",
      path: "cms"
    },
    {
      icon: "fa-message",
      title: "Live Chat",
      path: "livechat"
    },
  ];

  return (
    <aside className={ `min-vh-100 py-4 ${ Styles.sidebar }` }>
      <div className={ `px-4 fw-semibold fs-4 ${ Styles.logo }` }>Dashboard</div>
      <nav className="">

        {
          links.map( ( link, index ) => (
            <NavLink to={link.path} className={ `py-4 px-3 d-flex align-items-center ${ Styles.navItem }` } key={ index }>
              <i className={ `fa-solid ${ link.icon } ${ Styles.icon }` }></i>
              <span className={ Styles.linktitle }>{ link.title }</span>
            </NavLink>
          ) )
        }

      </nav>
    </aside>
  );
};

export default Sidebar;
