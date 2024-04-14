import Header from "./component/layout/Header";
import Login from "./component/pages/Login";
import Profile from "./component/pages/Profile";
import SignUp from "./component/pages/SignUp";


function App() {
 

  return (
    <>
      <Header />
      <div className="flex justify-center mt-10">
        <SignUp />
        <Login />
        
      </div>
    </>
  );
}

export default App
