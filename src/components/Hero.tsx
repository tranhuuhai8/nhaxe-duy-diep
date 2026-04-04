'use client'
import './hero.css'

export default function Hero() {
  return (
    <section className="hero">

      {/* CLICK ẢNH = GỌI */}
      <a href="tel:0912203933" className="hero-image">
        <img src="/hero.jpg" alt="Xe ghép Duy Điệp" />
      </a>

      {/* CTA đặt riêng bên dưới */}
      <div className="hero-cta">
        <a href="tel:0912203933" className="btn call">
          📞 GỌI NGAY
        </a>

        <a
          href="https://zalo.me/0912203933"
          target="_blank"
          className="btn zalo"
        >
          💬 CHAT ZALO
        </a>
      </div>

    </section>
  )
}