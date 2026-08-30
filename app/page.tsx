"use client";

const categories=[
 ["01","Kirana & Staples","Atta, rice, dal, oil, sugar, salt & everyday essentials.","◫"],
 ["02","Snacks & Beverages","Biscuits, namkeen, chips, cold drinks, juices & more.","◇"],
 ["03","Personal Care","Soap, shampoo, toothpaste and daily grooming essentials.","✦"],
 ["04","Home Care","Detergent, cleaners and everything your home needs.","⌂"],
 ["05","Dairy & Frozen","Milk, curd, butter and chilled favourites.","○"],
 ["06","Ice Cream","Mother Dairy cups, cones, kulfi, bars & family packs.","△"]
];
const reviews=[
 ["“Best shop in our area. Everything is available and the service is very good.”","LOCAL CUSTOMER"],
 ["“Reasonable prices, genuine products and always helpful.”","REGULAR CUSTOMER"],
 ["“Our family has been shopping here for years.”","LOCAL FAMILY"]
];
export default function Home(){return <main>
 <header className="header"><div className="container headerInner"><a className="brand" href="#top"><span className="crest">V</span><span className="brandText"><b>VISHAL GENERAL STORE</b><span>EST. 2008 · BASS</span></span></a><button className="menu" aria-label="Menu">≡</button></div></header>
 <section className="hero" id="top"><div className="container"><div className="pill">EST. 2008 · BASS, HARYANA</div><h1>Har zaroorat.<br/><span className="muted">Ek extraordinary</span><br/>dukaan.</h1><p className="heroLead">Your neighbourhood general store — trusted for everyday essentials, honest prices and personal service since 2008.</p><a className="cta white" href="https://wa.me/919812329643">WHATSAPP US ↗</a><a className="cta dark" href="#store">EXPLORE STORE ↓</a><div className="promo">VISHAL<br/>GENERAL STORE</div></div></section>
 <section className="section" id="store"><div className="container"><div className="storeCard"><div className="storeVisual"><div className="shelves">🛒</div></div><div className="status">● &nbsp; STORE OPEN</div><div className="microRows"><div>MON — SUN &nbsp; · &nbsp; 6:00 AM — 9:30 PM</div><div>BASS, HARYANA &nbsp; · &nbsp; WHOLESALE + RETAIL</div></div></div></div></section>
 <section className="section"><div className="container"><span className="kicker">EVERYDAY. EVERYTHING.</span><h2 className="display sectionTitle">One store.<br/><span className="muted">Every need.</span></h2><p className="sectionLead">From your morning chai to your monthly ration — we keep the things your home needs, every single day.</p><div className="categoryGrid">{categories.map(([n,t,d,i])=><article className="category" key={n}><small>{n}</small><span className="ico">{i}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
 <section className="section"><div className="container"><span className="kicker">OUR STORY</span><h2 className="display sectionTitle">Built on<br/><span className="muted">bharosa.</span></h2><p className="sectionLead">Since 2008, Vishal General Store has been part of everyday life in Bass. What started as a neighbourhood shop has grown through one simple thing — trust.</p><div className="photo">🏪</div><div className="year">2008</div><div className="facts"><div className="fact"><b>01</b><span>LOCAL & FAMILY RUN</span></div><div className="fact"><b>02</b><span>WHOLESALE + RETAIL</span></div><div className="fact"><b>03</b><span>HONEST PRICES. EVERY DAY.</span></div></div></div></section>
 <section className="section"><div className="container"><span className="kicker">THE WORD AROUND TOWN</span><h2 className="display sectionTitle">Loved<br/><span className="muted">locally.</span></h2><div className="reviewsHero"><div className="rating">4.9</div><div><div className="stars">★★★★★</div><span className="kicker">CUSTOMER LOVE</span></div></div>{reviews.map(([q,a])=><article className="review" key={a}>{q}<small>— {a}</small></article>)}</div></section>
 <section className="section" id="visit"><div className="container"><span className="kicker">COME SAY HELLO</span><h2 className="display sectionTitle">Your store.<br/><span className="muted">Right here.</span></h2><p className="sectionLead">Vishal General Store<br/>VPO Bass, Rathanthal, Bas<br/>Haryana 123301</p><a className="cta white mapBtn" href="https://maps.app.goo.gl/YVT3hjW7nV5SFE46A">OPEN IN GOOGLE MAPS ↗</a><div className="hours"><h3>Open every day.</h3><div className="hoursRow"><span>MON — SUN</span><span>6:00 AM — 9:30 PM</span></div></div><span className="kicker">CALL US</span><div className="contactNum">+91 98123 29643<br/>+91 85699 62020</div><a className="cta dark" href="tel:+919812329643">CALL NOW ↗</a></div></section>
 <footer className="section footerBrand"><div className="container"><div className="brand"><span className="crest">V</span><span className="brandText"><b>VISHAL GENERAL STORE</b><span>EST. 2008 · BASS, HARYANA</span></span></div><p className="sectionLead">Everyday essentials. Extraordinary trust.</p></div></footer><button className="ai"><i>✦</i> VISHAL AI</button>
 </main>}
