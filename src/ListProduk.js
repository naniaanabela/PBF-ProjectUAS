import React from "react";

const ListProduk = (props) => {
    return (
        <div class="container">     
            <table class="table table-striped">
                <tbody>
                    <tr>
                    <td>{props.judul}</td>
                    <td>{props.price}</td>
                    <td>{props.isi}</td>
                    <td><img src={props.image} width="50px"/></td>
                    <td><button className="btn btn-sm btn-warning" 
                    onClick={() => { if (window.confirm('Apakah anda yakin menghapus produk ini?')) 
                    props.hapusProduk(props.idProduk)}} > Hapus</button></td>
                    </tr>
                    </tbody>
            </table>
        </div>
    )
}

export default ListProduk;