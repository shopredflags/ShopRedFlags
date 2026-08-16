# Red Flags & Receipts — She Raised Me Right

Production-ready static launch page.

## Included
- Live countdown to August 19, 2026 at 6:00 AM Eastern
- Top and main signup forms posting to the existing Formspree endpoint
- Phone formatting and form success/error states
- Responsive sticky navigation and mobile menu
- Clickable collection cards with accessible modals
- Add-to-calendar `.ics` download
- Privacy, terms, contact, and "For Mom" interactions
- Responsive/lazy-loaded imagery and social/SEO metadata

## Deploy
Upload the contents of this folder to any static host (IONOS, Netlify, Vercel, GitHub Pages). `index.html` is the entry point.

## Before public launch
Replace `hello@redflagsandreceipts.com` in `index.html` if a different contact email should be used. The signup forms currently use the Formspree endpoint already present in the original project.


## Birthday Surprise
The **For Mom** footer link opens a password-gated birthday experience with an animated reveal, tribute gallery, confetti, and a private birthday letter. Password checking uses a SHA-256 comparison in the browser. Note: because this is a static website, this is a sentimental privacy gate rather than server-grade authentication.
