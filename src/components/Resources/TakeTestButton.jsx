// src/components/TakeTestButton.jsx
import React, { useState } from 'react';
import TestModal from './TestModal';

const TakeTestButton = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <div className="mt-5">
      <button 
        className="px-4 py-2 bg-[#9835ff] text-white rounded hover:translate-y-[-5px] duration-300"
        onClick={openModal}
      >
        Take Test
      </button>
      {modalVisible && <TestModal visible={modalVisible} onClose={closeModal} />}
    </div>
  );
};

export default TakeTestButton;
