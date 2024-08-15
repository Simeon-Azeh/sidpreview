import React from 'react';

const CustomRadioButton = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="justify-between flex-row-reverse border-l-8 border-[#9835ff] mb-2 bg-white p-4 flex cursor-pointer rounded-sm">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-4 h-4 inline-block mr-2 rounded-full border-2 border-[#9835ff] ${checked ? 'bg-[#9835ff]' : 'bg-white'
          }`}
      ></span>
      {label}
    </label>
  );
};

export default CustomRadioButton;
