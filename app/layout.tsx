// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";
import Script from 'next/script'; // Importar Script para adicionar Google Analytics e GTM

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Purple Marketing",
  description: "Bem vindo(a) à página da empresa Purple Marketing",
  keywords: "", // Adicione palavras-chave relevantes
  authors: [
    { name: "VRZ Studio", url: "https://vrz-studio.tech" }
  ],
  openGraph: {
    title: "Purple Marketing",
    description: "Bem vindo(a) à página da empresa Purple Marketing",
    url: "",
    images: [
      {
        url: "https://i.ibb.co/6y0NwLM/DALL-E-2024-10-11-17-12-18-A-modern-minimalistic-logo-for-Purple-Mind-Marketing-featuring-the-words.webp", // Adicione o caminho da imagem de SEO
        width: 1200,
        height: 630,
        alt: "Marketing Profissional",
      },
    ],
  },


  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'YOUR_GA_TRACKING_ID');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start':
                  new Date().getTime(), event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';j.async=true;
              j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','YOUR_GTM_ID');
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=YOUR_GTM_ID`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
