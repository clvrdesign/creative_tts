import React from 'react';
import { Mic, Code, Globe, Users, Rocket, Shield, Github, Dribbble } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-neutral-100 dark:bg-neutral-950 mt-20 py-12">
            <Container>
                {/* Hero Section */}
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
                        About <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-300">Voice Clone</span>
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        Revolutionizing text-to-speech with AI-powered voice cloning technology for natural, personalized audio experiences.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="mb-20">
                    <div className="bg-white dark:bg-neutral-900 p-8 md:p-12 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                        <div className="w-full">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                                <Rocket className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                Our Mission
                            </h2>
                            <p className="text-base text-neutral-700 dark:text-neutral-300 mb-6">
                                At VoiceClone, we're dedicated to breaking down communication barriers through cutting-edge speech synthesis. Our technology empowers creators, developers, and businesses to generate human-like voices with unprecedented realism.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                    <Mic className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                                    <h3 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Text to Speech</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Create custom voice replicas from short audio samples with our proprietary AI models.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl border border-neutral-200 dark:border-neutral-700">
                                    <Code className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                                    <h3 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Developer Friendly</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Robust API and documentation for seamless integration into your applications.
                                    </p>
                                </div>
                                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6 border border-neutral-200 dark:border-neutral-700">
                                    <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-3" />
                                    <h3 className="font-medium text-lg mb-2 text-neutral-900 dark:text-white">Multilingual</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        Support for 30+ languages and dialects with authentic regional accents.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Horizontal Voice Cloning Card */}
                <section className="bg-white dark:bg-neutral-900 p-6 my-20 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Left Side - Info */}
                        <div className="md:w-2/3 space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">Voice Cloning</h2>
                                <p className="text-neutral-600 dark:text-neutral-400">Clone your voice with our advanced AI technology.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">Features</h3>
                                    <ul className="space-y-2 text-neutral-700 dark:text-neutral-400">
                                        <li className="flex items-start">
                                            <span className="mr-2 text-neutral-500 dark:text-neutral-500">•</span>
                                            <span>High-quality voice synthesis</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-neutral-500 dark:text-neutral-500">•</span>
                                            <span>Customizable pitch and speed</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2 text-neutral-500 dark:text-neutral-500">•</span>
                                            <span>Emotion detection and synthesis</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">How to Use</h3>
                                    <ol className="space-y-2 text-neutral-700 dark:text-neutral-400">
                                        {[
                                            "Upload a sample of your voice",
                                            "Adjust the pitch and speed settings",
                                            "Click 'Generate' to create your cloned voice"
                                        ].map((step, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2 text-neutral-500 dark:text-neutral-500">{index + 1}.</span>
                                                <span>{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Developer Profile */}
                        <div className="md:w-1/3 md:border-l md:border-neutral-200 dark:border-neutral-700 md:pl-8">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">Developer</h3>
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src="https://jfctjplvujhqsposskbb.supabase.co/storage/v1/object/sign/images/profile_sm.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkYzc2YTkxLTVhMTctNGUzOS1hOGNjLTAzMDM2M2IxNDM5NiJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZmlsZV9zbS5qcGciLCJpYXQiOjE3NDY2ODYzODQsImV4cCI6MTc3ODIyMjM4NH0.5MpVAxqJv49Bw7JYR3AlXlMVZE5mFEfBp1xBocWjPwA"
                                            alt="Developer"
                                            width={80}
                                            height={80}
                                            className="rounded-full border-2 border-neutral-300 dark:border-neutral-700"
                                        />
                                        <div>
                                            <p className="font-medium text-neutral-800 dark:text-white">Clever Designer</p>
                                            <div className="flex space-x-3 mt-2">
                                                <a href="https://github.com/clvrdesign" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                                    <Github size={20} />
                                                </a>
                                                <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                                    <Dribbble size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-lg font-semibold text-neutral-800 dark:text-white">Resources</h3>
                                    <ul className="space-y-2">
                                        {[
                                            { name: "Documentation", href: "#" },
                                            { name: "API Reference", href: "#" }
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="mr-2 text-neutral-500 dark:text-neutral-500">•</span>
                                                <a href={item.href} className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors">
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-20 hidden">
                    <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="group text-center">
                                <div className="relative mb-4 overflow-hidden rounded-xl aspect-square bg-neutral-200 dark:bg-neutral-800">
                                    {/* Placeholder for team member image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-neutral-500 dark:text-neutral-600">
                                        {member.initials}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                        <Users className="w-5 h-5 text-white mr-2" />
                                        <span className="text-white text-sm">{member.role}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">{member.name}</h3>
                                <p className="text-indigo-600 dark:text-indigo-400">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Values Section */}
                <section className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="bg-white dark:bg-neutral-900 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                                    {React.cloneElement(value.icon, { className: "w-6 h-6 text-indigo-600 dark:text-indigo-400" })}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{value.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="text-center py-12 px-4 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800">
                    <h2 className="max-w-[550px] mx-auto text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                        Ready to Transform Your Audio Experience?
                    </h2>
                    <Button>
                        Get Started for Free
                    </Button>
                </section>
            </Container>
        </main>
    );
};

// Sample data
const teamMembers = [
    {
        id: 1,
        name: 'Alex Johnson',
        initials: 'AJ',
        position: 'CEO & Founder',
        role: 'Product Strategy'
    },
    {
        id: 2,
        name: 'Sarah Chen',
        initials: 'SC',
        position: 'CTO',
        role: 'Technical Architecture'
    },
    {
        id: 3,
        name: 'Miguel Rodriguez',
        initials: 'MR',
        position: 'Lead AI Researcher',
        role: 'Model Development'
    },
    {
        id: 4,
        name: 'Priya Patel',
        initials: 'PP',
        position: 'Product Designer',
        role: 'User Experience'
    }
];

const values = [
    {
        title: 'Innovation',
        description: 'We constantly push boundaries in speech synthesis to deliver groundbreaking voice technology.',
        icon: <Rocket />
    },
    {
        title: 'Quality',
        description: 'Our voices are indistinguishable from human speech, with natural intonation and emotion.',
        icon: <Mic />
    },
    {
        title: 'Ethics',
        description: 'We implement strict safeguards against misuse of our voice cloning technology.',
        icon: <Shield />
    }
];

export default AboutPage;