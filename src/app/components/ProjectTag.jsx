import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? 'text-[#231942] border-[#f45b6a]'
    : 'text-[#231942] border-[#231942] hover:border-[#f45b6a]';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
