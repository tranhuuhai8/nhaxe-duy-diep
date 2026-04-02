'use client'

import { useEffect, useRef } from 'react'
import './about.css'

export default function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const options = { threshold: 0.3 }

    const observe = (el: HTMLElement | null) => {
      if (!el) return

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show')
        } else {
          el.classList.remove('show')
        }
      }, options)

      observer.observe(el)
      return () => observer.disconnect()
    }

    const cleanImg = observe(imgRef.current)
    const cleanText = observe(textRef.current)

    return () => {
      cleanImg && cleanImg()
      cleanText && cleanText()
    }
  }, [])

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* LEFT – IMAGES */}
        <div ref={imgRef} className="about-images fade-up">
          <img
            src="xe-san-bay.jpg"
            alt="Xe ghép Duy Điệp đón khách sân bay"
            className="img-main"
          />
          <img
            src="xe-don-khach.jpg"
            alt="Xe ghép Duy Điệp đón trả tận nơi"
            className="img-sub"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div ref={textRef} className="about-content fade-up delay">

          <h4 className="about-subtitle">
            🚗 XE GHÉP DUY ĐIỆP – ĐÓN TRẢ TẬN NƠI
          </h4>

          <h2 className="about-title">
            NHANH CHÓNG – AN TOÀN – GIÁ HỢP LÝ <br />
            PHỤC VỤ 24/7 – LUÔN SẴN SÀNG
          </h2>

          <p className="about-text">
            <strong>Xe Ghép Duy Điệp</strong> chuyên cung cấp dịch vụ xe ghép,
            xe tiện chuyến từ Hà Nội đi các tỉnh và ngược lại. Với đội xe đời
            mới, tài xế kinh nghiệm và thái độ phục vụ tận tâm, chúng tôi cam
            kết mang đến trải nghiệm di chuyển an toàn, đúng giờ và thoải mái
            cho mọi khách hàng.
          </p>

          <ul className="about-list">
            <li>
              ✔ Chạy <strong>LIÊN TỤC 24/7</strong> – gọi là có xe
            </li>
            <li>
              ✔ Đón trả <strong>TẬN NƠI</strong> – không cần trung chuyển
            </li>
            <li>
              ✔ Xe sạch sẽ – tài xế thân thiện – hỗ trợ nhiệt tình
            </li>
            <li>
              ✔ Nhận bao xe riêng, gửi hàng, đi tỉnh theo yêu cầu
            </li>
          </ul>

          <a href="tel:0379850465" className="about-btn">
            📞 GỌI ĐẶT XE NGAY
          </a>
        </div>

      </div>
    </section>
  )
}