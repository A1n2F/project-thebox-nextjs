import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface GridContainerProps {
    children: ReactNode
    className?: string
}

export function GridContainer({ children, className}: GridContainerProps) {
    const defaultClass = "w-full max-w-[1640px] mx-auto"
    const combinadClasses = twMerge(defaultClass, className)
    return (
        <div className={combinadClasses}>
            {children}
        </div>
    )
}