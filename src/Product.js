// Step 5

import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 
class Product extends Component {
  render() {
    return (
      <div>
        <h2>Product</h2>
        <p></p>
        <p> Hidup ini seperti "kopi" yang diciptakan dengan komposisi sedikit pahit dan sedikit manis.
          Menciptakan berjuta inspirasi, bisa juga sebagai penenang hati di kala kenangan lama mulai menghampiri.
          Tersedia menu spesial untuk para penikmat kopi.
          Bukan hanya sekedar kopi, kopi disini dibuat dengan sepenuh hati.
          </p>
   
<div class="card-deck">
  <div class="card">
  <img class="card-img-top" src="https://cf.shopee.co.id/file/394fcf0269b4b82367f8058de2c5856c"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Price Rp 20.000</h5>
    <h4 class="font-weight-bold card-title">Kopi Lemon</h4>
    <p class="card-text">Salah satu kopi khas di cafe ini. Kopi murni yang tersaring berkali-kali.
    tanpa gula, sehingga aman bagi penyandang diabetes dengan sedikit aroma lemon.</p>
    <Link to="/Contact" class="black-text d-flex justify-content-left">
    <a class="btn btn-unique">Buy it</a>
   </Link>
  </div>
  </div>

  <div class="card">
  <img class="card-img-top" src="https://id-test-11.slatic.net/original/68ae5dbfe3526ecdffc416065fb751c7.jpg"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Price Rp 30.000</h5>
    <h4 class="font-weight-bold card-title">Coffe V60</h4>
    <p class="card-text">Jangan mengaku pecinta kopi jika belum mencoba menu yang satu ini.
    Pahit Kopi V60 mampu menggugah semangat bahkan di tegukan pertama.</p>
    <Link to="/Contact" class="black-text d-flex justify-content-left">
    <a class="btn btn-unique">Buy it</a>
    </Link>
  </div>
  </div>

  <div class="card">
  <img class="card-img-top" src="https://cf.shopee.co.id/file/0be37a3d2d177ba5b03629ddfb712398"
      alt="Card image cap"/>
    <a>
      <div class="mask rgba-white-slight"></div>
    </a>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Price Rp 45.000</h5>
    <h4 class="font-weight-bold card-title">Coffe Latte</h4>
    <p class="card-text">Caffe Latte adalah kopi kesukaan sejuta umat. Anda tidak hanya menikmati kopinya
    tetapi lukisan karya barista dijamin membuat Anda baper.</p>
    <Link to="/Contact" class="black-text d-flex justify-content-left">
    <a class="btn btn-unique">Buy it</a>
    </Link>
  </div>
  </div>

</div>

</div>

    );
  }
}
 
export default Product;