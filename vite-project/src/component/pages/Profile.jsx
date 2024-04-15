
function Profile({user}) {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <h2 className="card-title">Welcome {user}</h2>

        <div className="card-body">
          <p>You're logged in</p>
          <div className="card-actions">
            <button className="btn btn-outline btn-black">Log Out</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile