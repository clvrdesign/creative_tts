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
      <label className="block text-neutral-600 dark:text-neutral-400">
        Text to Convert
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-32 p-4 border font-light border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-white"
      />
    </div>
  );
};