import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getShoes } from "../dataSource/api";

const Home = () => {
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

    const latestShoes = shoes.slice(0, 3);

    return (
        <div>
            {/* Halaman Beranda */}
            <section id="home" className="fluid-container bg-grey">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 mt-5 mb-5">
                            <div
                                id="carouselExampleControls"
                                className="carousel slide"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f62292171616083.64717e914062a.jpg"
                                            className="d-block w-100"
                                            alt="Gambar 1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Halaman Produk */}
            <section id="produk">
                <div className="container mt-5 p-2">
                    <h2 className="text-center">Product</h2>
                    <hr />
                    <div className="row">
                        {latestShoes.map((s) => (
                            <div className="col-md-4" key={s._id}>
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
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                navigate("all-shoes");
                            }}
                        >
                            More Products
                        </button>
                    </div>
                </div>
            </section>

            {/* Halaman About */}
            <section id="about">
                <div className="fluid-container bg-secondary text-light">
                    <div className="container mt-5 p-2">
                        <h2 className="text-center">About</h2>
                        <hr />
                        <p>
                            Perusahaan kami adalah produsen sepatu yang berdedikasi untuk menciptakan sepatu berkualitas tinggi dengan desain inovatif. Kami memiliki pengalaman bertahun-tahun dalam industri sepatu dan terus mengembangkan produk yang memenuhi kebutuhan dan keinginan pelanggan kami.
                        </p>
                        <p>
                            Di perusahaan kami, kami mengutamakan kualitas dan kenyamanan. Setiap sepatu kami diproduksi dengan menggunakan bahan-bahan terbaik dan teknik pembuatan yang canggih untuk memastikan kualitas yang optimal. Kami juga mengedepankan desain yang modern dan stylish, sehingga sepatu kami tidak hanya nyaman digunakan, tetapi juga tampak menarik.
                        </p>
                        <p>
                            Terima kasih telah mengunjungi situs web kami. Kami berharap Anda menemukan sepatu yang sesuai dengan keinginan Anda dan siap memberikan pengalaman berbelanja yang menyenangkan. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan. Kami siap melayani Anda!
                        </p>
                    </div>
                </div>
            </section>

            {/* Dark Footer */}
            <footer className="bg-dark text-light">
                <div className="container py-4">
                </div>
                <div className="text-center bg-secondary py-2">
                    <p>Copyright © 2023 - Edited By Apip</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
