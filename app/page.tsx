import { Mic, Code, Globe, Users, Rocket, ArrowRight, Play, Download } from 'lucide-react';
import Container from './components/Container';
import Button from './components/Button';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-indigo-50 to-white dark:from-neutral-900 dark:to-neutral-950 py-12 md:py-32">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6 md:text-left text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white leading-tight">
                                Transform Text <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">Into Natural</span> Speech
                            </h1>
                            <p className="text-xl text-neutral-600 dark:text-neutral-400">
                                AI-powered voice cloning that sounds perfectly human. Create, customize, and deploy lifelike voiceovers in seconds.
                            </p>
                            <div className="max-w-lg pt-4">
                                <Button>
                                    <div className='flex items-center'>
                                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-xl border border-neutral-200 dark:border-neutral-700">
                                <div className="aspect-video bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <Mic className="w-12 h-12 mx-auto text-indigo-600 dark:text-indigo-400 mb-4" />
                                        <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-2">VoiceClone Preview</h3>
                                        <p className="text-neutral-600 dark:text-neutral-400 mb-4">Experience the power of AI-generated speech</p>
                                        <Button>
                                            <div className='flex items-center gap-2'>
                                                <Play className="w-4 h-4" /> Play Sample
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            Powerful <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">Features</span>
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                            Everything you need to create professional voiceovers and audio content.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-neutral-50 dark:bg-neutral-900 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{feature.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{feature.description}</p>
                                <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center">
                                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                </a>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
                            How <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">It Works</span>
                        </h2>
                        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                            Create custom voiceovers in just three simple steps
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto flex items-center justify-center text-white text-xl font-bold mb-6">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{step.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                <Container>
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Audio?</h2>
                        <p className="text-xl mb-8 text-indigo-100">
                            Join thousands of creators using VoiceClone to produce professional voice content.
                        </p>
                        <div className="max-w-fit mx-auto flex flex-col sm:flex-row justify-center gap-4">
                            <Button variant='secondary'>
                                Start Free Trial
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}

const features = [
    {
        title: "Voice Cloning",
        description: "Create a digital replica of any voice from just 15 seconds of audio sample.",
        icon: <Mic className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
        title: "Multi-Language Support",
        description: "Generate speech in 30+ languages with authentic accents and pronunciation.",
        icon: <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
        title: "Developer API",
        description: "Integrate our TTS technology directly into your applications with our robust API.",
        icon: <Code className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
        title: "Emotion Control",
        description: "Adjust tone and emotion to match your content's needs - happy, sad, excited, and more.",
        icon: <Users className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
        title: "High-Speed Processing",
        description: "Generate audio in real-time with our optimized AI models.",
        icon: <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    },
    {
        title: "Easy Export",
        description: "Download your audio files in MP3, WAV, or other popular formats.",
        icon: <Download className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
    }
];

const steps = [
    {
        title: "Upload or Record",
        description: "Provide a voice sample or choose from our library of professional voices."
    },
    {
        title: "Enter Your Text",
        description: "Type or paste the text you want to convert to speech."
    },
    {
        title: "Generate & Download",
        description: "Create your audio file and download it in your preferred format."
    }
];