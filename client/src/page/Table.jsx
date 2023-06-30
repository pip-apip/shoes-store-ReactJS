import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShoes } from "../dataSource/api";
import { deleteShoes } from "../dataSource/api";

const Table = () => {
    const [shoes, setShoes] = useState([]);
    const navigate = useNavigate();

    const getAllShoes = async () => {
        const data = await getShoes();
        if (data) {
            setShoes(data);
            // console.log(data);
        } else {
            console.log("Error Get Shoes");
        }
    };

    const onDeleteShoes = async (id) => {
        try {
        await deleteShoes(id);
        getAllShoes();
        } catch (error) {
        console.log(error);
        }
    };

    useEffect(() => {
        getAllShoes();
      }, []);

    return (
        <div class="fluid-container pt-5 pb-5 bg-secondary">
            <div class="container mt-5">
                <h1 class="text-center text-light">List Sepatu</h1>
                <button
                onClick={() => {
                    navigate("/tambah-shoes");
                }} class="btn btn-primary mb-2">Tambah</button>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Foto</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Harga</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoes?.map((s) => (
                        <tr key={s._id}  className="text-center">
                            <th>
                                <img className="img-dash" src={s.foto} alt=""/>
                            </th>
                            <td>{s.nama}</td>
                            <td>{s.kategori}</td>
                            <td>{s.harga}</td>
                            <td>
                                <button
                                onClick={() => {
                                    navigate("edit-shoes/" + s._id);
                                }} className="btn btn-warning mx-2">Ubah</button>
                                <button 
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    onDeleteShoes(s._id);
                                }}className="btn btn-danger">Hapus</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table;