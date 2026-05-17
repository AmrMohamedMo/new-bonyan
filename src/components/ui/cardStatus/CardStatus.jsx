import styles from './CardStatus.module.css';

const CardStatus = ( { title, counter, icon } ) => {
  return (
    <>

      <div className={ `d-flex justify-content-between align-items-center rounded p-4 ${ styles.cardStatus }` }>

        <div className={ `${ styles.icon }` }>
          <i className={ icon }></i>
        </div>

        <div className={ `${ styles.info } info fw-bold` }>
          <p className={ `${ styles.counter }` }>{ counter }</p>
          <p className={ `${ styles.title }` }>{ title }</p>
        </div>

      </div>
    </>
  );
};

export default CardStatus;
