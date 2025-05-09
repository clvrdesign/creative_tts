'use client';

import React from 'react';
import { useState } from 'react';

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
  const [selectedVoice, setSelectedVoice] = useState('clone');

  const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedVoice(value);
    onVoiceChange(value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <label className="block  text-neutral-600 dark:text-neutral-400 mb-1">
            Voice Source
          </label>
          <select
            value={selectedVoice}
            onChange={handleVoiceChange}
            className="w-full p-3 border border-neutral-200 dark:border-neutral-800  rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-white"
          >
            <option value="clone">Clone from Audio</option>
            <option value="male">Male Voice</option>
            <option value="female">Female Voice</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-neutral-600 dark:text-neutral-400 mb-1">
            Pitch: {pitch}%
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={pitch}
            onChange={(e) => onPitchChange(Number(e.target.value))}
            className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Upload 15s Sample - Show only when clone is selected */}
      {selectedVoice === 'clone' && (
        <div className='border border-dashed border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 duration-300 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50'>
          <label className="block text-neutral-600 dark:text-neutral-400 mb-3">
            Upload 15s Sample
          </label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="block w-full  text-neutral-600 dark:text-neutral-300
            file:mr-4 file:py-2.5 file:px-5
            file:rounded-xl file:border-0
            file: file:font-medium
            file:bg-indigo-600 file:text-white
            hover:file:bg-indigo-700
            focus:file:outline-none focus:file:ring-1 focus:file:ring-indigo-500"
          />
        </div>
      )}
    </div>
  );
};