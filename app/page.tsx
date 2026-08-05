import { Header } from "@/components/Header";
import { ListBuilder } from "@/components/ListBuilder";
import { Clock3, IceCreamBowl, MapPin, Phone, ShieldCheck, ShoppingBasket, Store, WalletCards } from "lucide-react";

const categories = [
  ["किराना", "आटा, चावल, दाल और रोज़ का सामान", "🌾"],
  ["डेयरी", "दूध, दही, मक्खन और पनीर", "🥛"],
  ["बिस्किट व स्नैक्स", "बिस्किट, नमकीन, चिप्स", "🍪"],
  ["ठंडे पेय", "कोल्ड ड्रिंक, जूस और एनर्जी ड्रिंक", "🥤"],
  ["मसाले", "नमक, हल्दी, मिर्च और मसाले", "🫙"],
  ["घर का सामान", "साबुन, शैम्पू और सफाई का सामान", "🧴"],
  ["फल व सब्ज़ी", "मौसम के अनुसार उपलब्ध", "🥬"],
  ["आइसक्रीम", "Mother Dairy के कई स्वाद", "🍦"]
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <span className="eyebrow">2008 से • थोक और खुदरा</span>
            <h1>रोज़ की ज़रूरतों का <em>भरोसेमंद स्टोर</em></h1>
            <p>किराना, स्नैक्स, ठंडे पेय, पर्सनल केयर, घरेलू सामान और Mother Dairy आइसक्रीम—सब एक ही जगह।</p>
            <div className="heroButtons">
              <a href="#list" className="btn btnGreen"><ShoppingBasket size={19}/> लिस्ट बनाएं</a>
              <a href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A" target="_blank" rel="noreferrer" className="btn btnLight"><MapPin size={19}/> रास्ता देखें</a>
              <a href="tel:+919812329643" className="btn btnOrange"><Phone size={19}/> कॉल करें</a>
            </div>
            <div className="trustRow">
              <span><ShieldCheck/> 2008 से भरोसा</span><span><Store/> थोक और खुदरा</span><span><WalletCards/> नकद व UPI</span>
            </div>
          </div>
          <div className="heroVisual">
            <div className="shopIllustration">🛒<span>VGS</span></div>
            <div className="floatingList"><small>आज की लिस्ट</small><b>4 सामान</b><span>कोड: 4826</span></div>
          </div>
        </div>
      </section>

      <div className="container"><ListBuilder /></div>

      <section className="section" id="categories">
        <div className="container">
          <div className="sectionHead"><div><span className="eyebrow">दुकान में उपलब्ध</span><h2>सामान की श्रेणियां</h2></div><p>हम रोज़मर्रा की ज़रूरत का बहुत सा सामान रखते हैं। उपलब्धता दुकान के स्टॉक पर निर्भर करती है।</p></div>
          <div className="categoryGrid">{categories.map(([name, desc, icon]) => <article className="categoryCard" key={name}><span>{icon}</span><h3>{name}</h3><p>{desc}</p><button>लिस्ट में जोड़ें</button></article>)}</div>
        </div>
      </section>

      <section className="iceSection" id="icecream">
        <div className="container iceGrid">
          <div className="iceVisual"><IceCreamBowl size={100}/><span>Mother Dairy</span></div>
          <div><span className="eyebrow">ठंडी खुशी</span><h2>Mother Dairy आइसक्रीम</h2><p>कप, कोन, कुल्फी, बार और फैमिली पैक दुकान में उपलब्धता के अनुसार मिलते हैं। कीमत पैक पर छपी MRP के अनुसार होगी।</p><div className="chips"><span>कोन</span><span>कप</span><span>कुल्फी</span><span>बार</span><span>फैमिली पैक</span></div><a href="#contact" className="btn btnOrange">दुकान पर पूछें</a></div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container aboutGrid">
          <div><span className="eyebrow">हमारे बारे में</span><h2>आपके पास की अपनी दुकान</h2><p>विशाल जनरल स्टोर 2008 से स्थानीय परिवारों की सेवा कर रहा है। हमारा लक्ष्य सही सामान, उचित कीमत और आसान सेवा देना है।</p></div>
          <div className="facts"><div><Store/><b>थोक और खुदरा</b><span>Wholesale & Retail</span></div><div><Clock3/><b>सुबह 6 से रात 9:30</b><span>सभी दिन</span></div><div><ShieldCheck/><b>स्थानीय भरोसा</b><span>Since 2008</span></div></div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contactGrid">
          <div><span className="eyebrow light">दुकान पर आएं</span><h2>विशाल जनरल स्टोर</h2><p>VPO Bass, Rathanthal, Bas, Haryana 123301</p><p><Clock3 size={18}/> सुबह 6:00 बजे से रात 9:30 बजे तक</p></div>
          <div className="contactActions"><a className="btn btnOrange" href="tel:+919812329643"><Phone/> 98123 29643</a><a className="btn btnLight" href="tel:+918569962020"><Phone/> 85699 62020</a><a className="btn btnGreen" target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A"><MapPin/> Google Maps</a></div>
        </div>
      </section>
      <footer><div className="container">© 2026 Vishal General Store • विशाल जनरल स्टोर</div></footer>
    </main>
  );
}
