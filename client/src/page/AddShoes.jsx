import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addShoes } from "../dataSource/api";

const AddShoes = () => {
    const navigate = useNavigate();

    const [shoesPayload, setShoesPayload] = useState({
        nama: "",
        kategori: "",
        harga: "",
        foto: "",
      });
    
      const onSubmitAddShoes = async (ev) => {
        ev.preventDefault();
        const res = await addShoes(shoesPayload);
        if (res) {
          navigate("/");
        } else {
          console.log("Error Add New Shoes");
        }
      };

    return (
        <div class="fluid-container pt-5" >
            <div class="container mt-5">
                <h1 class="text-center">Form Add Shoes</h1>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div class="card">
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label className="form-label">Nama Sepatu</label>
                                        <input 
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
                                        onChange={(ev) => {
                                            setShoesPayload({
                                            ...shoesPayload,
                                            foto: ev.target.value,
                                            });
                                        }} type="text" className="form-control" placeholder="https:// ....." required/>
                                    </div>
                                    <button onClick={onSubmitAddShoes} type="submit" class="btn btn-primary">Submit</button>
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

export default AddShoes;