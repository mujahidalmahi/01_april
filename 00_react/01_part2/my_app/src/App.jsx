import Page1 from "./components/pages/page_01/Page1";
import Page2 from "./components/pages/page_02/Page2";
import Page3 from "./components/pages/page_03/Page3";

const App = () => {
    const users = [
        {
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            tag: "Satisfied"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            tag: "Underserved"
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
            tag: "Underbanked"
        }
    ]
    return (
        <>
            <Page1 users = {users} />
            <Page2 />
            <Page3 />
        </>
    )
};

export default App;