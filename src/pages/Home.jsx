import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900">

            {/* Portal animado de Rick & Morty */}
            <div className="mb-8 animate-spin" style={{ animationDuration: "8s" }}>
                <div
                    className="relative w-44 h-44 rounded-full flex justify-center items-center"
                    style={{
                        background: "radial-gradient(circle, #00ff88 0%, #00cc66 30%, #009944 60%, #004422 100%)",
                        boxShadow: "0 0 40px #00ff88, 0 0 80px #00cc66, 0 0 120px #009944"
                    }}
                >
                    <div className="absolute inset-0 rounded-full border-4 border-green-300 opacity-60"></div>
                    <div
                        className="w-24 h-24 rounded-full flex justify-center items-center"
                        style={{
                            background: "radial-gradient(circle, #aaffcc 0%, #00ff88 50%, #00aa55 100%)",
                            boxShadow: "inset 0 0 20px #004422"
                        }}
                    >
                        <span className="text-4xl">🛸</span>
                    </div>
                </div>
            </div>

            <h1 className="text-5xl font-extrabold text-green-400 mb-5 text-center drop-shadow-lg">
                Rick & Morty Universe
            </h1>
            <h3 className="text-xl text-center text-gray-400 mb-8 max-w-lg">
                Explora todos los personajes del multiverso. Conoce su estado, especie, origen y mucho más.
            </h3>
            <Link
                to="/personajes"
                className="bg-green-600 hover:bg-green-500 hover:scale-105 text-white px-8 py-4 rounded-full cursor-pointer transition duration-300 font-bold text-lg"
                style={{ boxShadow: "0 0 20px #16a34a" }}
            >
                🚀 Ver Personajes
            </Link>
        </div>
    )
}

export default Home
