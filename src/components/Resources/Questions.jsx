import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CustomRadioButton from './CustomRadioButton';
import CustomCheckbox from './CustomCheckbox';

const Question = ({ question, onAnswerChange, answer }) => {
  const handleInputChange = (e) => {
    onAnswerChange(question.id, e.target.value);
  };

  const handleCheckboxChange = (option) => {
    const newAnswer = answer ? [...answer] : [];
    if (newAnswer.includes(option)) {
      onAnswerChange(question.id, newAnswer.filter((item) => item !== option));
    } else {
      onAnswerChange(question.id, [...newAnswer, option]);
    }
  };

  const handleRatingChange = (rating) => {
    onAnswerChange(question.id, rating);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium mb-4 text-[#404660]">{question.question}</h2>
      {question.type === "text" && (
        <input
          type="text"
          value={answer || ''}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
        />
      )}
      {question.type === "multiple" && (
        <div>
          {question.options.map((option, index) => (
            <CustomRadioButton
              key={index}
              name={`question-${question.id}`}
              value={option}
              checked={answer === option}
              onChange={() => handleInputChange({ target: { value: option } })}
              label={option}
            />
          ))}
        </div>
      )}
      {question.type === "essay" && (
        <ReactQuill
          value={answer || ''}
          onChange={(content) => onAnswerChange(question.id, content)}
          className="bg-white"
        />
      )}
      {question.type === "checkbox" && (
        <div>
          {question.options.map((option, index) => (
            <CustomCheckbox
              key={index}
              name={`question-${question.id}-${index}`}
              value={option}
              checked={answer?.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              label={option}
            />
          ))}
        </div>
      )}
      {question.type === "rating" && (
        <div>
          {question.options.map((rating) => (
            <button
              key={rating}
              className={`mr-2 ${answer === rating ? 'bg-[#9835ff] text-white shadow-md' : 'bg-white border'} px-4 py-2 rounded`}
              onClick={() => handleRatingChange(rating)}
            >
              {rating}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question;
