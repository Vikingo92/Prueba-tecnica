import React from 'react'
import { url } from '../helpers/url';
import axios from 'axios';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';

export const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [addProductos, setAddProductos] = useState({
        nombre:'',
        precio:'',
        talla:'',
        color:'',
        descripcion:'',
        imagen:''
    });

    const { nombre, precio, talla, color, descripcion, imagen} = addProductos;


    // Get: Obtener la informacion.
    const getData = () => {
        axios.get(url)
            .then(res => {
                setProductos(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // DELETE, eliminar.
    const deleteData = (id) => {
        axios.delete(url + id)
            .then(res => {
                getData();
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // POST -
    const addData = () => {
        axios.post(url, addProductos)
            // .then(res => setAddProductos(res.data))
            // .catch(error => console.log(error))
        }

    console.log(productos);

    // Hook.
    useEffect(() => {
        getData()
    }, []);


    return (
        <div className='container flex'>
            {
                productos.map(products => (
                    <div key={products.id} className='card mb-5 mt-5 width: 18rem'>
                        <div>
                            <h1>{products.nombre}</h1>
                            <img className='img' src={products.imagen} style={{ width: "200px" }} />
                            <p></p>
                        </div>
                        <div className='card-body'>
                            <div>
                                <h3>${products.precio}</h3>
                                <p>Tallas: {products.talla}</p>
                            </div>
                            <div>
                                <h3>Colores: {products.color}</h3>
                                <p className='text-center'>{products.descripcion}</p>
                            </div>
                            <div>
                                <button className='btn btn-success mr-5'  onClick={() => addData(products)}>Agregar</button>
                                <button className='btn btn-danger' onClick={() => deleteData(products.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}
