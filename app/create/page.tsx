
'use client';
import React, { useState } from 'react';
import Container from "../components/Container";
import Button from '../components/Button';

export default function Home() {
    // State declarations
    const [value, setValue] = useState('');
    const [placeholder] = useState('Enter your text here...');
    const [selectedVoice, setSelectedVoice] = useState('male');
    const [pitch, setPitch] = useState(100);
    const [speed, setSpeed] = useState(100);
    const [useEmotion, setUseEmotion] = useState(false);
    const [audioFile, setAudioFile] = useState<File | null>(null);

    // Event handlers
    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    const handleVoiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedVoice(e.target.value);
    };

    const onPitchChange = (newPitch: number) => {
        setPitch(newPitch);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setAudioFile(file);
        }
    };

    const onEmotionToggle = () => {
        setUseEmotion(!useEmotion);
    };

    const onSpeedChange = (newSpeed: number) => {
        setSpeed(newSpeed);
    };

    const onGenerate = () => {
        // Implement audio generation logic
        console.log('Generating audio with:', {
            value,
            selectedVoice,
            pitch,
            speed,
            useEmotion,
            audioFile
        });
    };

    const onSave = () => {
        // Implement save as MP3 logic
        console.log('Saving as MP3');
    };

    return (
        <Container>
            {/* Hero Section */}
                <section className="text-center mb-16 mt-30">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        Create Your<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300"> Voice </span>Sample
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Revolutionizing text-to-speech with AI-powered voice cloning technology for natural, personalized audio experiences.
                    </p>
                </section>
            {/* Main Content Area */}
            <main className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800  mt-20 md:px-40 md:py-10 px-6 py-6 space-y-6 md:rounded-4xl rounded-xl">
                {/* Text Input Section */}
                <section className="space-y-2">
                    <label className="block text-neutral-600 dark:text-neutral-400">
                        Text to Convert
                    </label>
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className="w-full min-h-32 p-4 border font-light border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-white"
                    />
                </section>

                {/* Voice Settings Section */}
                <section className="space-y-4">
                    <div className="flex flex-col gap-4">
                        {/* Voice Selection */}
                        <div className="flex-1">
                            <label className="block text-neutral-600 dark:text-neutral-400 mb-1">
                                Voice Source
                            </label>
                            <select
                                value={selectedVoice}
                                onChange={handleVoiceChange}
                                className="w-full p-3 border border-neutral-200 dark:border-neutral-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-transparent outline-none bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-white"
                            >
                                <option value="clone">Clone from Audio</option>
                                <option value="male">Male Voice</option>
                                <option value="female">Female Voice</option>
                            </select>
                        </div>

                        {/* Pitch Control */}
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

                    {/* Audio Upload (Conditional) */}
                    {selectedVoice === 'clone' && (
                        <div className='border border-dashed border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 duration-300 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/50'>
                            <label className="block text-neutral-600 dark:text-neutral-400 mb-3">
                                Upload 15s Sample
                            </label>
                            <input
                                type="file"
                                accept="audio/*"
                                onChange={handleFileChange}
                                className="block w-full text-neutral-600 dark:text-neutral-300
                    file:mr-4 file:py-2.5 file:px-5
                    file:rounded-xl file:border-0
                    file:font-medium
                    file:bg-indigo-600 file:text-white
                    hover:file:bg-indigo-700
                    focus:file:outline-none focus:file:ring-1 focus:file:ring-indigo-500"
                            />
                        </div>
                    )}
                </section>

                {/* Advanced Settings Section */}
                <section className="space-y-4 p-4 border bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 rounded-xl">
                    <h3 className="text-neutral-600 dark:text-neutral-400">Advanced</h3>

                    <div className="flex flex-col gap-4">
                        {/* Emotion Toggle */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="emotion-toggle"
                                checked={useEmotion}
                                onChange={onEmotionToggle}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 dark:border-neutral-600 rounded bg-white dark:bg-neutral-800"
                            />
                            <label htmlFor="emotion-toggle" className="ml-2 block text-neutral-700 dark:text-neutral-300">
                                Add Emotion
                            </label>
                        </div>

                        {/* Speed Control */}
                        <div className="flex-1">
                            <label className="block text-neutral-700 dark:text-neutral-300 mb-1">
                                Speed: {speed}%
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="200"
                                value={speed}
                                onChange={(e) => onSpeedChange(Number(e.target.value))}
                                className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="space-y-4">
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
                </section>
            </main>

            {/* FAQ CTA */}
            <section className='text-center py-12 px-4 mt-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl'>
                <h2 className='text-3xl font-bold text-neutral-900 dark:text-white mb-6'>
                    Need Immediate Help?
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-6'>
                    Check our FAQ section for quick answers to common questions.
                </p>
                <Button>Visit Help Center</Button>
            </section>
        </Container>
    );
}