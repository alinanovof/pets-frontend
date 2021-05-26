import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUsers } from "../../api/api";

const AllUsers = () => {
  const [users, setUsers] = useState();
  const auth = useAuth();

  useEffect(() => {
    getUsers(auth.token).then((data) => {
      setUsers(data.data.users);
    });
  }, [auth.token]);

  return (
    <ul className="page-wrapper">
        <h2>Registered Users</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {users &&
            users.map((user) => (
              <div className="col-sm" key={user.id}>
                <li
                  className="card h-100 pet-list-item text-center"
                  style={{ maxWidth: 15 + "rem" }}
                >

                  <div className="card-body">
                    <h4 className="card-title">{user.first_name} {user.last_name}</h4>
                    <p className="card-text">{user.email}<br/>{user.tel}</p>

                  </div>
                  <div className="card-footer">
                  </div>
                </li>
              </div>
            ))}
        </div>
      </div>
    </ul>
  );
};

export default AllUsers;
