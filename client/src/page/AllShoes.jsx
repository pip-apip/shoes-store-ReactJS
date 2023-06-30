import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShoes } from "../dataSource/api";

const AllShoes = () => {

    const [shoes, setShoes] = useState([]);
    const navigate = useNavigate();

    const getAllShoes = async () => {
        const data = await getShoes();
        if (data) {
            setShoes(data);
        } else {
            console.log("Error Get Shoes");
        }
    };

    useEffect(() => {
        getAllShoes();
    }, []);


    return (
        <div class="fluid-container pt-5">
            <div class="container mt-5">
                <h2 className="text-center">All Product</h2>
                <hr />
                <div className="row p-5">
                    {shoes.map((s) => (
                        <div className="col-md-4 mt-3" key={s._id}>
                            <div className="card">
                                <img
                                    src={s.foto}
                                    className="card-img-top"
                                    alt={s.nama}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {s.nama}
                                    </h5>
                                    <p className="card-text">
                                        Kategori: {s.kategori}
                                    </p>
                                    <p className="card-text">
                                        Harga: Rp {s.harga}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllShoes;