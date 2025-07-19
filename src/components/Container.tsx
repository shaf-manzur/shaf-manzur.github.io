import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
}
/**
 * Container is a Layout wrapper component that provides consistent styling and structure for main content.
 */
export default function Container({ children }: ContainerProps) {
    return (
        <main className="w-full scroll-smooth">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12 lg:space-y-16">
                    {children}
                </div>
            </div>
        </main>
    )
} 