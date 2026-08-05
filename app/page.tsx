"use client";
import { Header } from "@/components/Header";
import { ListBuilder } from "@/components/ListBuilder";
import { usePreferences } from "@/components/Preferences";
import { Clock3, IceCreamBowl, MapPin, Phone, ShieldCheck, ShoppingBasket, Store, WalletCards } from "lucide-react";

export default function Home(){
 const {language}=usePreferences(); const hi=language==="hi";
 const categories = hi ? [
  ["किराना","आटा, चावल, दाल और रोज़ का सामान","🌾"],["डेयरी","दूध, दही, मक्खन और पनीर","🥛"],["बिस्किट व स्नैक्स","बिस्किट, नमकीन और चिप्स","🍪"],["ठंडे पेय","कोल्ड ड्रिंक, जूस और एनर्जी ड्रिंक","🥤"],["मसाले","नमक, हल्दी, मिर्च और मसाले","🫙"],["घर का सामान","साबुन, शैम्पू और सफाई का सामान","🧴"],["फल व सब्ज़ी","मौसम के अनुसार उपलब्ध","🥬"],["आइसक्रीम","Mother Dairy के कई स्वाद","🍦"]
 ] : [
  ["Groceries","Flour, rice, pulses and daily essentials","🌾"],["Dairy","Milk, curd, butter and paneer","🥛"],["Biscuits & snacks","Biscuits, namkeen and chips","🍪"],["Cold drinks","Soft drinks, juices and energy drinks","🥤"],["Spices","Salt, turmeric, chilli and masala","🫙"],["Home care","Soap, shampoo and cleaning supplies","🧴"],["Fruit & vegetables","Available seasonally","🥬"],["Ice cream","Many Mother Dairy flavours","🍦"]
 ];
 return <main><Header/>
  <section className="hero"><div className="container heroGrid">
   <div><span className="eyebrow">{hi?"2008 से • थोक और खुदरा":"Since 2008 • Wholesale & retail"}</span>
    <h1>{hi?<>रोज़ की ज़रूरतों का <em>भरोसेमंद स्टोर</em></>:<>Your trusted store for <em>everyday needs</em></>}</h1>
    <p>{hi?"किराना, स्नैक्स, ठंडे पेय, पर्सनल केयर, घरेलू सामान और Mother Dairy आइसक्रीम—सब एक ही जगह।":"Groceries, snacks, cold drinks, personal care, household essentials and Mother Dairy ice cream—all in one place."}</p>
    <div className="heroButtons"><a href="#list" className="btn btnGreen"><ShoppingBasket size={19}/>{hi?"लिस्ट बनाएं":"Create list"}</a><a href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A" target="_blank" rel="noreferrer" className="btn btnLight"><MapPin size={19}/>{hi?"रास्ता देखें":"Directions"}</a><a href="tel:+919812329643" className="btn btnOrange"><Phone size={19}/>{hi?"कॉल करें":"Call"}</a></div>
    <div className="trustRow"><span><ShieldCheck/> {hi?"2008 से भरोसा":"Trusted since 2008"}</span><span><Store/> {hi?"थोक और खुदरा":"Wholesale & retail"}</span><span><WalletCards/> {hi?"नकद व UPI":"Cash & UPI"}</span></div>
   </div>
   <div className="heroVisual"><div className="shopIllustration">🛒<span>VGS</span></div><div className="floatingList"><small>{hi?"आज की लिस्ट":"Today’s list"}</small><b>{hi?"4 सामान":"4 items"}</b><span>{hi?"कोड":"Code"}: 4826</span></div></div>
  </div></section>
  <div className="container"><ListBuilder/></div>
  <section className="section" id="categories"><div className="container"><div className="sectionHead"><div><span className="eyebrow">{hi?"दुकान में उपलब्ध":"Available in store"}</span><h2>{hi?"सामान की श्रेणियां":"Product categories"}</h2></div><p>{hi?"हम रोज़मर्रा की ज़रूरत का बहुत सा सामान रखते हैं। उपलब्धता दुकान के स्टॉक पर निर्भर करती है।":"We stock a wide range of everyday products. Availability depends on current store stock."}</p></div><div className="categoryGrid">{categories.map(([name,desc,icon])=><article className="categoryCard" key={name}><span>{icon}</span><h3>{name}</h3><p>{desc}</p><a href="#list">{hi?"लिस्ट में जोड़ें":"Add to list"}</a></article>)}</div></div></section>
  <section className="iceSection" id="icecream"><div className="container iceGrid"><div className="iceVisual"><IceCreamBowl size={88}/><span>Mother Dairy</span></div><div><span className="eyebrow">{hi?"ठंडी खुशी":"Cool treats"}</span><h2>{hi?"Mother Dairy आइसक्रीम":"Mother Dairy ice cream"}</h2><p>{hi?"कप, कोन, कुल्फी, बार और फैमिली पैक स्टॉक के अनुसार मिलते हैं। कीमत पैक पर छपी MRP के अनुसार होगी।":"Cups, cones, kulfi, bars and family packs are available depending on stock. Prices follow the MRP printed on the pack."}</p><div className="chips"><span>{hi?"कोन":"Cones"}</span><span>{hi?"कप":"Cups"}</span><span>{hi?"कुल्फी":"Kulfi"}</span><span>{hi?"बार":"Bars"}</span><span>{hi?"फैमिली पैक":"Family packs"}</span></div><a href="#contact" className="btn btnOrange">{hi?"दुकान पर पूछें":"Ask in store"}</a></div></div></section>
  <section className="section" id="about"><div className="container aboutGrid"><div><span className="eyebrow">{hi?"हमारे बारे में":"About us"}</span><h2>{hi?"आपके पास की अपनी दुकान":"Your neighbourhood store"}</h2><p>{hi?"विशाल जनरल स्टोर 2008 से स्थानीय परिवारों की सेवा कर रहा है। हमारा लक्ष्य सही सामान, उचित कीमत और आसान सेवा देना है।":"Vishal General Store has served local families since 2008 with dependable products, fair prices and friendly service."}</p></div><div className="facts"><div><Store/><b>{hi?"थोक और खुदरा":"Wholesale & retail"}</b><span>Wholesale & Retail</span></div><div><Clock3/><b>{hi?"सुबह 6 से रात 9:30":"6 AM to 9:30 PM"}</b><span>{hi?"सभी दिन":"Every day"}</span></div><div><ShieldCheck/><b>{hi?"स्थानीय भरोसा":"Local trust"}</b><span>Since 2008</span></div></div></div></section>
  <section className="contact" id="contact"><div className="container contactGrid"><div><span className="eyebrow light">{hi?"दुकान पर आएं":"Visit our store"}</span><h2>{hi?"विशाल जनरल स्टोर":"Vishal General Store"}</h2><p>VPO Bass, Rathanthal, Bas, Haryana 123301</p><p><Clock3 size={18}/>{hi?"सुबह 6:00 बजे से रात 9:30 बजे तक":"6:00 AM to 9:30 PM"}</p></div><div className="contactActions"><a className="btn btnOrange" href="tel:+919812329643"><Phone/>98123 29643</a><a className="btn btnLight" href="tel:+918569962020"><Phone/>85699 62020</a><a className="btn btnGreen" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A"><MapPin/>Google Maps</a></div></div></section>
  <footer><div className="container">© 2026 Vishal General Store • विशाल जनरल स्टोर</div></footer>
 </main>
}
