(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5476],{42141:(e,t,a)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/typography-styles-provider",function(){return a(40452)}])},40452:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y});var o=a(31085),r=a(71184),s=a(34056),i=a(9355);let n=`
<h1>Example article</h1>
<p>This is example article from <a href="https://css-tricks.com/your-team-is-not-them/">CSS-Tricks website</a> written by <a href="https://css-tricks.com/author/sdrasner/">Sarah Drasner</a>. It is used as an example to showcase real world styles of TypographyStylesProvider component, please read full article on <a href="https://css-tricks.com/your-team-is-not-them/">CSS-Tricks website</a>.</p>
<h2>Article itself</h2>
<p>Let\u2019s talk for a moment about how we talk about our teams. This might not seem like something that needs a whole article dedicated to it, but it\u2019s actually quite crucial. The way that we refer to our teams sends signals: to stakeholders, to your peers, to the team itself, and even to ourselves. In addressing how we speak about our teams, we\u2019ll also talk about accountability.</p>
<p>I have noticed shared similarities in those folks I consider good managers whose teams deliver well, and those who don\u2019t. It starts with how they communicate about their teams.</p>
<h3>Your team is \u201Cwe\u201D</h3>
<p>There can be a perception that as a manager of an organization you are in control at all times. Part of that control can invariably be perceived as how you appear to be in charge, are competent, or how you personally perform. Due to that, some bad behaviors can arise- not due to malice, but due to fear. For this reason, it can be tempting to take credit for success and avoid credit when there is failure.</p>
<p>The irony is that the more that you try to hold on to these external perceptions, the more it will slip away. Why? <strong>Because the problems you are solving as a manager really aren\u2019t about&nbsp;<em>you</em>.</strong></p>
<p><strong>Your team is \u201Cwe\u201D.</strong> You are a driving force of that team, no matter how high up the hierarchy chain. What happens on that team is your responsibility. When you speak about your org, you should include yourself in the statement.</p>
<p>When your team succeeds in something though, then you can praise them and leave yourself out of it. Here\u2019s an example:</p>
<p><em>They really pulled this project over the line, despite the incredibly tight project timeline. Everyone showed up and was driven throughout the engagement. They did a fantastic job.</em></p>
<p>However, if the team failed at something, the pronoun is then <strong>I</strong>:</p>
<p><em>I didn\u2019t recognize how tight this turnaround was and failed to prioritize the team\u2019s time well. I need to reconvene with everyone so we can come up with a better plan.</em></p>
<p>And never, ever <strong>them</strong>:</p>
<p><em>They didn\u2019t adhere to this tight timeline. They just weren\u2019t able to get this project over the line.</em></p>
<p>Do you see how the last example shirks responsibility for what occurred? Too often I will hear managers relieve themselves of their duties when shit hits the fan, and that is exactly when a manager needs to step up, and dive in to the problems that <strong>are their responsibility</strong>.</p>
<h3>The wider organization</h3>
<p>There is another piece of this too, and it impacts how your team operates. It\u2019s that your job is not to be the ambassador of who you manage and think of every other group as separate. You&#39;re part of a larger system. A company is composed of groups, but those groups can only be successful if they\u2019re working together, not if they are protecting their own org at all costs.</p>
<p>I admit I didn\u2019t fully understand the depth of this until I read Patrick Lencioni\u2019s <a href="https://www.amazon.com/Advantage-Organizational-Health-Everything-Business/dp/0470941529/"><em>The Advantage</em></a> thanks to Dalia Havens, a peer at Netlify. In the book, Lencioni talks about how organizational health, not \u201Cbeing smart\u201D, as the biggest key to success. Plenty of smart people with good ideas build companies and see them fail. <strong>Success lies in being able to work together.</strong></p>
<p>Fundamentally, other groups at the company are not separate from your group, rather that you\u2019re all part of one whole. <strong>The Leadership Team is also a team, and should be treated as <em>your team</em>. How you speak about this team is equally important.</strong></p>
<p>As such, when we talk about successes and failures of any groups, these should also be shared. There should be a sense that you\u2019re all working towards a common goal together, and every group contributes to it. Within a leadership team there should be trust and vulnerability to own their part so that the whole organization can operate at its best.</p>
`,h={type:"code",code:`
import { TypographyStylesProvider } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
`,component:function(){return(0,o.jsx)(s.a,{maw:560,mx:"auto",children:(0,o.jsx)(i.Z,{children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})})}},l=`<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<hr />
<p><a href="https://mantine.dev">Mantine link</a></p>
<p>Lorem ipsum, dolor sitamet consectetur adipisicing elit. Provident omnis laudantium itaque quisquam est, magnam harum, cum molestias necessitatibus obcaecati quod esse debitis velit nemo dolores deserunt. Quia, iure doloremque.</p>
<img src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png" alt="Unsplash image" />
<ul>
  <li>list item - 1</li>
  <li>list item - 2</li>
  <li>list item - 3</li>
  <li>list item - 4</li>
</ul>

<ol>
  <li>list item - 1</li>
  <li>list item - 2</li>
  <li>list item - 3</li>
  <li>list item - 4</li>
</ol>

<blockquote>
  Life is like an npm install \u2013 you never know what you are going to get.
  <cite>\u2013 Forrest Gump</cite>
</blockquote>

<p>This is <code>code</code>, <kbd>kbd</kbd> and <mark>mark</mark> inside paragraph</p>

<pre>
import { Avatar } from '@mantine/core';
import image from './image.png';

export function AvatarDemo() {
  return &lt;Avatar src={image} alt="it's me" /&gt;;
}</pre>

<table><thead><tr><th>Element position</th><th>Element name</th><th>Symbol</th><th>Atomic mass</th></tr></thead><tbody><tr><td>6</td><td>Carbon</td><td>C</td><td>12.011</td></tr><tr><td>7</td><td>Nitrogen</td><td>N</td><td>14.007</td></tr><tr><td>39</td><td>Yttrium</td><td>Y</td><td>88.906</td></tr><tr><td>56</td><td>Barium</td><td>Ba</td><td>137.33</td></tr><tr><td>58</td><td>Cerium</td><td>Ce</td><td>140.12</td></tr></tbody></table>`,d={type:"code",component:function(){return(0,o.jsx)(i.Z,{children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:l}})})}};var p=a(18675),u=a(20017);let c=(0,p.P)(u.XZ.TypographyStylesProvider);function m(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:a}=t;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:["Mantine does not include typography global styles.\nUse ",(0,o.jsx)(t.code,{children:"TypographyStylesProvider"})," to add typography styles to your html content:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { TypographyStylesProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TypographyStylesProvider>\n      <div\n        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}\n      />\n    </TypographyStylesProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"all-styles-demo",children:"All styles demo"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"TypographyStylesProvider"})," includes styles for:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"paragraphs"}),"\n",(0,o.jsx)(t.li,{children:"headings"}),"\n",(0,o.jsx)(t.li,{children:"lists"}),"\n",(0,o.jsx)(t.li,{children:"blockquotes"}),"\n",(0,o.jsx)(t.li,{children:"tables"}),"\n",(0,o.jsx)(t.li,{children:"links"}),"\n",(0,o.jsx)(t.li,{children:"images"}),"\n",(0,o.jsx)(t.li,{children:"hr"}),"\n",(0,o.jsx)(t.li,{children:"kbd"}),"\n",(0,o.jsx)(t.li,{children:"code and pre"}),"\n"]}),"\n",(0,o.jsx)(a,{data:d})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,{...e,children:(0,o.jsx)(m,{...e})})}},87186:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});var o=(0,a(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},9355:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(31085);a(14041);var r=a(29686),s=a(69564),i=a(34056),n=a(6754),h={root:"m_d6493fad"};let l={},d=(0,n.P9)((e,t)=>{let a=(0,r.Y)("TypographyStylesProvider",l,e),{classNames:n,className:d,style:p,styles:u,unstyled:c,...m}=a,y=(0,s.I)({name:"TypographyStylesProvider",classes:h,props:a,className:d,style:p,classNames:n,styles:u,unstyled:c});return(0,o.jsx)(i.a,{ref:t,...y("root"),...m})});d.classes=h,d.displayName="@mantine/core/TypographyStylesProvider"}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(42141)),_N_E=e.O()}]);