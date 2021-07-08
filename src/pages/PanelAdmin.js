import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import 'firebase/storage';
import { getFirestore, storage } from '../firebase/firebase';


function PanelAdmin(props) {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [ProductId, setProductsId] = useState();
    const [item, setItems] = useState([]);

    function addItem() {

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const stock = document.getElementById("stock").value;
        const category = document.getElementById("category").value;
        const sku = document.getElementById("sku").value;
        const imgUpload = document.getElementById("imgUpload").files[0];
        console.log(imgUpload.name);

        // CARGAR IMAGENES

        const storageRef = storage().ref(`/imgProducts/${sku}`);
        console.log(storageRef);
        const imgVar = imgUpload.name;
        console.log(storageRef + "/" + imgVar);
        storageRef.put(imgUpload).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
            storageRef.getDownloadURL().then(function (url) {

                // var img = document.getElementById('myimg');
                // img.src = url;
                cargarDatos(url);
            }).catch(function (error) {

            });

        });

        // CARGA LOS DATOS DE PRODUCTO
        function cargarDatos(url) {
            const db = getFirestore();
            const products = db.collection("products");
            const newProducts = {
                title: title,
                description: description,
                price: price,
                stock: stock,
                sku: sku,
                utl: url,
                category: category
            }
            products.add(newProducts).then(({ id }) => {
                setProductsId(id);
            }).catch(e => {
                setError(e);
            }).finally(() => {
                setLoading(false);
            })
        }


    }
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("products");
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
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5 p-5 shadow">
                    <div className="row ">

                        <div className="col-md-12">
                            <label for="title" className="form-label">Titulo</label>
                            <input type="text" className="form-control" id="title" />
                        </div>
                        <div className="col-md-12">
                            <label for="description" className="form-label">Descripcion</label>
                            <textarea type="text" className="form-control" id="description" />
                        </div>
                        <div className="col-6">
                            <label for="price" className="form-label">Precio</label>

                            <input type="text" className="form-control" id="price" />
                        </div>
                        <div className="col-6">
                            <label for="stock" className="form-label">Stock</label>
                            <input type="text" className="form-control" id="stock" />
                        </div>
                        <div className="col-6">
                            <label for="sku" className="form-label">SKU</label>
                            <input type="text" className="form-control" id="sku" />
                        </div>
                        <div className="col-6">
                            <label for="stock" className="form-label">Categoria</label>
                            <select className="form-select form-control " id="category" aria-label="Default select example">
                                <option selected>...</option>
                                <option value="Pantalones">Pantalones</option>
                                <option value="Remeras">Remeras</option>
                                <option value="Camisas">Camisas</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <label for="stock" className="form-label">Imagen de Producto</label>
                            <input type="file" className="form-control" id="imgUpload" />
                        </div>


                        <div className="col-12">
                            <button type="submit" onClick={addItem} className="btn btn-primary mt-2">Cargar Producto</button>
                        </div>
                    </div>

                </div>

            </div>


            <div class="row mt-5">
                {item.length > 0 ? (
                    item.map((data, index) => {
                        return (
                            <div class="col-3">
                                <div class="card text-center" >
                                    <img src={data.utl} class="card-img-top h-25" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{data.title}</h5>
                                        <h3 class="card-text text-success">$ {data.price}</h3>
                                        <p>Stock DIsponible: {data.stock}</p>
                                        <a href="#" class="btn btn-primary w-100">ver</a>
                                    </div>
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


        </div>
    );
}

export default PanelAdmin;