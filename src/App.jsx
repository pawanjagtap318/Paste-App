import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useParams } from "react-router-dom"
import Paste from "./components/Paste"
import Layout from "./components/Layout"
import Home from "./components/Home"
import ViewPaste from "./components/ViewPaste"
import { SendEmail } from "./components/SendEmail"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="pastes" element={<Paste/>}/>
      <Route path="pastes/:id" element={<ViewPaste/>}/>
      <Route path="share/:id" element={<SendEmail/>}/>
    </Route>
  ))

  // style={{backgroundColor: "rgb(179, 200, 207)"}}

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
