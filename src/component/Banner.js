import { data } from 'jquery';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { getFirestore } from '../firebase/firebase'

function Banner(props) {
    const [item, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("item");
        itemCollection
            .get()
            .then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log("sin resultados");
                }
                setItems(querySnapshot.docs.map((doc) => doc.data()));
            })
            .catch((error) => {
                console.log("Error search items", error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, []);

    
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                {item.length > 0 ? (
                    item.map((data, index) => {
                        return (

                            <div class="carousel-item active">
                                <img src={data.url} class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>{data.title}</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>



                        );
                    })
                ) : (
                    <h3 className="col-12 text-center mt-5">
                        <Spinner animation="border" variant="info" />
                    </h3>
                )}
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Banner;