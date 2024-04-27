import { Box, Button, Center, Checkbox, Divider } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
/*
import { IconEdit } from '@tabler/icons';
*/
import React, { useState } from 'react';
import cancelImg from './../../assets/images/cancel.png';

export interface TodoProps {
    text: string;
    completed: boolean;
    id: string;
}
export function Todo(props: TodoProps) {
    const { text, completed, id } = props;
    const [editStart, setEditStart] = useState(false);
    const [changedText, setChangedText] = useState(text);

    return (
        <Box /*sx={{ margin: '0rem 1rem', padding: '0rem 1rem', fontSize: '16px' }}*/>
            <Divider my="sm" />

            <Box
                style={{ display: editStart ? 'none' : 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
                    <Checkbox
                        checked={completed}
                        color="green"
                        radius="xl"
                        /*
                        onChange={demo}
*/
                    />
                    <Box style={{ textDecoration: completed ? 'line-through' : 'none', userSelect: 'none' }}>
                        {text}
                    </Box>
                </label>

                <Center>
                    {!completed && (
                        <Button title="edit">
                            <IconEdit size={16} />
                        </Button>
                    )}
                </Center>
            </Box>
        </Box>
    );
}
