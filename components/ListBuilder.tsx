"use client";
import { useMemo, useState } from "react";
import { Mic, Plus, Save, Trash2 } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

const suggestions = ["चीनी", "नमक", "आटा", "चावल", "दूध", "बिस्किट", "मैगी", "साबुन", "टूथपेस्ट", "आइसक्रीम"];

type SpeechRecognitionCtor = new () => {
  lang: string;
  interimResults: boolean;
  start: () => void;
  onresult: (event: { results: ArrayLike<{ 0: { transcript: string } }> }) => void;
  onerror: () => void;
};

declare global {
  interface Window {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  }
}

export function ListBuilder() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const qrValue = useMemo(() => code ? JSON.stringify({ code, items, parentName, phone, note }) : "", [code, items, parentName, phone, note]);

  function addItem(value = input) {
    const clean = value.trim();
    if (!clean) return;
    setItems((old) => [...old, clean]);
    setInput("");
  }

  function listen() {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) {
      setMessage("इस फोन में आवाज़ से लिखने की सुविधा उपलब्ध नहीं है। कीबोर्ड का माइक इस्तेमाल करें।");
      return;
    }
    const recognition = new Recognition();
    recognition.lang = "hi-IN";
    recognition.interimResults = false;
    recognition.onresult = (event) => setInput(event.results[0][0].transcript);
    recognition.onerror = () => setMessage("आवाज़ समझ नहीं आई। दोबारा बोलें।");
    recognition.start();
  }

  function saveList() {
    if (!items.length) {
      setMessage("पहले कम से कम एक सामान जोड़ें।");
      return;
    }
    const newCode = String(Math.floor(1000 + Math.random() * 9000));
    const payload = { code: newCode, items, parentName, phone, note, createdAt: Date.now() };
    localStorage.setItem(`vgs-list-${newCode}`, JSON.stringify(payload));
    setCode(newCode);
    setMessage("लिस्ट सेव हो गई। यह कोड बच्चे को भेजें।");
  }

  return (
    <section className="listPanel" id="list">
      <div className="listIntro">
        <span className="eyebrow">घर की खरीदारी लिस्ट</span>
        <h2>बच्चे सामान भूल जाते हैं?</h2>
        <p>सामान चुनें, लिखें या बोलें। लिस्ट सेव करें और मिला हुआ कोड बच्चे को भेज दें। दुकान पर कोड दिखाकर पूरा सामान मिल जाएगा।</p>
        <div className="steps">
          <span>1. सामान जोड़ें</span><span>2. लिस्ट सेव करें</span><span>3. कोड दिखाएं</span>
        </div>
      </div>

      <div className="builderCard">
        <div className="suggestions">
          {suggestions.map((item) => <button key={item} onClick={() => addItem(item)}>{item}<Plus size={14}/></button>)}
        </div>
        <div className="inputRow">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addItem()} placeholder="सामान लिखें, जैसे 1 किलो चीनी" />
          <button className="iconBtn" onClick={listen} aria-label="बोलकर लिखें"><Mic /></button>
          <button className="btn btnGreen" onClick={() => addItem()}><Plus size={18}/> जोड़ें</button>
        </div>

        <div className="itemList">
          {items.length === 0 ? <p className="empty">अभी कोई सामान नहीं जोड़ा गया है।</p> : items.map((item, i) => (
            <div className="item" key={`${item}-${i}`}><span>{i + 1}. {item}</span><button onClick={() => setItems(items.filter((_, index) => index !== i))}><Trash2 size={17}/></button></div>
          ))}
        </div>

        <div className="customerFields">
          <input value={parentName} onChange={(e) => setParentName(e.target.value)} placeholder="माता-पिता का नाम (वैकल्पिक)" />
          <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="tel" placeholder="फोन नंबर (वैकल्पिक)" />
          <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="नोट: सामान न मिले तो फोन करें" />
        </div>
        <button className="btn btnOrange saveBtn" onClick={saveList}><Save size={19}/> लिस्ट सेव करें</button>
        {message && <p className="message">{message}</p>}

        {code && (
          <div className="codeCard">
            <div><small>आपकी लिस्ट का कोड</small><strong>{code}</strong><p>यह कोड दुकान पर दिखाएं।</p></div>
            <QRCodeSVG value={qrValue} size={116} fgColor="#0c5c3e" />
          </div>
        )}
      </div>
    </section>
  );
}
