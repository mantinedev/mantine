import { useRef } from 'react';

function getCookie(name:string) {
    const cname = `${name}=`;
    const decoded = decodeURIComponent(document.cookie); //to be careful
    const arr = decoded.split('; ');
    let res;
    arr.forEach(val => {
        if (val.indexOf(cname) === 0) res = val.substring(cname.length);
    });
    return res;
}

function setCookieUtil(name:string, value:string) {
    const cname = `${name}=`;
    let cvalue = '';
    //if empty erase the cookie
    if (value === '') {
        cvalue = `${cname}; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    } else {
        //if the user forgets to add the cookie-key
        cvalue = value.indexOf(cname) === 0 ? value.substring(cname.length) : value;
    }
    document.cookie = `${cname}${cvalue}`;

    return value === '' ? '' : cvalue;
}

export function useCookie(name:string) {
    const cookieValueRef = useRef<string | undefined>(getCookie(name));

    const setCookie = (value?:React.SetStateAction<string>) => {
        if (typeof value === 'string') {
            cookieValueRef.current = setCookieUtil(name, value);
        } else if (typeof value === 'function') {
            /*
            Providing a callback to `setCookie` to give the user
            option to further customise the cookie value with options like - Expire, SameSite or other site specific options.
             */
            const cookieValue = value(cookieValueRef.current);
            cookieValueRef.current = setCookieUtil(name, cookieValue);
        } else {
            //default case is to erase the cookie
            cookieValueRef.current = setCookieUtil(name, '');
        }
    };

    return [cookieValueRef, setCookie] as const;
}
