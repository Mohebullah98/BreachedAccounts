import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Info() {
  const location = useLocation();
  const Navigate = useNavigate();
  return (
    <div>
      <div className="alert alert-danger fw-semibold" role="alert">
        The following accounts have been Breached!
      </div>
      <div class="card">
        <ul className="list-group">
          {console.log(location.state)}
          {location.state.accounts.map((acc, i) => (
            <li key={i} className="list-group-item">
              <span className="fw-bold">{acc.Name}</span> ({acc.BreachDate})
            </li>
          ))}
        </ul>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            Navigate("/dashboard", {
              state: {
                email: location.state.email
              }
            });
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
export default Info;
