import { useTaskCategoriesQuery } from '@/generated/gql';
import { useSimulateTodoCreateCategory, useWriteTodoCreateCategory } from '@/wagmi/generated';
import { Box, Button, Group, Modal, SegmentedControl, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { useWaitForTransactionReceipt } from 'wagmi';
import classes from './TodoCats.module.css';

export interface TxModalProps {
    closePop?(): void;
}
export function TodoCatAddModal(props: TxModalProps) {
    const { closePop } = props;
    const [categoryName, setCategoryName] = useState('' as string);
    const { data: simulateData, error } = useSimulateTodoCreateCategory({
        args: [categoryName],
        query: {
            enabled: categoryName !== '',
        },
    });

    const { writeContract, isError, data, isPending } = useWriteTodoCreateCategory();
    const { isLoading: txMining, isSuccess: txSuccess } = useWaitForTransactionReceipt({
        hash: data,
    });
    useEffect(() => {
        if (closePop && txSuccess) {
            setTimeout(() => {
                closePop();
            }, 1500);
        }
    }, [txSuccess, closePop]);
    return (
        <Box maw={340} mx="auto">
            <TextInput
                withAsterisk
                label="Name"
                placeholder="Category name"
                onChange={(event) => setCategoryName(event.currentTarget.value)}
            />

            <Group justify="flex-end" mt="md">
                <Button
                    type="submit"
                    loading={isPending}
                    disabled={txMining || txSuccess || !Boolean(simulateData?.request)}
                    onClick={() => writeContract?.(simulateData!.request)}
                >
                    Submit
                </Button>
            </Group>
        </Box>
    );
}
