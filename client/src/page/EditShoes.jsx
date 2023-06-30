import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getShoesById, updateShoes } from "../dataSource/api";

const EditShoes = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [shoes, setShoes] = useState({});
    const [shoesPayload, setShoesPayload] = useState({});

    const onSubmitEditShoes = async (ev) => {
        ev.preventDefault();
        const res = await updateShoes(params.id, shoesPayload);
        if (res) {
            navigate("/");
        } else {
            console.log("Error Edit Shoes");
        }
    };    

    const onFetchShoes = async () => {
        const data = await getShoesById(params.id);
        if (data) {
            setShoes(data);
        } else {
            console.log("Error Get Shoes by id");
        }
    };

    useEffect(() => {
        if (params) {
            onFetchShoes();
        }
    }, [params]);


    return (
        <div class="fluid-container pt-5" >
            <div class="container mt-5">
                <h1 class="text-center">Form Edit Shoes</h1>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label className="form-label">Nama Sepatu</label>
                                        <input 
                                        defaultValue={shoes.nama}
                                        onChange={(ev) => {
                                            setShoesPayload({
                                            ...shoesPayload,
                                            nama: ev.target.value,
                                            });
                                        }} type="text" className="form-control" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Kategori Sepatu</label>
                                        <input 
                                        defaultValue={shoes.kategori}
                                        onChange={(ev) => {
                                            setShoesPayload({
                                            ...shoesPayload,
                                            kategori: ev.target.value,
                                            });
                                        }} type="text" className="form-control" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Harga Sepatu</label>
                                        <input 
                                        defaultValue={shoes.harga}
                                        onChange={(ev) => {
                                            setShoesPayload({
                                            ...shoesPayload,
                                            harga: ev.target.value,
                                            });
                                        }} type="text" className="form-control" required/>
                                    </div>
                                    <div class="mb-3">
                                        <label className="form-label">Foto Sepatu</label>
                                        <input 
                                        defaultValue={shoes.foto}
                                        onChange={(ev) => {
                                            setShoesPayload({
                                            ...shoesPayload,
                                            foto: ev.target.value,
                                            });
                                        }} type="text" className="form-control" placeholder="https:// ....." required/>
                                    </div>
                                    <button 
                                    onClick={(ev) => {
                                        onSubmitEditShoes(ev);
                                    }} type="submit" class="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>
                
            </div>
        </div>
    )
};

export default EditShoes;