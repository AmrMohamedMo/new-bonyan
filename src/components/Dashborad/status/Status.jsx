import CardStatus from "../../ui/cardStatus/CardStatus"
import styles from './Status.module.css';
const description = [
  {
    counter: 120,
    title: "Projects",
    icon: "fa-brands fa-atlassian"
  },
  {
    counter: 110,
    title: "Users",
    icon: "fa-solid fa-users"
  },
  {
    counter: 220,
    title: "Developers",
    icon: "fa-brands fa-github-alt"
  },
  {
    counter: 30,
    title: "Blogs",
    icon: "fa-brands fa-blogger"
  },
];

const Status = () => {
  return (
    <section className="container my-5">
      <div className="row">

        { description.map( ( e ) => (
          <div className="col-12 col-md-3 ">
            <CardStatus counter={ e.counter } title={ e.title } icon={ e.icon } />
          </div>
        ) ) }


      </div>
    </section>
  );
};

export default Status




