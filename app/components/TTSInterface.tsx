'use client';

import React, { useState } from 'react';
import { TextInputArea } from './TextInputArea';
import { VoiceOptions } from './VoiceOptions';
import { AdvancedControls } from './AdvancedControls';
import { ActionButtons } from './ActionButtons';


export const TTSInterface = () => {
  const [text, setText] = useState('Hello world! Clone my voice from the sample below.');
  const [pitch, setPitch] = useState(70);
  const [speed, setSpeed] = useState(60);
  const [useEmotion, setUseEmotion] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  const handleGenerate = () => {
    console.log('Generating audio...');
    // Implementation would go here
  };

  const handleSave = () => {
    console.log('Saving audio...');
    // Implementation would go here
  };

  const handlePlayOriginal = () => {
    console.log('Playing original...');
    // Implementation would go here
  };

  const handlePlayCloned = () => {
    console.log('Playing cloned...');
    // Implementation would go here
  };

  return (
    <div className="max-w-4xl mx-auto md:px-10 md:py-20 space-y-6 md:bg-neutral-900 md:border bg-neutral-950 border-neutral-800 border-0 md:rounded-4xl rounded-xl shadow-lg">
      <TextInputArea value={text} onChange={setText} />
      
      <VoiceOptions
        pitch={pitch}
        onPitchChange={setPitch}
        onVoiceChange={(voice) => console.log('Voice selected:', voice)}
        onFileUpload={setAudioFile}
      />
      
      <AdvancedControls
        speed={speed}
        onSpeedChange={setSpeed}
        useEmotion={useEmotion}
        onEmotionToggle={() => setUseEmotion(!useEmotion)}
      />
      
      <ActionButtons
        onGenerate={handleGenerate}
        onSave={handleSave}
      />
    </div>
  );
};