import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import './SplashScreen.css';

export default function SplashScreen({ onDone }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHiding(true), 2400);
    const doneTimer = setTimeout(() => onDone(), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div className={`splash${hiding ? ' splash--hide' : ''}`}>
      {/* Ripple rings */}
      <span className="splash-ring splash-ring--1" />
      <span className="splash-ring splash-ring--2" />
      <span className="splash-ring splash-ring--3" />
      <span className="splash-ring splash-ring--4" />

      <div className="splash-card">
        <div className="splash-logo-wrap">
          <img src={logo} alt="Shanruck Technologies" className="splash-logo" />
        </div>
        <p className="splash-tagline">Empowering Careers Through Technology</p>
        <div className="splash-bar">
          <span className="splash-bar__fill" />
        </div>
      </div>
    </div>
  );
}
