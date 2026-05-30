import { products } from "../data";

export default function Products() {
  return (
    <section className="section section-alt" id="products">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Nuestra selección</span>
          <h2 className="section-title">Encuentra tu café ideal</h2>
          <p className="section-sub">
            Tres perfiles distintos, una misma obsesión por la calidad.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <article className="product-card" key={p.name}>
              <div className="product-media">
                <span className="product-tag">{p.tag}</span>
                <span role="img" aria-label={p.name}>{p.emoji}</span>
              </div>
              <div className="product-body">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div className="product-foot">
                  <span className="product-price">
                    {p.price} <small>{p.unit}</small>
                  </span>
                  <a href="#contact" className="btn btn-primary" style={{ padding: "9px 18px" }}>
                    Comprar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
