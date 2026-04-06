import Script from 'next/script';

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-4Z4NNVLRH5');
`;

export function GaScript() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-4Z4NNVLRH5"
      />
      <Script id="ga" strategy="lazyOnload">
        {gaScript}
      </Script>
    </>
  );
}
