(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5476],{42141:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/typography-styles-provider",function(){return o(40452)}])},40452:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var a=o(31085),r=o(71184),i=o(34056),s=o(9355);let n=`
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
`,l={type:"code",code:`
import { TypographyStylesProvider } from '@mantine/core';

const html = '...html content here...';

function Demo() {
  return (
    <TypographyStylesProvider>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </TypographyStylesProvider>
  );
}
`,component:function(){return(0,a.jsx)(i.a,{maw:560,mx:"auto",children:(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})})}},h=`<h1>Heading 1</h1>
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

<table><thead><tr><th>Element position</th><th>Element name</th><th>Symbol</th><th>Atomic mass</th></tr></thead><tbody><tr><td>6</td><td>Carbon</td><td>C</td><td>12.011</td></tr><tr><td>7</td><td>Nitrogen</td><td>N</td><td>14.007</td></tr><tr><td>39</td><td>Yttrium</td><td>Y</td><td>88.906</td></tr><tr><td>56</td><td>Barium</td><td>Ba</td><td>137.33</td></tr><tr><td>58</td><td>Cerium</td><td>Ce</td><td>140.12</td></tr></tbody></table>`,d={type:"code",component:function(){return(0,a.jsx)(s.Z,{children:(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:h}})})}};var p=o(85954),u=o(38215);let m=(0,p.P)(u.XZ.TypographyStylesProvider);function c(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:["Mantine does not include typography global styles.\nUse ",(0,a.jsx)(t.code,{children:"TypographyStylesProvider"})," to add typography styles to your html content:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { TypographyStylesProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <TypographyStylesProvider>\n      <div\n        dangerouslySetInnerHTML={{ __html: '<p>Your html here</p>' }}\n      />\n    </TypographyStylesProvider>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(o,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"all-styles-demo",children:"All styles demo"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"TypographyStylesProvider"})," includes styles for:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"paragraphs"}),"\n",(0,a.jsx)(t.li,{children:"headings"}),"\n",(0,a.jsx)(t.li,{children:"lists"}),"\n",(0,a.jsx)(t.li,{children:"blockquotes"}),"\n",(0,a.jsx)(t.li,{children:"tables"}),"\n",(0,a.jsx)(t.li,{children:"links"}),"\n",(0,a.jsx)(t.li,{children:"images"}),"\n",(0,a.jsx)(t.li,{children:"hr"}),"\n",(0,a.jsx)(t.li,{children:"kbd"}),"\n",(0,a.jsx)(t.li,{children:"code and pre"}),"\n"]}),"\n",(0,a.jsx)(o,{data:d})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(m,{...e,children:(0,a.jsx)(c,{...e})})}},9355:(e,t,o)=>{"use strict";o.d(t,{Z:()=>d});var a=o(31085);o(14041);var r=o(29686),i=o(69564),s=o(34056),n=o(6754),l={root:"m_d6493fad"};let h={},d=(0,n.P9)((e,t)=>{let o=(0,r.Y)("TypographyStylesProvider",h,e),{classNames:n,className:d,style:p,styles:u,unstyled:m,...c}=o,y=(0,i.I)({name:"TypographyStylesProvider",classes:l,props:o,className:d,style:p,classNames:n,styles:u,unstyled:m});return(0,a.jsx)(s.a,{ref:t,...y("root"),...c})});d.classes=l,d.displayName="@mantine/core/TypographyStylesProvider"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(42141)),_N_E=e.O()}]);