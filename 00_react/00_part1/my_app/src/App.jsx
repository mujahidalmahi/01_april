import Card from "./components/Card";
import users from './components/User';
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";

const App = () => {
  return(
    <>
      <Header />
      <div className="container">
        {users.map((user, id) => {
          return (
            <div key = {id}>
              <Card name = {user.name} age = {user.age}/>
            </div>
          )
        })}
      </div>
      <Button />
    </>
  )
};

export default App;