'use client'

import { useEffect, useRef } from 'react'
import './advantages.css'

export default function Advantages() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const items = section.querySelectorAll('.adv-item')
    const right = section.querySelector('.advantages-right') as HTMLElement | null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            const el = item as HTMLElement
            el.classList.add('show')
            el.style.transitionDelay = `${index * 0.12}s`
          })

          right?.classList.add('show')
        } else {
          items.forEach((item) => {
            const el = item as HTMLElement
            el.classList.remove('show')
            el.style.transitionDelay = '0s'
          })

          right?.classList.remove('show')
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="advantages" className="advantages">
      <div ref={sectionRef} className="advantages-container">

        <h2 className="advantages-title fade-up">
          TẠI SAO NÊN CHỌN <br /> XE GHÉP DUY ĐIỆP?
        </h2>

        <div className="advantages-content">

          {/* LEFT */}
          <div className="advantages-list">

            <div className="adv-item fade-up">
              <span>🚗</span>
              <p>
                Xe <strong>đời mới, sạch sẽ</strong>, điều hòa mát lạnh
              </p>
            </div>

            <div className="adv-item fade-up">
              <span>⏱</span>
              <p>
                <strong>Không chờ đợi</strong> – chạy liên tục 30 phút / chuyến
              </p>
            </div>

            <div className="adv-item fade-up">
              <span>📍</span>
              <p>
                Đón trả <strong>tận nơi</strong> – không trung chuyển
              </p>
            </div>

            <div className="adv-item fade-up">
              <span>🕒</span>
              <p>
                Phục vụ <strong>24/7</strong> – gọi là có xe
              </p>
            </div>

            <div className="adv-item fade-up">
              <span>💰</span>
              <p>
                Giá hợp lý chỉ từ <strong>250.000đ/người</strong>
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="advantages-right fade-up">
            <img src="noi-that-xe.png" alt="Nội thất xe Duy Điệp" />

            <a href="tel:0379850465" className="hotline-btn">
              📞 GỌI NGAY: <strong>0379 850 465</strong>
            </a>

            <p className="note">
              (*) Nên đặt xe trước 1 – 2 tiếng để có chuyến sớm nhất
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}