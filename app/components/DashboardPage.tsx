'use client';

import { useState } from 'react';
import { Mic, Play, Pause, Download, Settings, User, History, CreditCard, LogOut } from 'lucide-react';
import Container from './Container';
import Button from './Button';

export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('voice-clone');
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [voiceSettings, setVoiceSettings] = useState({
        pitch: 100,
        speed: 100,
        emotion: 'neutral'
    });

    // Sample voice clones data
    const [voiceClones, setVoiceClones] = useState([
        { id: 1, name: 'My Professional Voice', createdAt: '2023-05-15', samples: 3 },
        { id: 2, name: 'Podcast Narration', createdAt: '2023-06-22', samples: 5 }
    ]);

    // Sample generation history
    const [history, setHistory] = useState([
        { id: 1, text: 'Welcome to our weekly podcast...', voice: 'Professional', date: '2023-07-10', duration: '1:24' },
        { id: 2, text: 'The quick brown fox jumps...', voice: 'Test Voice', date: '2023-07-08', duration: '0:32' }
    ]);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
        // Simulate playback progress
        if (!isPlaying) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setIsPlaying(false);
                        return 0;
                    }
                    return prev + 2;
                });
            }, 100);
        }
    };

    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-8 min-h-screen py-8 md:mt-16 mt-10">
                {/* Sidebar Navigation */}
                <div className="md:w-64 bg-white dark:bg-neutral-900 rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 h-fit md:sticky md:top-8">
                    <div className="flex items-center gap-3 mb-8 p-2">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                            <User className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                            <p className="font-medium dark:text-white text-neutral-900">Welcome back</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">user@example.com</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        <button
                            onClick={() => setActiveTab('voice-clone')}
                            className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === 'voice-clone' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                        >
                            <Mic className="w-5 h-5" />
                            Voice Clone
                        </button>
                        <button
                            onClick={() => setActiveTab('history')}
                            className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === 'history' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                        >
                            <History className="w-5 h-5" />
                            Generation History
                        </button>
                        <button
                            onClick={() => setActiveTab('billing')}
                            className={`flex items-center gap-3 w-full p-3 rounded-lg text-left ${activeTab === 'billing' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400' : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                        >
                            <CreditCard className="w-5 h-5" />
                            Billing
                        </button>
                        <button className="flex items-center gap-3 w-full p-3 rounded-lg text-left text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 mt-4">
                            <LogOut className="w-5 h-5" />
                            Sign Out
                        </button>
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1">
                    {activeTab === 'voice-clone' && (
                        <div className="space-y-8">
                            {/* Voice Cloning Section */}
                            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Create New Voice Clone</h2>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                            Voice Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="My Custom Voice"
                                            className="w-full outline-none px-4 py-3 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                                            Upload Voice Samples (3-5 samples recommended)
                                        </label>
                                        <div className="border border-dashed hover:border-indigo-500 border-neutral-300 duration-300 dark:border-neutral-700 rounded-xl p-8 text-center">
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <Mic className="w-8 h-8 text-neutral-400" />
                                                <p className="text-neutral-600 dark:text-neutral-400">Drag & drop audio files here</p>
                                                <p className="text-sm text-neutral-500 dark:text-neutral-500">or</p>
                                                <Button>
                                                    Browse Files
                                                </Button>
                                            </div>
                                        </div>
                                        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">Supported formats: MP3, WAV, OGG (15-30 seconds each)</p>
                                    </div>

                                    <div className="flex justify-end">
                                        <Button>
                                            Create Voice Clone
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* My Voice Clones Section */}
                            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">My Voice Clones</h2>

                                {voiceClones.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {voiceClones.map(voice => (
                                            <div key={voice.id} className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h3 className="font-medium text-neutral-900 dark:text-white">{voice.name}</h3>
                                                        <p className="text-sm text-neutral-500 dark:text-neutral-500">{voice.samples} samples</p>
                                                    </div>
                                                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                                                        <Settings className="w-5 h-5" />
                                                    </button>
                                                </div>
                                                <div className="mt-4 flex items-center justify-between text-sm">
                                                    <span className="text-neutral-500 dark:text-neutral-500">Created: {voice.createdAt}</span>
                                                    <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium">
                                                        Use Voice
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <p className="text-neutral-500 dark:text-neutral-500">You haven't created any voice clones yet</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'history' && (
                        <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Generation History</h2>

                            {history.length > 0 ? (
                                <div className="space-y-4">
                                    {history.map(item => (
                                        <div key={item.id} className="border-b border-neutral-200 dark:border-neutral-700 pb-4 last:border-0 last:pb-0">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-neutral-900 dark:text-white truncate">{item.text}</p>
                                                    <div className="flex items-center gap-4 mt-2 text-sm text-neutral-500 dark:text-neutral-500">
                                                        <span>Voice: {item.voice}</span>
                                                        <span>Duration: {item.duration}</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={handlePlay}
                                                        className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700"
                                                    >
                                                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                                    </button>
                                                    <button className="p-2 bg-neutral-100 dark:bg-neutral-800 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700">
                                                        <Download className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                            {isPlaying && (
                                                <div className="mt-3">
                                                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-1.5">
                                                        <div
                                                            className="bg-indigo-600 h-1.5 rounded-full"
                                                            style={{ width: `${progress}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}
                                            <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-500">{item.date}</div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-neutral-500 dark:text-neutral-500">No generation history yet</p>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'billing' && (
                        <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
                            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Billing & Subscription</h2>

                            <div className="space-y-6">
                                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-neutral-900 dark:text-white">Current Plan</h3>
                                            <p className="text-neutral-500 dark:text-neutral-500">Pro Plan - $15/month</p>
                                        </div>
                                        <Button>
                                            Change Plan
                                        </Button>
                                    </div>
                                </div>

                                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
                                    <h3 className="font-medium text-neutral-900 dark:text-white mb-4">Payment Method</h3>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-6 bg-neutral-200 dark:bg-neutral-700 rounded flex items-center justify-center">
                                                <CreditCard className="w-4 h-4 text-neutral-500" />
                                            </div>
                                            <span className='text-neutral-500 dark:text-neutral-500'>Visa ending in 4242</span>
                                        </div>
                                        <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm">
                                            Update
                                        </button>
                                    </div>
                                </div>

                                <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
                                    <h3 className="font-medium text-neutral-900 dark:text-white mb-4">Billing History</h3>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map(item => (
                                            <div key={item} className="flex items-center justify-between pb-4 border-b border-neutral-200 dark:border-neutral-700 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="text-neutral-900 dark:text-white">Pro Plan Subscription</p>
                                                    <p className="text-sm text-neutral-500 dark:text-neutral-500">July 10, 2023</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-neutral-900 dark:text-white">$15.00</p>
                                                    <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                                                        Invoice
                                                    </a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* FAQ CTA */}
            <section className='text-center py-12 px-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl'>
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