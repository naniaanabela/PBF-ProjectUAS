import React, { Component } from 'react';
import firebase from "firebase";
import firebaseConfig from "./config";
import { Link } from 'react-router-dom';

class Product extends Component {

  constructor(props){
    super(props);
    firebase.initializeApp(firebaseConfig);

    this.state = {
        listProduk: []
    }
    }

    ambilDataDariServerAPI = () => {                // fungsi untuk mengambil data dari API dengan penambahan sort dan order
      let ref = firebase.database().ref("/");
      ref.on("value", snapshot => {
          const state = snapshot.val();
          this.setState(state);   
      })
  }

    componentDidMount() {       // komponen untuk mengecek ketika compnent telah di-mount-ing, maka panggil API
      this.ambilDataDariServerAPI()  // ambil data dari server API lokal
  }

    render() {
        let productList = this.state.listProduk.map(listProduk => {
            return (
                <div class="card" style={{ width: '23.2rem' }}>
                    <img src={listProduk.image} class="card-img-top" alt="Card image cap"></img>
                    <div class="card-body">
                        <center><h5 class="card-title" style={{ fontFamily: 'arial' }}>{listProduk.title}</h5></center>
                        <p class="card-text">{listProduk.body}</p>
                        <p>{listProduk.price}</p>
                        <center><Link to="/Checkout">
                        <a className ="btn btn-black" >CheckOut</a></Link></center>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="box">
                    <div class="row">
                        {productList}
                    </div>
                </div>
            </div>
        )
    }

}


export default Product;


