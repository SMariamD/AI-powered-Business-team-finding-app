import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>AI-powered Business Team Finder</title>
        <meta name="description" content="Find your ideal business partners" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">AI-powered Business Team Finder</h1>

        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Enter your business interests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold mb-4">Recommended Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Sample partner cards */}
              {[1, 2, 3].map((id) => (
                <div key={id} className="bg-white rounded-lg shadow p-4">
                  <h3 className="font-semibold mb-2">Sample Partner {id}</h3>
                  <p className="text-gray-600">Shared interests: Business, Technology, Innovation</p>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
