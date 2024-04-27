import { TodoCats } from '@/components/TodoCats/TodoCats';
import { Todos } from '@/components/Todos/Todos';
import { AppShell, Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ConnectKitButton } from 'connectkit';
import { useState } from 'react';

export default function HomePage() {
    const [opened, { toggle }] = useDisclosure();
    const [currentCategory, setCurrentCategory] = useState('');

    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                    <ConnectKitButton />
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <TodoCats setCategory={setCurrentCategory} />
            </AppShell.Navbar>
            <AppShell.Main>{currentCategory !== '' && <Todos categoryId={currentCategory} />}</AppShell.Main>
        </AppShell>
    );
}
