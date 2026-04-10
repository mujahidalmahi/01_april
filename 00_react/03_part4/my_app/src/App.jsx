import AdvancedRouting from "./components/advancedRouting/AdvancedRouting";
import ContextAPI from "./components/contextApi/ContextAPI";
import ReactRouterDOM from "./components/routerRouterDOM/ReactRouterDOM";

const App = () => {
    return(
        <>
            <ReactRouterDOM />
            <AdvancedRouting />
            <ContextAPI />
        </>
    )
}

export default App;