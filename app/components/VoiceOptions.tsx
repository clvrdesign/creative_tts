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
      <div className="flex flex-col gap-4">
        <div className="flex-1">
          <label className="block text-sm text-neutral-500 mb-1">
            Voice Source
          </label>
          <select
            onChange={(e) => onVoiceChange(e.target.value)}
            className="w-full p-3 border border-neutral-800 text-sm rounded-xl focus:ring ring-indigo-600 duration-300 bg-neutral-900 text-white"
          >
            <option value="clone">Clone from Audio</option>
            <option value="male">Male Voice</option>
            <option value="female">Female Voice</option>
          </select>
        </div>

        <div className="flex-1">
          <label className="block text-sm text-white mb-1">
            Pitch: {pitch}%
          </label>
          <input
            type="range"
            min="50"
            max="150"
            value={pitch}
            onChange={(e) => onPitchChange(Number(e.target.value))}
            className="w-full h-2 bg-neutral-700 focus:bg-indigo-600 duration-300 accent-indigo-600 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      <div className='border-dashed border-[1px] border-neutral-700 hover:border-indigo-600 duration-300 p-4 rounded-xl'>
        <label className="block text-sm text-neutral-400 mb-6">
          Upload 15s Sample
        </label>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-neutral-500
            file:mr-4 file:py-3 file:px-6
            file:rounded-xl file:border-0
            file:text-sm cursor-pointer
            file:bg-indigo-600 file:text-white
            hover:file:bg-indigo-700"
        />
      </div>
    </div>
  );
};