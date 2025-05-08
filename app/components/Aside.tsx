import React from 'react'
import { Github, Dribbble } from 'lucide-react'

const Aside = () => {
    return (
        <div className='md:max-w-[315px] max-w-full w-full mx-auto px-6 py-10 space-y-6 bg-neutral-900 md:border border-neutral-800 border-0 md:rounded-4xl rounded-xl shadow-lg'>
            <div className='flex flex-col justify-center'>
                <h2 className='text-2xl font-bold text-white'>Voice Cloning</h2>
                <p className='text-sm text-neutral-400'>Clone your voice with our advanced AI technology.</p>
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-white'>Features</h3>
                <ul className='list-disc list-inside text-sm text-neutral-400'>
                    <li>High-quality voice synthesis</li>
                    <li>Customizable pitch and speed</li>
                    <li>Emotion detection and synthesis</li>
                </ul>
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-white'>How to Use</h3>
                <ol className='list-decimal list-inside text-sm text-neutral-400'>
                    <li>Upload a sample of your voice.</li>
                    <li>Adjust the pitch and speed settings.</li>
                    <li>Click "Generate" to create your cloned voice.</li>
                </ol>
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-white'>Support</h3>
                <p className='text-sm text-neutral-400'>For any issues or questions, please contact our support team.</p>
            </div>

            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-white'>Resources</h3>
                <ul className='list-disc list-inside text-sm text-neutral-400'>
                    <li><a href="#" className='text-blue-500'>Documentation</a></li>
                    <li><a href="#" className='text-blue-500'>API Reference</a></li>
                </ul>
            </div>

            {/* Developer profile */}
            <div className='flex flex-col justify-center'>
                <h3 className='text-xl font-semibold text-white'>Developer</h3>
                <img src="https://jfctjplvujhqsposskbb.supabase.co/storage/v1/object/sign/images/profile_sm.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkYzc2YTkxLTVhMTctNGUzOS1hOGNjLTAzMDM2M2IxNDM5NiJ9.eyJ1cmwiOiJpbWFnZXMvcHJvZmlsZV9zbS5qcGciLCJpYXQiOjE3NDY2ODYzODQsImV4cCI6MTc3ODIyMjM4NH0.5MpVAxqJv49Bw7JYR3AlXlMVZE5mFEfBp1xBocWjPwA" alt="Developer" width={100} height={100} className='rounded-full mb-2' />
                <p className='text-sm text-neutral-400'>Clever Designer</p>
                <div className='flex gap-2 mt-4'>
                <p className='text-sm gap-2 text-neutral-400'><a href="https://github.com/clvrdesign" className='text-blue-500'><Dribbble /></a></p>
                <p className='text-sm gap-2 text-neutral-400'><a href="" className='text-blue-500'><Github /></a></p></div>
            </div>

        </div>
    )
}

export default Aside