import React from 'react';

interface ActionButtonsProps {
  onGenerate: () => void;
  onSave: () => void;
  onPlayOriginal?: () => void;
  onPlayCloned?: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGenerate,
  onSave,
  onPlayOriginal,
  onPlayCloned
}) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={onGenerate}
          className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
        >
          Generate Audio
        </button>
        <button
          onClick={onSave}
          className="flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-md transition-colors"
        >
          Save as MP3
        </button>
      </div>

      {(onPlayOriginal || onPlayCloned) && (
        <div className="flex gap-4">
          {onPlayOriginal && (
            <button
              onClick={onPlayOriginal}
              className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
            >
              <span>▶</span> Play Original
            </button>
          )}
          {onPlayCloned && (
            <button
              onClick={onPlayCloned}
              className="flex-1 px-4 py-2 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
            >
              <span>▶</span> Play Cloned
            </button>
          )}
        </div>
      )}
    </div>
  );
};