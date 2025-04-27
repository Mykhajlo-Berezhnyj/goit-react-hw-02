import css from "./Description.module.css";
import { FaCoffee } from "react-icons/fa";

const Description = () => {
  return (
    <div>
      <h2 className={css.h2}>Sip Happens Café</h2>
      <FaCoffee className={css.logo} size={40} />
      <p className={css.p}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};

export default Description;
