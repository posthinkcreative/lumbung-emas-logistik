
"use client";

import Link from 'next/link';

const WhatsAppIcon = () => (
    <svg
      height="24"
      width="24"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 455.731 455.731"
      xmlSpace="preserve"
      fill="#FFFFFF"
    >
      <g>
        <path
          d="M227.865,0.001C102.138,0.001,0,102.138,0,227.865c0,40.833,11.232,79.8,32.29,112.597L2,453.73l116.313-30.569
            c31.398,18.49,67.8,29.41,109.552,29.41C353.593,452.572,455.73,350.435,455.73,224.708S353.593,0.001,227.865,0.001z
             M227.865,411.339c-36.83,0-72.238-9.897-102.48-28.534l-7.388-4.402l-76.152,20.013l20.38-74.349l-4.82-7.624
            C39.586,286.417,29.41,256.23,29.41,224.708c0-109.552,89.47-199.02,198.455-199.02s198.455,89.47,198.455,199.02
            S337.417,411.339,227.865,411.339z M329.898,272.936c-4.402-2.19-26.101-12.876-30.299-14.372c-4.197-1.495-7.245-2.19-10.29,2.19
            c-3.048,4.385-11.455,14.372-14.025,17.268c-2.57,2.898-5.137,3.295-9.539,1.104c-4.402-2.19-18.586-6.857-35.4-21.9
            c-13.08-11.723-21.9-26.299-24.468-30.692c-2.57-4.385-0.268-6.78,1.922-8.97s4.402-5.137,6.6-7.698
            c2.19-2.57,2.898-4.385,4.385-7.245c1.495-2.898,0.73-5.525-0.364-7.717c-1.104-2.19-10.29-24.86-14.098-34.026
            c-3.812-9.168-7.624-7.88-10.29-7.88c-2.67,0-5.718-0.348-8.765-0.348s-7.88,1.104-12.08,5.492
            c-4.197,4.385-15.918,15.553-15.918,37.924c0,22.37,16.313,44.018,18.49,46.912c2.19,2.898,31.812,48.541,78.336,69.182
            c11.033,4.82,19.643,7.698,26.495,9.924c6.857,2.223,13.08,1.922,17.928,1.104c4.82-0.793,15.15-6.182,17.928-12.18
            c2.812-6,2.812-11.16,1.922-12.18C337.522,276.229,334.283,275.126,329.898,272.936z"
        />
      </g>
    </svg>
  );

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function FloatingWhatsAppButton({ phoneNumber, message }: FloatingWhatsAppButtonProps) {
  const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden md:block scale-0 group-hover:scale-100 transition-transform origin-right duration-300 bg-background p-3 rounded-lg shadow-lg border">
            <p className="text-sm text-foreground whitespace-nowrap font-medium">Butuh bantuan? Silahkan chat kami di sini 24/7</p>
        </div>
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex items-center justify-center h-16 w-16 rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-100 p-2"
        >
            <WhatsAppIcon />
        </Link>
    </div>
  );
}
