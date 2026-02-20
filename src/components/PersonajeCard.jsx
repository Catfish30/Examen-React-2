import { Link } from "react-router-dom"

// Colores según el estado del personaje (equivalente al poke.color del docente)
const statusColors = {
    Alive: "#16a34a",
    Dead: "#dc2626",
    unknown: "#6b7280",
}

const PersonajeCard = ({ personaje }) => {
    const color = statusColors[personaje.status] || "#6b7280"

    return (
        <Link to={`/personajes/${personaje.id}`}>
            <div className="rounded-xl bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-2 px-10">
                <img
                    src={personaje.image}
                    alt={personaje.name}
                    className="w-40 h-40 object-contain rounded-full"
                />
                <span className="text-gray-300">{`#${personaje.id}`}</span>
                <h2 className="font-bold text-center">{personaje.name}</h2>
                <button
                    style={{ backgroundColor: color }}
                    className="hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300 uppercase text-sm"
                >
                    {personaje.species}
                </button>
            </div>
        </Link>
    )
}

export default PersonajeCard
