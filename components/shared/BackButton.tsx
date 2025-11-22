"use client"
import { useRouter } from 'next/navigation'


const BackButton = () => {
    const router = useRouter()
    return (
        <button
            onClick={() => router.back()}
            className="mb-6 px-4 py-2 cursor-pointer text-sm font-medium text-primary hover:bg-secondary rounded-lg transition-colors inline-flex items-center gap-2"
        >
            <span>←</span>
            <span>العودة</span>
        </button>
    )
}

export default BackButton
