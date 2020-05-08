import React from "react";

const ListProduk = (props) => {
    return (
        <div className="produk">
            {/* <div className="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>
            </div> */}
            <div className="konten-artikel">
                <div className="judul-produk">{props.judul}</div>
                <p><img src={props.image} width="50px"/></p>
                <p className="price-produk">{props.price}</p>
                <p className="isi-produk">{props.isi}</p>
                <button className="btn btn-sm btn-warning" 
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus produk ini?')) 
                    props.hapusProduk(props.idProduk)}} > 
                    Hapus
                </button>
            </div>
        </div>
    )
}

export default ListProduk;