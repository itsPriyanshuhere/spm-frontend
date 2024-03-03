import {Routes,Route} from "react-router-dom";
import SignIn from "./components/SignIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<SignIn />} />
      </Routes>
    </>
  )
}