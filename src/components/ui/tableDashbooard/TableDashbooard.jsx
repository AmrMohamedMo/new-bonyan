import { Link } from "react-router-dom";

const TableDashbooard = ( { selectedMenu } ) => {
  const titleMap = {
    user: "Users",
    projects: "Projects",
    developer: "Developers",
    cms: "CMS",
    livechat: "Live Chat",
    "/": "Status",
  };

  const title = titleMap[ selectedMenu ] || "Users";

  return (
    <div className="container">

      <div className="header d-flex justify-content-between mb-3">

        <h3>{ title }</h3>

        <Link to={ `add` } className={ `btn btn-primary` }>Add { title }</Link>

      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>John</td>
            <td>Doe</td>
            <td>@social</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default TableDashbooard;
