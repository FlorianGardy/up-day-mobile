import React from "react";
import PropTypes from "prop-types";
import styles from "./ContextSelector.module.css";

const ContextSelector = ({ options, onChange, context, title }) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {options.map((option, i) => {
          return (
            <div key={i} style={{ margin: "2px" }}>
              <label className={styles.switch}>
                <input
                  type="checkbox"
                  checked={context.includes(option)}
                  onChange={e => onChange(option, e.target.checked)}
                />
                <span className={[styles.slider, styles.round].join(" ")} />
              </label>
              {option}
            </div>
          );
        })}
      </div>
    </>
  );
};

ContextSelector.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  context: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ContextSelector;
