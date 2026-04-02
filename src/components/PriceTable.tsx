import './price-table.css'

export default function PriceTable() {
  return (
    <section id="price" className="price-section">
      <div className="price-container">

        <h2 className="price-title">
          BẢNG GIÁ TUYẾN HÀ NỘI ⇄ NAM ĐỊNH
        </h2>

        <p className="price-sub">
          Giá niêm yết rõ ràng – Đón tận nơi – Không phát sinh
        </p>

        {/* LIST GIÁ */}
        <div className="price-list">

          <div className="price-item">
            <div className="price-route">Hà Nội ⇄ Giao Thủy</div>
            <div className="price-value">250.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Hà Nội ⇄ Xuân Trường</div>
            <div className="price-value">250.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Hà Nội ⇄ Trực Ninh</div>
            <div className="price-value">250.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Hà Nội ⇄ Nam Trực</div>
            <div className="price-value">250.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Hà Nội ⇄ TP Nam Định</div>
            <div className="price-value">250.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Sân bay Nội Bài ⇄ Nam Định</div>
            <div className="price-value">450.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Bao xe riêng 5 chỗ</div>
            <div className="price-value">900.000đ</div>
          </div>

          <div className="price-item">
            <div className="price-route">Bao xe riêng 7 chỗ</div>
            <div className="price-value">1.100.000đ</div>
          </div>

        </div>

        {/* CAM KẾT */}
        <div className="price-commit">
          ✔ Không ghép quá số người quy định  
          <br />
          ✔ Báo giá trước – không tăng giá  
          <br />
          ✔ Chạy liên tục mỗi ngày – phục vụ 24/7
        </div>

        {/* CTA */}
        <div className="price-actions">
          <a href="tel:0379850465" className="price-hotline">
            📞 Gọi ngay: 0379 850 465
          </a>

          <a href="#booking" className="price-btn">
            ĐẶT XE NGAY
          </a>
        </div>

        <p className="price-note">
          (*) Giá có thể thay đổi vào ngày lễ, Tết. Vui lòng liên hệ để được báo giá chính xác.
        </p>

      </div>
    </section>
  )
}