import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h3>XE GHÉP DUY ĐIỆP</h3>
          <p>
            Chuyên xe ghép Hà Nội ⇄ Nam Định <br />
            Đón tận nơi – Đi ngay – Giá hợp lý
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <p>HOTLINE</p>
          <a href="tel:0379850465" className="footer-hotline">
            0379 850 465
          </a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Xe Ghép Duy Điệp. All rights reserved.
      </div>
    </footer>
  )
}