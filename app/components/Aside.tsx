import React from 'react'
import { Github, Dribbble } from 'lucide-react'

const Aside = () => {
    return (
        <div className='md:max-w-[315px] w-full mx-auto p-6 space-y-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl md:rounded-3xl'>
            {/* Header */}
            <div className='space-y-2'>
                <h2 className='text-2xl font-bold text-neutral-900 dark:text-white'>Voice Cloning</h2>
                <p className='text-neutral-600 dark:text-neutral-400'>Clone your voice with our advanced AI technology.</p>
            </div>

            {/* Features */}
            <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-neutral-800 dark:text-white'>Features</h3>
                <ul className='space-y-2 text-neutral-700 dark:text-neutral-400'>
                    <li className='flex items-start'>
                        <span className='mr-2 text-neutral-500 dark:text-neutral-500'>•</span>
                        <span>High-quality voice synthesis</span>
                    </li>
                    <li className='flex items-start'>
                        <span className='mr-2 text-neutral-500 dark:text-neutral-500'>•</span>
                        <span>Customizable pitch and speed</span>
                    </li>
                    <li className='flex items-start'>
                        <span className='mr-2 text-neutral-500 dark:text-neutral-500'>•</span>
                        <span>Emotion detection and synthesis</span>
                    </li>
                </ul>
            </div>

            {/* How to Use */}
            <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-neutral-800 dark:text-white'>How to Use</h3>
                <ol className='space-y-2 text-neutral-700 dark:text-neutral-400'>
                    {[
                        "Upload a sample of your voice",
                        "Adjust the pitch and speed settings",
                        "Click 'Generate' to create your cloned voice"
                    ].map((step, index) => (
                        <li key={index} className='flex items-start'>
                            <span className='mr-2 text-neutral-500 dark:text-neutral-500'>{index + 1}.</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </div>

            {/* Support */}
            <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-neutral-800 dark:text-white'>Support</h3>
                <p className='text-neutral-700 dark:text-neutral-400'>For any issues or questions, please contact our support team.</p>
            </div>

            {/* Resources */}
            <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-neutral-800 dark:text-white'>Resources</h3>
                <ul className='space-y-2 text-sm'>
                    {[
                        { name: "Documentation", href: "#" },
                        { name: "API Reference", href: "#" }
                    ].map((item, index) => (
                        <li key={index} className='flex items-start'>
                            <span className='mr-2 text-neutral-500 dark:text-neutral-500'>•</span>
                            <a href={item.href} className='text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors'>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Developer Profile */}
            <div className='space-y-3'>
                <h3 className='text-lg font-semibold text-neutral-800 dark:text-white'>Developer</h3>
                <div className='flex items-center space-x-4'>
                    <img 
                        src="https://jfctjplvujhqsposskbb.supabase.co/storage/v1/object/sign/images/profile_sm.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkYzc2YTkxLTVhMTctNGUzOS1hOGNjLTAzMDM2M2IxNDM5NiJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZmlsZV9zbS5qcGciLCJpYXQiOjE3NDY2ODYzODQsImV4cCI6MTc3ODIyMjM4NH0.5MpVAxqJv49Bw7JYR3AlXlMVZE5mFEfBp1xBocWjPwA" 
                        alt="Developer" 
                        width={60} 
                        height={60} 
                        className='rounded-full border-2 border-neutral-300 dark:border-neutral-700'
                    />
                    <div>
                        <p className='font-medium text-neutral-800 dark:text-white'>Clever Designer</p>
                        <div className='flex space-x-3 mt-1'>
                            <a href="https://github.com/clvrdesign" className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'>
                                <Github size={18} />
                            </a>
                            <a href="#" className='text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors'>
                                <Dribbble size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aside