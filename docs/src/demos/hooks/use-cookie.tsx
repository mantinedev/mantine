import React, { useEffect } from 'react';
import { useCookie } from '@mantine/hooks';
import { Text, Group } from '@mantine/core';

const code = `
import { useCookie } from '@mantine/hooks';

function Demo(){
    const [cookie, setCookie] = useCookie('my-cookie');

    useEffect(() => {
        setCookie('value after http response');

        return () => setCookie();
    }, []);

    return (
        <>
        <Text size="md">Cookie Name: my-cookie</Text>
        <Text size="md" weight={500}>Cookie Value: {cookie.current} </Text>
        </>
    );
}`;

function Demo() {
    const [cookie, setCookie] = useCookie('my-cookie');

    useEffect(() => {
        setCookie('cookie-value');

        return () => setCookie();
    }, []);

    return (
        <Group position="center">
            <Text size="md">Cookie Name: my-cookie</Text>
            <Text size="md" weight={500}>Cookie Value: {cookie.current} </Text>
        </Group>
    );
}

export const useCookieHook: MantineDemo = {
    type: 'demo',
    code,
    component: Demo,
};
