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
    <div className="space-y-4 p-4 border border-neutral-800 rounded-xl">
      <h3 className="text-sm text-neutral-500">Advanced</h3>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="emotion-toggle"
            checked={useEmotion}
            onChange={onEmotionToggle}
            className="h-4 w-4 accent-indigo-600 text-indigo-600 focus:ring-indigo-500 border-neutral-300 rounded"
          />
          <label htmlFor="emotion-toggle" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
            Add Emotion
          </label>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">
            Speed: {speed}%
          </label>
          <input
            type="range"
            min="50"
            max="200"
            value={speed}
            onChange={(e) => onSpeedChange(Number(e.target.value))}
            className="w-full h-2 bg-neutral-700 focus:bg-indigo-600 duration-300 accent-indigo-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};