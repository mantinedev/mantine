// import hljs from 'highlight.js/lib/core';
// import javascript from 'highlight.js/lib/languages/javascript';

export async function registerLanguage(lang: string) {
  // await import(`highlight.js/lib/languages/${lang}`)
  //   .then((langModule) => {
  //     console.log('registered', langModule);
  //     hljs.registerLanguage(lang, langModule);
  //   })
  //   .catch((err) => {
  //     console.log('err', err);
  //   });

  console.log('await import', lang);
  // hljs.registerLanguage(lang, await import(`highlight.js/lib/languages/${lang}`));
  // console.log('register language');
  // if (lang === 'javascript') {
  //   hljs.registerLanguage(lang, await import(""));
  // }
}
