import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import Home from "../pages/Home"
import Personajes from "../pages/Personajes"
import PersonajeDetalle from "../pages/PersonajeDetalle"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/personajes",
                element: <Personajes />
            },
            {
                path: "/personajes/:id",
                element: <PersonajeDetalle />
            }
        ]
    }
])
