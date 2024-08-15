import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const TestModal = ({ visible, onClose }) => {
  const [difficulty, setDifficulty] = useState('');
  const [subject, setSubject] = useState('');

  return (
    <Modal
      title="Select Test Details"
      visible={visible}
      onCancel={onClose}
      footer={[
        <button key="cancel" onClick={onClose} className="border text-[#404660] px-4 py-2 rounded mr-2">
          Cancel
        </button>,
        <Link 
          key="startTest" 
          to="/quiz" 
          onClick={onClose} 
          className={`bg-[#9835ff] text-white px-4 py-2 rounded ${!difficulty || !subject ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Start Test
        </Link>
      ]}
    >
      <div className="mb-4">
        <Select
          placeholder="Select Level"
          onChange={setDifficulty}
          style={{ width: '100%' }}
        >
          <Option value="easy">Olevel</Option>
          <Option value="medium">Alevel</Option>
          <Option value="hard">University</Option>
          <Option value="freelance">Freelance</Option>
        </Select>
      </div>
      <div className="mb-4">
        <Select
          placeholder="Select Subject"
          onChange={setSubject}
          style={{ width: '100%' }}
        >
          <Option value="physics">Physics</Option>
          <Option value="chemistry">Chemistry</Option>
          <Option value="biology">Biology</Option>
          <Option value="computer_science">Computer Science</Option>
        </Select>
      </div>
    </Modal>
  );
};

export default TestModal;
