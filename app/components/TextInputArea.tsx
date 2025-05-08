import React from 'react';

interface TextInputAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextInputArea: React.FC<TextInputAreaProps> = ({
  value,
  onChange,
  placeholder = "Enter text to convert..."
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm text-neutral-400">
        Text to Convert
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full h-32 p-4 border text-sm font-light border-neutral-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none bg-neutral-900 text-white"
      />
    </div>
  );
};