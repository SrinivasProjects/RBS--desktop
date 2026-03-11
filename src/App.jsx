import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { create } from 'zustand'

const useStore = create((set) => ({ count: 0, inc: () => set((s) => ({ count: s.count + 1 })) }))

export default function App() {
  const [status, setStatus] = useState(null)
  useEffect(() => {
    axios
      .get('https://api.github.com/')
      .then(() => setStatus('ok'))
      .catch(() => setStatus('err'))
  }, [])
  const { count, inc } = useStore()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">RBS Demo</h1>
        <p className="mb-2">Axios fetch: {status ?? 'loading...'}</p>
        <p className="mb-2">Zustand count: {count}</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={inc}>
          Increment
        </button>
      </div>
    </div>
  )
}
