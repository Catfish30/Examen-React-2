import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-900 font-sans font-semibold">
            <nav className="fixed top-0 w-full bg-green-700 text-white z-10">
                <div className="flex justify-between items-center px-5 py-2">
                    <h1>🛸 Rick & Morty App</h1>
                    <div className="flex justify-center items-center gap-3">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400 font-extrabold underline" : "text-white"
                            }
                        >
                            Inicio
                        </NavLink>
                        <NavLink
                            to="/personajes"
                            className={({ isActive }) =>
                                isActive ? "text-yellow-400 font-extrabold underline" : "text-white"
                            }
                        >
                            Personajes
                        </NavLink>
                    </div>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
