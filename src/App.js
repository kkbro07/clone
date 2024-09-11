import React, { Component } from 'react';
import './App.css';
import  Panier from  './Panier.js';
import luc from './luc.jpg';
import nixon from './nixon.jpeg';
import cover from './cover.jpg';
import montre from './montre.png';
import Versace from './Versace.jpg'
import Versace2 from './Versace2.jpg'
class App extends Component {
  render() {


    return (
      <div className="App">
      <div className="navbar">
          <ul className="list">
            <img src={Versace} className="Versace-img" alt="all" />
             <div href="">Accueil</div>
            <div href="">Montres</div>
            <div href=""> Mon compte <i className="fa fa-user" aria-hidden="true"></i></div>
            <div> Mon panier <i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div href="">Contact</div>
          </ul>
      </div>
          <div className="navi">
          <div className="container">
            <img src={luc} className="img" alt="all"/>
            <img src={nixon} className="img2"alt="" /> 
            <img src={cover} className="img3" alt="" /> 
            <img src={montre} className="img4" alt=""/>
            <div className="middle">
           <div className="text">1300.90$<i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
        </div>  
            </div>
            </div>
      <footer className="footer">
          <i className="fa fa-facebook" aria-hidden="true"></i>
          < img src={Versace2} className="Versace-foot" alt="all" />


      </footer>
      </div>
    );
  }
}

export default App;
