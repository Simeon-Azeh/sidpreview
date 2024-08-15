import React from 'react';
import { FaCheck } from 'react-icons/fa';

const CustomCheckbox = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="justify-between flex-row-reverse border-l-8 border-[#9835ff] mb-2 bg-white p-4 flex cursor-pointer rounded-sm">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded mr-2 border-2 border-[#9835ff] flex items-center justify-center ${checked ? 'bg-[#9835ff]' : 'bg-white'
          }`}
      >
        {checked && <FaCheck className="text-white" />}
      </span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
