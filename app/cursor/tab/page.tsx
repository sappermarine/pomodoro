import Image from 'next/image'

export default function ChatInterface() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">yourteacher.ai</div>
        <div className="flex gap-4">
          <span>📚 384</span>
          <span>👤 162</span>
        </div>
      </header>
      
      <main className="flex p-4 gap-4">
        <div className="w-1/3">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image src="/path-to-profile-image.jpg" alt="Profile" layout="fill" objectFit="cover" />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-xl font-bold">Daniel García</h2>
            <button className="mt-2">🔊</button>
          </div>
        </div>
        
        <div className="w-2/3 space-y-4">
          <div className="bg-yellow-200 p-4 rounded-lg">
            <h3 className="font-bold">Hey Taylor Chiu, welcome back!</h3>
            <div className="flex gap-2 mt-2">
              <button>▶️</button>
              <button>🔧</button>
              <button>📄</button>
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <p>Por favor, le describela gran aventura de Max con ese juez.</p>
          </div>
        </div>
      </main>
      
      <footer className="fixed bottom-0 w-full p-4">
        <button className="bg-yellow-400 w-full py-2 rounded-full font-bold">
          🎙️ SPEAK
        </button>
      </footer>
    </div>
  )
}