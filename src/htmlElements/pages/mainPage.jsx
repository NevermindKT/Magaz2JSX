import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../modules/productCard.jsx";
import products from "../../Data/Products.jsx";
import "../../CSS/mainPage.css"

function MainPage({ addToCart }) {
    return (
        <main className="home-page">
            <div className="main-wrapper">
                <section className="hero">
                    <h1>Добро пожаловать в наш магазин!</h1>
                    <p>Здесь вы найдете лучшие товары по отличной цене.</p>
                    <Link to="/catalog" className="btn">Перейти в каталог</Link>
                </section>

                <section className="featured-products">
                    <h2>Популярные товары</h2>
                    <div className="product-grid">
                        {!products || products.length === 0 ?
                            <p>Товары не найдены.</p> :
                            products.slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} addToCart={addToCart} />
                            ))}
                    </div>
                </section>

                <section className="text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam culpa cumque fuga fugit illo, incidunt inventore iste iusto magnam minima officia perferendis sed similique sit unde veniam voluptate. Alias dolorem eius, eligendi error explicabo laboriosam molestiae natus praesentium rerum sed unde vel voluptatibus. Corporis culpa cupiditate deleniti dolores, ea eius enim est eveniet id incidunt mollitia, provident qui repellat rerum totam veritatis voluptatibus. Inventore magni modi numquam optio quo quos sapiente tenetur, veritatis. Ab aliquam asperiores aspernatur beatae commodi consequuntur dicta dignissimos ducimus earum eius eum exercitationem nam, neque nihil odio quam quidem, recusandae rem saepe suscipit? A aliquam aspernatur, at consectetur debitis, dicta enim eveniet fugit ipsa ipsam ipsum odio odit provident rem repellendus ullam vero vitae? Asperiores laborum neque sint tempore? Assumenda blanditiis deserunt ex fugiat nostrum quis quos, repellat vero? Ab accusantium ad autem, consequuntur dignissimos distinctio, dolor dolores exercitationem inventore neque nostrum officiis perferendis praesentium quidem quis rem reprehenderit repudiandae saepe sequi voluptate. Aperiam asperiores aspernatur commodi cum debitis dolore excepturi hic id ipsa, ipsum iusto modi, nulla praesentium quas quia quidem quo quos soluta. Adipisci assumenda doloribus exercitationem facilis fuga fugit illo mollitia nesciunt nihil nulla odio pariatur quaerat quam, quo sed totam vel? Incidunt ipsa iure laboriosam laudantium minima tenetur unde! Dolor eius et facere, fuga illo minima minus neque nesciunt nisi numquam obcaecati quia repellendus repudiandae unde vero vitae, voluptatibus. A aspernatur aut dignissimos dolores facilis fugit odit qui quibusdam reiciendis veritatis.
                    </p>
                </section>
            </div>
        </main>
    );
}

export default MainPage;
