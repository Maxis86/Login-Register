import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ExtrasRoutes } from "../extras/routes/ExtrasRoutes"

export const AppRouter = () => {
  return (
    <>
    <Routes>

        {/*Login y registro*/}
        <Route path="/auth/*" element={<AuthRoutes/>}/>

        {/*ExtrasApp*/}
        <Route path="/*" element={<ExtrasRoutes/>}/>

    </Routes>
    </>
  )
}
