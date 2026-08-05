"use client";
import Link from "next/link";
import { Menu, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <Link href="/"><Logo /></Link>
        <nav className="desktopNav">
          <a href="#categories">सामान</a>
          <a href="#icecream">आइसक्रीम</a>
          <a href="#about">हमारे बारे में</a>
          <a href="#contact">संपर्क</a>
        </nav>
        <div className="headerActions">
          <a className="btn btnGreen small" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A" target="_blank" rel="noreferrer"><MapPin size={17}/> रास्ता देखें</a>
          <a className="btn btnOrange small" href="tel:+919812329643"><Phone size={17}/> कॉल करें</a>
          <button className="menuBtn" aria-label="Menu"><Menu /></button>
        </div>
      </div>
    </header>
  );
}
