import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

function Profile() {
  const navigate = useNavigate()
  const user = auth.currentUser

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title">Welcome {user.email}</h2>
        <div className="card-body">

          <p>You're logged in</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-black" onClick={(e) => logoutUser(e)}>Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
