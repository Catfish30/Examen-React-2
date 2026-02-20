import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const statusColors = {
    Alive: "#16a34a",
    Dead: "#dc2626",
    unknown: "#6b7280",
}

const PersonajeDetalle = () => {
    const { id } = useParams()
    const [personaje, setPersonaje] = useState(null)
    console.log(id)

    useEffect(() => {
        const fetchPersonaje = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
                console.log(response?.data)
                setPersonaje(response?.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchPersonaje()
    }, [])

    const color = statusColors[personaje?.status] || "#6b7280"

    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="rounded-lg bg-white shadow-lg p-5 flex flex-col justify-center items-center gap-5 px-10 w-80">
                    <div className="w-full flex justify-start items-start gap-5">
                        <Link
                            to="/personajes"
                            className="bg-green-600 hover:bg-green-800 hover:scale-105 text-white px-6 py-2 rounded-full cursor-pointer transition duration-300"
                        >
                            ← Volver
                        </Link>
                    </div>

                    <img
                        src={personaje?.image}
                        alt={personaje?.name}
                        className="w-40 h-40 object-contain rounded-full"
                    />

                    <span className="text-gray-400">{`#${personaje?.id}`}</span>
                    <h2 className="text-2xl font-extrabold text-gray-700 text-center">{personaje?.name}</h2>

                    <button
                        style={{ backgroundColor: color }}
                        className="hover:scale-105 text-white px-6 py-2 rounded-full cursor-default transition duration-300 uppercase text-sm"
                    >
                        {personaje?.status}
                    </button>

                    <div className="w-full text-gray-600 flex flex-col gap-2 text-sm">
                        <p><span className="font-bold">Especie:</span> {personaje?.species}</p>
                        <p><span className="font-bold">Género:</span> {personaje?.gender}</p>
                        <p><span className="font-bold">Origen:</span> {personaje?.origin?.name}</p>
                        <p><span className="font-bold">Ubicación:</span> {personaje?.location?.name}</p>
                        <p><span className="font-bold">Episodios:</span> {personaje?.episode?.length}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonajeDetalle
