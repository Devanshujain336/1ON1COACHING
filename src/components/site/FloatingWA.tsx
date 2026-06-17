import { wa } from "@/lib/wa";

export function FloatingWA() {
  return (
    <a
      href={wa("Hi! I'm interested in 1on1Coaching. Please share more details.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-wa)] text-black shadow-lg glow-wa animate-pulse-glow"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M19.11 17.21c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.49 1.06 2.89 1.21 3.09c.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16 3.2C8.93 3.2 3.2 8.93 3.2 16c0 2.27.6 4.48 1.74 6.43L3 29l6.74-1.86A12.76 12.76 0 0016 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2zm0 23.4a10.6 10.6 0 01-5.42-1.48l-.39-.23-4 1.1 1.07-3.9-.25-.4A10.6 10.6 0 015.4 16c0-5.85 4.76-10.6 10.6-10.6S26.6 10.15 26.6 16 21.85 26.6 16 26.6z"/>
      </svg>
    </a>
  );
}
