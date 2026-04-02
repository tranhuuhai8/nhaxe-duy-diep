'use client'

import { useState } from 'react'
import './header.css'

export default function Header() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="header">
      <div className="header-container">
        {/* BRAND */}
        <a href="#hero" className="header-brand" onClick={closeMenu}>
          🚗 Xe Ghép <strong>Duy Điệp</strong>
        </a>

        {/* DESKTOP NAV */}
        <nav className="header-nav">
          <a href="#hero">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#services">Dịch vụ</a>
          <a href="#price">Bảng giá</a>
          <a href="#advantages">Ưu điểm</a>
        </nav>

        {/* ACTION */}
        <div className="header-actions">
          <a href="tel:0379850465" className="header-hotline">
            📞 0379 850 465
          </a>

          <a href="#booking" className="header-btn">
            ĐẶT XE
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="header-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu">
          <a href="#hero" onClick={closeMenu}>Trang chủ</a>
          <a href="#about" onClick={closeMenu}>Giới thiệu</a>
          <a href="#services" onClick={closeMenu}>Dịch vụ</a>
          <a href="#price" onClick={closeMenu}>Bảng giá</a>
          <a href="#advantages" onClick={closeMenu}>Ưu điểm</a>

          <a href="tel:0379850465" className="mobile-hotline" onClick={closeMenu}>
            📞 Gọi ngay
          </a>

          <a href="#booking" className="mobile-btn" onClick={closeMenu}>
            ĐẶT XE NGAY
          </a>
        </div>
      )}
    </header>
  )
}