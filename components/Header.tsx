"use client";
import Link from "next/link";
import { Menu, MapPin, Phone, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { usePreferences } from "./Preferences";

export function Header() {
  const [open,setOpen]=useState(false);
  const {language,setLanguage,theme,toggleTheme}=usePreferences();
  const hi=language==="hi";
  useEffect(()=>{
    const close=()=>setOpen(false);
    window.addEventListener("hashchange",close);
    return()=>window.removeEventListener("hashchange",close);
  },[]);
  const nav=[
    ["#categories",hi?"सामान":"Products"],
    ["#icecream",hi?"आइसक्रीम":"Ice Cream"],
    ["#about",hi?"हमारे बारे में":"About"],
    ["#contact",hi?"संपर्क":"Contact"]
  ];
  return <>
    <header className="header">
      <div className="container headerInner">
        <Link href="/" aria-label="Vishal General Store home"><Logo /></Link>
        <nav className="desktopNav">{nav.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav>
        <div className="headerActions">
          <label className="languageSelect" aria-label="Choose language">
            <select value={language} onChange={e=>setLanguage(e.target.value as "hi"|"en")}>
              <option value="hi">हिंदी</option><option value="en">English</option>
            </select>
          </label>
          <button className="themeBtn" onClick={toggleTheme} aria-label={theme==="light"?"Dark theme":"Light theme"}>{theme==="light"?<Moon/>:<Sun/>}</button>
          <a className="btn btnGreen small desktopAction" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A" target="_blank" rel="noreferrer"><MapPin size={17}/>{hi?"रास्ता":"Directions"}</a>
          <a className="btn btnOrange small desktopAction" href="tel:+919812329643"><Phone size={17}/>{hi?"कॉल":"Call"}</a>
          <button className="menuBtn" onClick={()=>setOpen(true)} aria-expanded={open} aria-label={hi?"मेन्यू खोलें":"Open menu"}><Menu /></button>
        </div>
      </div>
    </header>
    {open && <div className="drawerBackdrop" onClick={()=>setOpen(false)}>
      <aside className="mobileDrawer" onClick={e=>e.stopPropagation()}>
        <div className="drawerTop"><Logo/><button className="themeBtn" onClick={()=>setOpen(false)} aria-label="Close"><X/></button></div>
        <nav>{nav.map(([href,label])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
        <div className="drawerButtons">
          <a className="btn btnGreen" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A" target="_blank" rel="noreferrer"><MapPin size={18}/>{hi?"रास्ता देखें":"Get directions"}</a>
          <a className="btn btnOrange" href="tel:+919812329643"><Phone size={18}/>{hi?"कॉल करें":"Call store"}</a>
        </div>
      </aside>
    </div>}
  </>;
}
