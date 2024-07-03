import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const loading = () => {
    return (
        <div className="h-full flex justify-center items-center" aria-label='読み込み中'>
            <FaSpinner className="text-6xl text-blue-500 animate-spin" />
        </div>
    )
}

export default loading