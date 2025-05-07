import React from 'react';

interface AdvancedControlsProps {
  speed: number;
  onSpeedChange: (value: number) => void;
  useEmotion: boolean;
  onEmotionToggle: () => void;
}

export const AdvancedControls: React.FC<AdvancedControlsProps> = ({
  speed,
  onSpeedChange,
  useEmotion,
  onEmotionToggle
}) => {
  return (
    <div className="space-y-4 p-4 border border-gray-700 rounded-xl">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">ADVANCED</h3>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="emotion-toggle"
            checked={useEmotion}
            onChange={onEmotionToggle}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="emotion-toggle" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
            Add Emotion
          </label>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Speed: {speed}%
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};