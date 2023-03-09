import React, { useState } from "react";

function DropdownMenu(props) {
  const [selectedOption, setSelectedOption] = useState(props.options[0]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    const selectedObject = props.options.find((option) => option.id === parseInt(event.target.value));
    props.onDropdownChange(selectedObject);
  };

  return (
    <div>
      <select id="options" value={selectedOption} onChange={handleChange}>
        {props.options.map((option) => (
          <option key={option.id} value={option.id} onChange={handleChange}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropdownMenu;
