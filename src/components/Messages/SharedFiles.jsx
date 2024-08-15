import React from 'react';
import { FaFilePdf, FaFileWord, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';

const files = [
  { name: 'Document1.pdf', icon: <FaFilePdf size={20} className='text-red-500' /> },
  { name: 'Presentation.pptx', icon: <FaFilePowerpoint size={20} className='text-yellow-500' /> },
  { name: 'Spreadsheet.xlsx', icon: <FaFileExcel size={20} className='text-green-500' /> },
  { name: 'Report.docx', icon: <FaFileWord size={20} className='text-blue-500' /> }
];

const SharedFiles = () => (
  <div className="">
    <h2 className="text-xl font-medium text-[#404660] mb-2">Shared Files</h2>
    <div className="flex flex-col gap-6 mb-6">
      {files.map((file, index) => (
        <div key={index} className="flex items-center gap-2 border p-2 rounded">
          {file.icon}
          <span className="text-[#404660]">{file.name}</span>
        </div>
      ))}
    </div>
    <button className="border border-[#9835ff] text-[#9835ff] rounded px-4 py-2 flex w-full items-center justify-center font-medium hover:translate-y-[-5px] duration-300">View All</button>
  </div>
);

export default SharedFiles;
