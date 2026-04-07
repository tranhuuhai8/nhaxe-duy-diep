'use client'
import './booking-form.css'

export default function BookingForm() {
  return (
    <section id="booking" className="booking">
      <div className="booking-container">

        {/* LEFT */}
        <div className="booking-info">
          <h2>ĐẶT XE NHANH – ĐÓN TRẢ TẬN NƠI</h2>

          <p>
            Nhà xe <strong>Minh Ngọc</strong> nhận đặt xe tiện chuyến
            Hà Nội ⇄ Nam Định, đưa đón sân bay, bệnh viện, nhà riêng.
          </p>

          <ul>
            <li>✔ 30 phút / 1 chuyến</li>
            <li>✔ Xe đời mới – sạch sẽ</li>
            <li>✔ Giá chỉ từ <strong>250.000đ/người</strong></li>
          </ul>

          <div className="booking-hotline">
            📞 HOTLINE: <strong>0912 203 933</strong>
          </div>
        </div>

        {/* RIGHT */}
        <div className="booking-cta">
          <h3>ĐẶT XE NGAY</h3>

          <a href="tel:0379850465" className="btn-main">
            📞 GỌI NGAY
          </a>

          <a
            href="https://zalo.me/0379850465"
            target="_blank"
            className="btn-secondary"
          >
            💬 CHAT ZALO
          </a>

          <p className="cta-note">
            ⏰ Hoạt động 24/7 – phản hồi nhanh
          </p>
        </div>

      </div>
    </section>
  )
}