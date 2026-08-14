import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-08-19T03:00:00-07:00"); // 3am PT

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = target - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}

function CountdownBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-amber-200 mt-1">
        {label}
      </span>
    </div>
  );
}

export default function SheRaisedMeRight() {
  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire to your form backend (Mailchimp, Klaviyo, etc.)
    console.log("Signup:", { email, phone });
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center overflow-hidden">

      {/* Hero image background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://static.wixstatic.com/media/a07da1_51b628f002a042b9b14ecb46272be0bf~mv2.jpg')",
        }}
      />

      {/* Warm golden overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-amber-900/30 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center max-w-2xl mx-auto">

        {/* Logo / brand */}
        <p className="text-amber-300 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">
          Red Flags &amp; Receipts
        </p>

        {/* Hero headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
          She Raised Me Right.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-amber-100 mb-10 max-w-md leading-relaxed">
          She didn't just raise me. She built the blueprint.
          <br />
          <span className="text-amber-300 font-semibold">Aug 19 is her birthday. The drop is her gift.</span>
        </p>

        {/* Countdown */}
        <div className="flex gap-6 md:gap-10 mb-10">
          <CountdownBlock value={days} label="Days" />
          <CountdownBlock value={hours} label="Hours" />
          <CountdownBlock value={minutes} label="Mins" />
          <CountdownBlock value={seconds} label="Secs" />
        </div>

        {/* Signup form */}
        {submitted ? (
          <div className="bg-white/10 backdrop-blur rounded-2xl px-8 py-6 text-white">
            <p className="text-2xl font-bold mb-1">You're in. 🚩</p>
            <p className="text-amber-200">We'll text and email you the moment we drop.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md flex flex-col gap-3"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
            />
            <input
              type="tel"
              placeholder="Your phone (for early access text)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold uppercase tracking-widest text-sm transition-all duration-200 shadow-lg"
            >
              I'm In — Notify Me
            </button>
          </form>
        )}

        {/* Foundation callout */}
        <p className="mt-8 text-amber-200 text-xs md:text-sm max-w-sm leading-relaxed">
          A portion of every purchase supports the{" "}
          <span className="font-semibold text-amber-300">Red Flags Foundation</span>.
          Buy the fit. Fund the cause.
        </p>

        {/* Social */}
        <p className="mt-6 text-white/50 text-xs tracking-widest uppercase">
          @RedFlagsSocial
        </p>
      </div>
    </div>
  );
}
