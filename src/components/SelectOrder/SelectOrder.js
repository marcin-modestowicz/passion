import React from "react";

import { SORT_ORDER } from "../../constants/posts";

const SelectOrder = ({onOrderChange}) => (
  <div>
    <label htmlFor="select-order">Sort by:</label>
    <select id="select-order" onChange={event => onOrderChange(event.target.value)}>
      {Object.values(SORT_ORDER).map(value => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
  </div>
);

export default SelectOrder;
