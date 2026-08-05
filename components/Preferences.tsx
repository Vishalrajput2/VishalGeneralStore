"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Language = "hi" | "en";
type Theme = "light" | "dark";
type Prefs = { language: Language; setLanguage:(v:Language)=>void; theme:Theme; toggleTheme:()=>void };
const PreferencesContext = createContext<Prefs | null>(null);

export function PreferencesProvider({ children }:{children:React.ReactNode}) {
  const [language,setLanguage] = useState<Language>("hi");
  const [theme,setTheme] = useState<Theme>("light");
  useEffect(()=>{
    const savedLang = localStorage.getItem("vgs-language") as Language | null;
    const savedTheme = localStorage.getItem("vgs-theme") as Theme | null;
    if(savedLang === "hi" || savedLang === "en") setLanguage(savedLang);
    if(savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
  },[]);
  useEffect(()=>{
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("vgs-theme",theme);
  },[theme]);
  useEffect(()=>{
    document.documentElement.lang = language;
    localStorage.setItem("vgs-language",language);
  },[language]);
  const value = useMemo(()=>({language,setLanguage,theme,toggleTheme:()=>setTheme(v=>v==="light"?"dark":"light")}),[language,theme]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}
export function usePreferences(){
  const ctx=useContext(PreferencesContext);
  if(!ctx) throw new Error("usePreferences must be used within PreferencesProvider");
  return ctx;
}
