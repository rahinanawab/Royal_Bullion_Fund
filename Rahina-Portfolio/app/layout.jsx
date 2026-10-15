import './globals.css';
import './portfolio.css';

export const metadata = {
  title: 'Rahina Nawab Ali | SQA Engineer',
  description:
    'Rahina Nawab Ali — Mid-Level Software Quality Assurance Engineer specializing in manual, automation, API, IoT and AI application testing.',
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%2343b7ff'/%3E%3Ctext x='32' y='43' font-family='Arial,Helvetica,sans-serif' font-size='28' font-weight='700' text-anchor='middle' fill='%2306101d'%3ERN%3C/text%3E%3C/svg%3E",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#07111f',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');setTimeout(function(){if(!window.__rvOk)document.documentElement.classList.add('rv-fallback');},4000);",
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
