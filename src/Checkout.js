import React, { Component } from 'react';
import firebase from "firebase";
import firebaseConfig from "./config";

class Checkout extends Component {

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
        let checkoutList = this.state.listProduk.map(listProduk => {
            return (
                <div class="container"> 
                <p>CHECK OUT</p>    
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Nama Produk</th>
                                <th>Harga</th>
                                <th>Deskripsi Produk</th>
                                <th>Gambar Produk</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{listProduk.judul}</td>
                                <td>{listProduk.price}</td>
                                <td>{listProduk.isi}</td>
                                <td><img src={listProduk.image} width="50px"/></td>
                                <td><button className="btn btn-sm btn-warning" 
                                onClick={() => { if (window.confirm('Apakah anda yakin menghapus produk ini?')) 
                                props.hapusProduk(props.idProduk)}} > Hapus</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>  
            )
        })
        return (
            <div className="container">
                <div className="box">
                    <div class="row">
                        {checkoutList}
                    </div>
                </div>
            </div>
        )
    }

}


export default Checkout;


