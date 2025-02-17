(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19654],{60365:(e,n,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-local-storage",function(){return o(50496)}])},50496:(e,n,o)=>{"use strict";o.r(n),o.d(n,{default:()=>c});var s=o(31085),a=o(71184),l=o(85954),t=o(38215);let r=(0,l.P)(t.XZ.useLocalStorage);function i(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-local-storage"})," allows using value from the ",(0,s.jsx)(n.code,{children:"localStorage"})," as react state.\nThe hook works the same way as ",(0,s.jsx)(n.code,{children:"useState"}),", but also writes the value to the ",(0,s.jsx)(n.code,{children:"localStorage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\n// The hook will read value from localStorage.getItem('color-scheme')\n// If localStorage is not available or value at a given key does not exist\n// 'dark' will be assigned to value variable\nconst [value, setValue] = useLocalStorage({\n  key: 'color-scheme',\n  defaultValue: 'dark',\n});\n\n// Value is set both to state and localStorage at 'color-scheme'\nsetValue('light');\n\n// You can also use callback like in useState hook to set value\nsetValue((current) => (current === 'dark' ? 'light' : 'dark'));\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Example of a color scheme toggle button that uses ",(0,s.jsx)(n.code,{children:"use-local-storage"})," hook\nto store current color scheme in the ",(0,s.jsx)(n.code,{children:"localStorage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { IconMoonStars, IconSun } from '@tabler/icons-react';\nimport { ActionIcon } from '@mantine/core';\nimport { useLocalStorage } from '@mantine/hooks';\n\nfunction ColorSchemeToggle() {\n  const [colorScheme, setColorScheme] = useLocalStorage<\n    'light' | 'dark'\n  >({\n    key: 'color-scheme',\n    defaultValue: 'light',\n  });\n\n  const toggleColorScheme = () =>\n    setColorScheme((current) =>\n      current === 'dark' ? 'light' : 'dark'\n    );\n\n  return (\n    <ActionIcon onClick={toggleColorScheme}>\n      {colorScheme === 'dark' ? <IconSun /> : <IconMoonStars />}\n    </ActionIcon>\n  );\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"remove-value",children:"Remove value"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"removeValue"})," callback to clean ",(0,s.jsx)(n.code,{children:"localStorage"}),"/",(0,s.jsx)(n.code,{children:"sessionStorage"}),".\nWhen value is removed it is reset to ",(0,s.jsx)(n.code,{children:"defaultValue"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\nconst [value, setValue, removeValue] = useLocalStorage({\n  key: 'color-scheme',\n  defaultValue: 'light',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"browser-tabs-synchronization",children:"Browser tabs synchronization"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-local-storage"})," subscribes to ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event",children:"storage event"}),".\nWhen state changes in one tab, it automatically updates the value in all other opened browser tabs.\nYou can test this feature by opening 2 tabs with Mantine docs side by side and changing the color scheme\n(button on the top right or ",(0,s.jsx)(n.code,{children:"⌘ + J"})," on MacOS and ",(0,s.jsx)(n.code,{children:"Ctrl + J"})," on Windows and Linux)."]}),"\n",(0,s.jsx)(n.h2,{id:"serializedeserialize-json",children:"Serialize/deserialize JSON"}),"\n",(0,s.jsxs)(n.p,{children:["By default, the hook will serialize/deserialize data with ",(0,s.jsx)(n.code,{children:"JSON.stringify"}),"/",(0,s.jsx)(n.code,{children:"JSON.parse"}),".\nIf you need to store data in local storage that cannot be serialized with ",(0,s.jsx)(n.code,{children:"JSON.stringify"}),"\n– provide your own serialization handlers:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\nconst [value, setValue] = useLocalStorage({\n  key: 'color-scheme',\n  serialize: (value) => {\n    /* return value serialized to string */\n  },\n  deserialize: (localStorageValue) => {\n    /* parse localStorage string value and return value */\n  },\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage-with-superjson",children:"Usage with superjson"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/blitz-js/superjson",children:"superjson"})," is compatible with ",(0,s.jsx)(n.code,{children:"JSON.stringify"}),"/",(0,s.jsx)(n.code,{children:"JSON.parse"})," but works for ",(0,s.jsx)(n.code,{children:"Date"}),", ",(0,s.jsx)(n.code,{children:"Map"}),", ",(0,s.jsx)(n.code,{children:"Set"})," and ",(0,s.jsx)(n.code,{children:"BigInt"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import superjson from 'superjson';\nimport { useLocalStorage } from '@mantine/hooks';\n\nconst defaultValue = { name: 'John', age: 25 };\n\nconst [value, setValue] = useLocalStorage({\n  key: 'data',\n  defaultValue,\n  serialize: superjson.stringify,\n  deserialize: (str) =>\n    str === undefined ? defaultValue : superjson.parse(str),\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"use-session-storage",children:"use-session-storage"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"use-session-storage"})," hook works the same way as ",(0,s.jsx)(n.code,{children:"use-local-storage"})," hook but uses ",(0,s.jsx)(n.code,{children:"sessionStorage"})," instead of ",(0,s.jsx)(n.code,{children:"window.localStorage"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useSessionStorage } from '@mantine/hooks';\n\nconst [value, setValue] = useSessionStorage({\n  key: 'session-key',\n  defaultValue: 'mantine',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"set-value-type",children:"Set value type"}),"\n",(0,s.jsxs)(n.p,{children:["You can specify value type same as in ",(0,s.jsx)(n.code,{children:"useState"})," hook:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { useLocalStorage } from '@mantine/hooks';\n\nconst [value, setValue] = useLocalStorage<'dark' | 'light'>({\n  key: 'color-scheme',\n  defaultValue: 'light',\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"read-storage-value",children:"Read storage value"}),"\n",(0,s.jsxs)(n.p,{children:["To read value from storage without using hook, use ",(0,s.jsx)(n.code,{children:"readLocalStorageValue"}),"/",(0,s.jsx)(n.code,{children:"readSessionStorageValue"})," functions.\nFunctions accept the same arguments as ",(0,s.jsx)(n.code,{children:"use-local-storage"}),"/",(0,s.jsx)(n.code,{children:"use-session-storage"})," hooks:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { readLocalStorageValue } from '@mantine/hooks';\n\nconst value = readLocalStorageValue({ key: 'color-scheme' });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"interface UseLocalStorage<T> {\n  /** Local storage key */\n  key: string;\n\n  /** Default value that will be set if value is not found in local storage */\n  defaultValue?: T;\n\n  /** If set to true, value will be updated in useEffect after mount. Default value is true. */\n  getInitialValueInEffect?: boolean;\n\n  /** Determines whether the value must be synced between browser tabs, `true` by default */\n  sync?: boolean;\n\n  /** Function to serialize value into a string to be saved in local storage */\n  serialize?: (value: T) => string;\n\n  /** Function to deserialize string value from local storage to value */\n  deserialize?: (value: string) => T;\n}\n\nfunction useLocalStorage<T = string>(options: UseLocalStorage<T>): readonly [\n  T, // current value\n  (val: T | ((prevState: T) => T)) => void, // callback to set value in storage\n  () => void, // callback to remove value from storage\n];\n"})})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(r,{...e,children:(0,s.jsx)(i,{...e})})}}},e=>{var n=n=>e(e.s=n);e.O(0,[67456,39699,68831,90636,46593,38792],()=>n(60365)),_N_E=e.O()}]);