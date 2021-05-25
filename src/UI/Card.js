import classes from './Card.module.css';

const Card = (props) => {
  return (
    <section className={`${props.className} ${classes.card} card`}>
      {props.children}
    </section>
  );
};

export default Card;
