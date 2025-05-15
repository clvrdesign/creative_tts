import React, { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl'
    closeOnOverlayClick?: boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    closeOnOverlayClick = true
}) => {
    // Handle escape key press
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    // Size classes
    const sizeClasses: Record<NonNullable<ModalProps['size']>, string> = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
    };

    return (
        <div
            onClick={closeOnOverlayClick ? onClose : undefined}
            className='fixed inset-0 w-full h-screen bg-black/50 dark:bg-black/70 transition-opacity z-[999] overflow-y-auto flex items-center justify-center'
        >
            <div
                className={`relative w-full ${sizeClasses['md']}`}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className='absolute top-8 right-6 rounded-full p-1 text-neutral-400 hover:text-neutral-500 dark:hover:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                >
                    <X className='h-5 w-5' />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal