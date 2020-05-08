// Step 4
// Membuat content dari setiap menu

//import all libraries
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
 
class Home extends Component {
  render() {
    return (
      <div classNname ="container">
        <center><h3>Selamat Datang di Butik Kaynan</h3></center>
        <center><h8>Hidup terlalu singkat untuk mengenakan pakaian yang membosankan</h8></center>
        <center><h8>===================================================================================================</h8></center>
        <p></p>
        <p>Butik Kaynan menyediakan bermacam-macam produk baju untuk anak, remaja, maupun orang dewasa dengan kualitas terbaik dan harga yang bersahabat. 
          Kami juga tidak jarang memberikan diskon untuk pelanggan setia kami. So, mari kunjungi website Kaynan Butik sekarang juga.
        </p>
        <br></br>
        <br></br>
        <p>
          Kunjungi Store Offline Kami <br></br>
          Butik Kaynan<br></br>
          Ruko Ciputra Kav. 5 Jl. Surabaya
        </p>

    <center><Link to="/Product">
      <a className ="btn btn-black" >Lihat Produk</a>
    </Link>
    </center>
  </div>
  );

  }
}
 
export default Home;