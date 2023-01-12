import React from 'react';
import { Prism } from '@mantine/prism';
import { MantineDemo } from '@mantine/ds';

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
`;

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
`;

export const css = `
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
  --heading-1: 2rem/2rem Helvetica, sans-serif;
}

@import url(print.css);

@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
`;

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
`;

function Demo() {
  return (
    <Prism.Tabs defaultValue="go">
      <Prism.TabsList>
        <Prism.Tab value="go">Go</Prism.Tab>
        <Prism.Tab value="python">Python</Prism.Tab>
        <Prism.Tab value="css">CSS</Prism.Tab>
        <Prism.Tab value="sql">SQL</Prism.Tab>
      </Prism.TabsList>

      <Prism.Panel value="go" language="go">
        {go}
      </Prism.Panel>
      <Prism.Panel value="python" language="python">
        {py}
      </Prism.Panel>
      <Prism.Panel value="css" language="css">
        {css}
      </Prism.Panel>
      <Prism.Panel value="sql" language="sql">
        {sql}
      </Prism.Panel>
    </Prism.Tabs>
  );
}

export const languages: MantineDemo = {
  type: 'demo',
  component: Demo,
};
