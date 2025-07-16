import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Vite + React + TypeScript + TailwindCSS
        </h1>

        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count} www
          </button>

          <p className="mt-4 text-gray-600">
            Click the button to test React state management!
          </p>

          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-700">
              ✨ This project includes:
            </p>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• React 18 with TypeScript</li>
              <li>• Vite for fast development</li>
              <li>• TailwindCSS for styling</li>
              <li>• Hot module replacement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
