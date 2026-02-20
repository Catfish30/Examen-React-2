import axios from "axios"
import { useEffect, useState } from "react"
import PersonajeCard from "../components/PersonajeCard"

const Personajes = () => {
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                setLoading(true)

                // Primera página para saber cuántas páginas hay
                const response = await axios.get("https://rickandmortyapi.com/api/character")
                const totalPages = response.data.info.pages

                // Cargamos todas las páginas (igual que el docente cargó 1000 pokemons)
                const requests = []
                for (let i = 1; i <= totalPages; i++) {
                    requests.push(axios.get(`https://rickandmortyapi.com/api/character?page=${i}`))
                }

                const responses = await Promise.all(requests)
                const todosLosPersonajes = responses.flatMap(res => res.data.results)

                console.log(todosLosPersonajes)
                setPersonajes(todosLosPersonajes)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPersonajes()
    }, [])

    useEffect(() => {
        console.log(search)
    }, [search])

    const filteredPersonajes = personajes?.filter(personaje =>
        personaje.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <>
            <div className="mt-12 px-10 max-w-5xl flex justify-center items-center mx-auto">
                <input
                    type="text"
                    placeholder="Buscar Personaje"
                    className="w-full rounded-lg border-2 border-gray-400 px-6 py-3 text-gray-700"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-5 px-10 max-w-5xl items-center justify-center mx-auto pb-10">
                {
                    loading ?
                        <div className="flex text-center justify-center items-center text-5xl text-green-600 col-span-2 md:col-span-4 animate-bounce h-screen">
                            <div>CARGANDO PERSONAJES...</div>
                        </div>
                        :
                        filteredPersonajes?.map((personaje) => (
                            <PersonajeCard personaje={personaje} key={personaje.id} />
                        ))
                }
            </div>
        </>
    )
}

export default Personajes
