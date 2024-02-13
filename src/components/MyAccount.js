import React from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

const MyAccount = () => {

  const authInfo = React.useContext(AuthContext);

  return (
    <div className="page">
      <h1>MyAccount</h1>
      {
        authInfo && authInfo.user ?
        <div>
           <p>El usuario es: {authInfo.user}</p>
            <p>Prod Fav: {authInfo.fav}</p>
        </div>
          :
          <Navigate to="/login" replace={true}></Navigate>
      }
    </div>
  );
}

export default MyAccount;
