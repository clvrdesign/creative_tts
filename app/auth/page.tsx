import { Lock, Mail, User, LogIn } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import Container from '../components/Container'


const AuthPage = ({ isLogin = true }) => {
    const title = isLogin ? 'Welcome Back' : 'Create Account'
    const subtitle = isLogin
        ? 'Sign in to continue to your account'
        : 'Get started with your free account'
    const authText = isLogin ? "Sign In" : "Sign Up"
    const toggleText = isLogin
        ? "Don't have an account?"
        : "Already have an account?"
    const toggleLink = isLogin ? "/signup" : "/login"
    const toggleLinkText = isLogin ? "Sign Up" : "Sign In"

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 py-12">
            <Container>
                <div className="max-w-md mx-auto bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-200 dark:border-neutral-800">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                            {title}
                        </h1>
                        <p className="text-neutral-600 dark:text-neutral-400">
                            {subtitle}
                        </p>
                    </div>

                    {/* Google Auth */}
                    <div className='flex justify-center px-6 py-3 cursor-pointer font-medium text-center rounded-xl shadow-lg text-gray-700 bg-gray-200 hover:bg-gray-300 duration-300 shadow-gray-400/20'>
                        <div className='flex items-center text-center gap-2'>
                            <FcGoogle className="w-5 h-5" />
                            {authText} with Google
                        </div>
                    </div>

                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-neutral-200 dark:border-neutral-700"></div>
                        <span className="px-4 text-sm text-neutral-500 dark:text-neutral-400">or</span>
                        <div className="flex-1 border-t border-neutral-200 dark:border-neutral-700"></div>
                    </div>

                    {/* Form */}
                    <form className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                    Full Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-neutral-400" />
                                    </div>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="w-full pl-10 pr-3 py-2 text-sm outline-none border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                                        placeholder="Your name"
                                    />
                                </div>
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-neutral-400" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="w-full pl-10 pr-3 py-2 text-sm outline-none border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                                    placeholder="your@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-neutral-400" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete={isLogin ? "current-password" : "new-password"}
                                    required
                                    className="w-full pl-10 pr-3 py-2 text-sm outline-none border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                                    placeholder={isLogin ? "Your password" : "Create password"}
                                    minLength={8}
                                />
                            </div>
                        </div>

                        {isLogin && (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-neutral-300 dark:border-neutral-600 rounded bg-white dark:bg-neutral-800"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-neutral-700 dark:text-neutral-300">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <Link href="/forgot-password" className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                        )}

                        <div>
                            <div className='flex justify-center px-6 py-3 cursor-pointer font-medium text-center rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 bg-gray-200 hover:bg-gray-300 duration-300 shadow-gray-400/20'>
                                <div className='flex items-center text-center gap-2'>
                                    <LogIn className="w-4 h-4" />
                                    {authText}
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        {toggleText}{' '}
                        <Link href={toggleLink} className="font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300">
                            {toggleLinkText}
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AuthPage