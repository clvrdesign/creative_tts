import React from 'react';

interface ActionButtonsProps {
  onGenerate: () => void;
  onSave: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGenerate,
  onSave,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex md:flex-row flex-col gap-4">
        <button
          onClick={onGenerate}
          className="flex-1 px-4 py-3 cursor-pointer text-sm font-regular text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
        >
          Generate Audio
        </button>
        <button
          onClick={onSave}
          className="flex-1 px-4 py-3 cursor-pointer text-sm font-regular text-white bg-neutral-800 rounded-xl bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20"
        >
          Save as MP3
        </button>
      </div>
    </div>
  );
};