import css from "./Feedback.module.css";
import clsx from "clsx";

const Feedback = ({ options, totalFeedback, goodPercent }) => {
  const goodPercentStyle = (percent) => {
    if (percent >= 95) {
      return { color: "lime", emoji: "😉🙂😊😄😃" };
    } else if (percent >= 85) {
      return { color: "limegreen", emoji: "😊😉🙂😄" };
    } else if (percent >= 75) {
      return { color: "mediumseagreen", emoji: "😊😉🙂" };
    } else if (percent >= 65) {
      return { color: "green", emoji: "😊😉" };
    } else if (percent >= 51) {
      return { color: "olivedrab", emoji: "😊" };
    } else if ((percent < 51) & (percent > 49)) {
      return { color: "grey", emoji: "😐" };
    } else if (percent >= 45) {
      return { color: "tomato", emoji: "😔" };
    } else if (percent >= 35) {
      return { color: "indianred", emoji: "😔😕" };
    } else if (percent >= 25) {
      return { color: "crimson", emoji: "😔😕🙁" };
    } else if (percent >= 15) {
      return { color: "firebrick", emoji: "😔😕🙁😥" };
    } else if (percent >= 5) {
      return { color: "red", emoji: "😔😕🙁😥😭" };
    }
    return { color: "red", emoji: "😔😕🙁😥😭🥵" };
  };

  const { color, emoji } = goodPercentStyle(goodPercent);
  return (
    <div className={css.feedback}>
      {Object.keys(options).map((key) => (
        <p className={clsx(css["p-feedback"], css[key])} key={key}>
          {key}: {options[key]}
        </p>
      ))}
      <p className={css["p-feedback"]}>Total: {totalFeedback}</p>
      <p className={css["p-feedback"]} style={{ color }}>
        Positive: {goodPercent}% {emoji}
      </p>
    </div>
  );
};

export default Feedback;
