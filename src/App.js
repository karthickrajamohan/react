import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-default">
          <a class="navbar-brand" href="/">
          </a>
          <button onclick="toggleMenu()" type="button" class="navbar-toggler" data-toggle="collapse" data-target="#menu">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div id="menu" class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
              <li> <a href="#" target="_blank">Home </a> </li>
              <li> <a href="#" target="_blank">About Us </a> </li>
              <li> <a href="#" target="_blank">WHY MUTUAL FUNDS </a> </li>
              <li> <a href="#" target="_blank">Referral Scheme</a> </li>
              <li> <a href="#" target="_blank">Login </a> </li>
            </ul>
          </div>
        </nav>
        <div class="main">
          <div class="left">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut lacinia tellus. Pellentesque tortor est, pulvinar non orci
            id, gravida porta erat. Curabitur maximus magna mi, at pulvinar mauris posuere non. Suspendisse potenti.
            Aenean sit amet ipsum pretium, lacinia diam fermentum, vestibulum odio. Proin neque tortor, tristique vel
            eros ut, bibendum maximus urna. Praesent sed consectetur ligula. Praesent quis sapien euismod, gravida leo
            id, convallis orci. Nulla pharetra gravida purus et sodales. Nullam nec venenatis magna. Nulla in nisi accumsan,
            pulvinar risus ac, varius neque. Maecenas rhoncus ex nec arcu aliquet, a volutpat est tincidunt. Nullam eu
            porta ante. Nunc tincidunt justo lacus, ut finibus libero pulvinar sed. In placerat, turpis ut imperdiet
            ornare, eros ipsum aliquam tellus, non placerat neque leo ac odio. Aliquam erat volutpat. Suspendisse consectetur
            est a ligula mattis semper. Sed nec lorem blandit, consequat velit nec, hendrerit ipsum. Suspendisse rhoncus
            efficitur pulvinar. Duis scelerisque, mass</div>
          </div>
          <div class="right">
            <h3>Account Login</h3>
            <form method="post" action="">
              <div class="">
                <label for="username">Username</label>
                <input id="username" type="text" name="Login" placeholder="username" value="" maxlength="25" />
              </div>
              <div class="">
                <label for="password">Password</label>
                <input id="password" type="password" name="Password" value="" placeholder="* * * * * * *" maxlength="25" />
              </div>
              <a class="fp" href="#"> Forgot Password ? </a>
              <div class="">
                <input id="checkMe" class="checkbox" type="checkbox" />
                <label for="checkMe">Remember me</label>
              </div>
              <input class="" type="submit" value="Login" />
            </form>
            <div class="info-wrapper">
              <div class="info"></div>
              <div class="info-content">By accessing this website/portal you agree to the Terms of Use.</div>
            </div>
          </div>
        </div>
        <footer>© Copyright 2017 XYZ | Terms of Use | Privacy Policy | Contact Us</footer>
      </div>
    );
  }
}

export default App;
