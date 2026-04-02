import './services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">

        <h2 className="services-title">
          DỊCH VỤ XE GHÉP DUY ĐIỆP
        </h2>

        <p className="services-subtitle">
          Chuyên tuyến Hà Nội ⇄ Nam Định – Đón tận nơi – Đi ngay trong ngày
        </p>

        <div className="services-list">

          <div className="service-item">
            <span className="icon">🚗</span>
            <h3>Xe ghép Hà Nội – Nam Định</h3>
            <p>
              Chạy liên tục mỗi ngày, 30 phút / chuyến, đón trả tận nơi,
              không trung chuyển, tiết kiệm thời gian
            </p>
          </div>

          <div className="service-item">
            <span className="icon">✈️</span>
            <h3>Đưa đón sân bay Nội Bài</h3>
            <p>
              Đưa đón đúng giờ, hỗ trợ hành lý, tài xế kinh nghiệm,
              phù hợp cho khách đi công tác và du lịch
            </p>
          </div>

          <div className="service-item">
            <span className="icon">🏥</span>
            <h3>Đưa đón bệnh viện – trường học</h3>
            <p>
              Nhận đón tận nhà đến bệnh viện, trường học, đảm bảo an toàn,
              thuận tiện cho người già và trẻ nhỏ
            </p>
          </div>

          <div className="service-item">
            <span className="icon">🚐</span>
            <h3>Bao xe riêng theo yêu cầu</h3>
            <p>
              Bao xe 5 – 7 chỗ, đi riêng tư, linh hoạt thời gian,
              phù hợp đi công việc, du lịch, về quê
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}