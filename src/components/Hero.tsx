'use client'

import { useEffect, useRef } from 'react'
import './hero.css'

export default function Hero() {
  const carRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = carRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (window.innerWidth <= 768) return
        el.classList.toggle('show', entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      <div className="hero-container">
        {/* CONTENT */}
        <div className="hero-content">
          <span className="hero-badge">🚗 Xe Ghép Duy Điệp</span>

          <h1>
            XE GHÉP
            <br />
            <span>HÀ NỘI ⇄ NAM ĐỊNH</span>
          </h1>

          <p className="hero-desc">
            Đón tận nơi – Không chờ đợi – Đi ngay trong ngày
          </p>

          <p className="hero-price">
            Giá chỉ từ <strong>250.000đ / người</strong>
          </p>

          <div className="hero-highlight">
            ✔ Đón tại nhà – sân bay – bệnh viện – trường học  
            <br />
            ✔ Chạy liên tục 30 phút / chuyến – phục vụ 24/7
          </div>

          <div className="hero-actions">
            <a href="tel:0379850465" className="hero-hotline">
              📞 0379 850 465
            </a>

            <a href="#booking" className="hero-btn">
              ĐẶT XE NGAY
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div ref={carRef} className="hero-image scroll-reveal">
          <img src="car.png" alt="Xe ghép Duy Điệp" className="car-pro" />
        </div>
      </div>
    </section>
  )
}