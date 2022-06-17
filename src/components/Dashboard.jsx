import React from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <div class="card bg-dark">
        <h5 class="card-header">Welcome {location.state.email}</h5>
        <div class="card-body">
          <h5 class="card-title">Your tasks for today include:</h5>
          <p class="card-text">Nothing! yay</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
