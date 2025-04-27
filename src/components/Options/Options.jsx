import { useState } from "react";
import css from "./Options.module.css";

const Options = ({ options, updateFeedback, totalFeedback, reset }) => {
  const [hovered, setHovered] = useState(null);
  const icons = {
    good: "😃",
    neutral: "😐",
    bad: "😥",
    reset: "🗑",
  };
  return (
    <div className={css["btn-wrap"]}>
      {Object.keys(options).map((key) => (
        <div key={key} className={css["btn-container"]}>
          <button
            onClick={() => updateFeedback(key)}
            className={css["btn-option"]}
            onMouseEnter={() => setHovered(key)}
            onMouseLeave={() => setHovered(null)}
          >
            {key}
          </button>
          {hovered === key && <div className={css["icon"]}>{icons[key]}</div>}
        </div>
      ))}
      {totalFeedback > 0 && (
        <div className={css["btn-container"]}>
          <button
            onClick={reset}
            className={css["btn-option"]}
            onMouseEnter={() => setHovered("reset")}
            onMouseLeave={() => setHovered(null)}
          >
            Reset
          </button>
          {hovered === "reset" && (
            <div className={`${css["reset"]} ${css["icon"]}`}>
              {icons.reset}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Options;
