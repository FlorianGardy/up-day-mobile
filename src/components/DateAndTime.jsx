import React from "react";
import PropTypes from "prop-types";
import DatePicker, { registerLocale } from "react-datepicker";
import fr from "date-fns/locale/fr"; // the locale you want
import "./datepicker.css";
registerLocale("fr", fr); // register it with the name you want

const DateAndTime = ({ date, handleChange }) => {
  return (
    <div>
      <DatePicker
        selected={date}
        onChange={handleChange}
        showTimeSelect
        className="center-text-datepicker"
        locale="fr"
        timeFormat="HH:mm"
        dateFormat="dd MMMM yyyy à HH:mm"
        withPortal
        tetherConstraints={[]}
      />
    </div>
  );
};

DateAndTime.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default DateAndTime;
