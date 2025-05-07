import React from 'react';

interface VoiceOptionsProps {
  pitch: number;
  onPitchChange: (value: number) => void;
  onVoiceChange: (value: string) => void;
  onFileUpload: (file: File) => void;
}

export const VoiceOptions: React.FC<VoiceOptionsProps> = ({
  pitch,
  onPitchChange,
  onVoiceChange,
  onFileUpload
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-neutral-700 dark:text-gray-300 mb-1">
            Voice Source
          </label>
          <select
            onChange={(e) => onVoiceChange(e.target.value)}
            className="w-full p-2 border border-neutral-700 rounded-md text-white"
          >
            <option value="clone">Clone from Audio</option>
            <option value="male">Male Voice</option>
            <option value="female">Female Voice</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Pitch: {pitch}%
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={pitch}
            onChange={(e) => onPitchChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Upload 15s Sample
        </label>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100
            dark:file:bg-indigo-900 dark:file:text-indigo-100"
        />
      </div>
    </div>
  );
};