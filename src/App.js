import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="logo">Travel With Us</div>
      </header>

      <div className="container">
        <div className="form-container">
          <h1>Sign Up</h1>
          <p>Join us and explore amazing destinations worldwide!</p>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />

            <label htmlFor="destination">Destination</label>
            <select id="destination" name="destination" required>
              <option value="">Select destination</option>
              <option value="paris">London</option>
              <option value="london">USA</option>
              <option value="tokyo">Japan</option>
              <option value="dubai">Other</option>
            </select>

            <label htmlFor="date">Travel Date</label>
            <input type="date" id="date" name="date" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />

            <div className="buttons">
              <button type="submit">Register</button>
              <button type="reset" className="clear-btn">Clear</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;

