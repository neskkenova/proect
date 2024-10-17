import React from 'react';
import './products.css';

const Products = () => {
    const products = [
        { img: 'img-1.jpg', price: '1890tg', oldPrice: '2100tg', discount: '-10%', id: 1 },
        { img: 'img-2.jpg', price: '1445tg', oldPrice: '1700tg', discount: '-15%', id: 2 },
        { img: 'img-3.jpg', price: '1805tg', oldPrice: '1900tg', discount: '-5%', id: 3 },
        { img: 'img-4.jpg', price: '960tg', oldPrice: '1200tg', discount: '-20%', id: 4 },
        { img: 'img-5.jpg', price: '1162tg', oldPrice: '1400tg', discount: '-17%', id: 5 },
        { img: 'img-6.jpg', price: '970tg', oldPrice: '1000tg', discount: '-3%', id: 6 },
        { img: 'img-7.jpg', price: '1230tg', oldPrice: '1500tg', discount: '-18%', id: 7 },
        { img: 'img-8.jpg', price: '1440tg', oldPrice: '1600tg', discount: '-10%', id: 8 },
    ];

    return (
        <>
            <section className="products">
                <h2 className="title-h2">Біздің өнімдер</h2>
                <div className="box-container">
                    {products.map((product) => (
                        <div className="box" key={product.id}>
                            <span className="discount">{product.discount}</span>
                            <div className="image">
                                <img src={product.img} alt={`Product ${product.id}`} />
                            </div>
                            <div className="content">
                                <div className="price">
                                    {product.price} <span>{product.oldPrice}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Products;
