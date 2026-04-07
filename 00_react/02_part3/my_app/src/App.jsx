import ApiCalling from "./components/apiCalling/ApiCalling"
import Main from "./components/noteAppProject/Main"
import UseStateHook from "./components/useEffectHook/UseStateHook"
import Main2 from "./components/galleryProject/Main"

const App = () => {
  return (
    <>
        <Main />
        <ApiCalling />
        <UseStateHook />
        <Main2 />
    </>
  )
}

export default App
