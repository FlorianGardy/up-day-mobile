import React from "react";
import PropTypes from "prop-types";
import styles from "./ContextSelector.module.css";

const ContextSelector = ({ options, onChange, context }) => {
  return (
    <div>
      {options.map((option, i) => {
        return (
          <div key={i} style={{ margin: "2px" }}>
            <label className={styles.switch}>
              <input
                type="checkbox"
                checked={context.checked}
                onChange={e => onChange(option.label, e.target.checked)}
              />
              <span className={[styles.slider, styles.round].join(" ")} />
            </label>
            {option.label}
          </div>
        );
      })}
    </div>
  );
};

ContextSelector.propTypes = {
  options: PropTypes.array.isRequired,
  activeOption: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ContextSelector;
