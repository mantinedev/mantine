import React from 'react';
import { Tabs, Tab } from '@mantine/core';
import { Prism, PrismProps } from '@mantine/prism';

export const go = `
package main

import "fmt"

func main() {
    ch := make(chan float64)
    ch <- 1.0e10    // magic number
    x, ok := <- ch
    defer fmt.Println(\`exitting now\`)
    go println(len("hello world!"))
    return
}
`.trim();

export const py = `
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
`.trim();

export const css = `
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 30px/32px Helvetica, sans-serif;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
`.trim();

const sql = `
CREATE TABLE "topic" (
  "id" serial NOT NULL PRIMARY KEY,
  "forum_id" integer NOT NULL,
  "subject" varchar(255) NOT NULL
);
ALTER TABLE "topic"
ADD CONSTRAINT forum_id FOREIGN KEY ("forum_id")
REFERENCES "forum" ("id");

-- Initials
insert into "topic" ("forum_id", "subject")
values (2, 'D''artagnian');
`.trim();

function Demo() {
  const prismStyles: PrismProps['styles'] = {
    code: { borderRadius: 0 },
  };

  return (
    <Tabs tabPadding={0}>
      <Tab label="Go">
        <Prism language="go" styles={prismStyles}>
          {go}
        </Prism>
      </Tab>
      <Tab label="SQL">
        <Prism language="sql" styles={prismStyles}>
          {sql}
        </Prism>
      </Tab>
      <Tab label="Python">
        <Prism language="python" styles={prismStyles}>
          {py}
        </Prism>
      </Tab>
      <Tab label="CSS">
        <Prism language="css" styles={prismStyles}>
          {css}
        </Prism>
      </Tab>
    </Tabs>
  );
}

export const languages: MantineDemo = {
  type: 'demo',
  component: Demo,
};
