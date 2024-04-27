import { Todo } from '@/components/Todos/Todo';
import { useTaskCategoryDetailsQuery } from '@/generated/gql';
import {
    useSimulateTodoCreateCategory,
    useSimulateTodoCreateTask,
    useWriteTodoCreateCategory,
    useWriteTodoCreateTask,
} from '@/wagmi/generated';
import { Button, Grid, Modal, SegmentedControl, SimpleGrid, Skeleton, Stack, TextInput } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useWaitForTransactionReceipt } from 'wagmi';

export interface TodosProps {
    categoryId: string;
}
export function Todos(props: TodosProps) {
    const [taskName, setTaskName] = useState('' as string);
    const [{ data: tasks, fetching }] = useTaskCategoryDetailsQuery({
        variables: {
            categoryId: props.categoryId,
        },
    });
    const {
        data: simulateData,
        error,
        refetch,
    } = useSimulateTodoCreateTask({
        args: [taskName, BigInt(props.categoryId)],
        query: {
            enabled: taskName !== '',
        },
    });

    const { writeContract, isError, data, isPending, reset } = useWriteTodoCreateTask();
    const { isLoading: txMining, isSuccess: txSuccess } = useWaitForTransactionReceipt({
        hash: data,
    });

    useEffect(() => {
        setTaskName('');
        refetch();
        reset();
    }, [txSuccess, props.categoryId]);
    return (
        <>
            <SimpleGrid mt={3}>
                <Grid>
                    <Grid.Col span="auto">
                        <TextInput
                            placeholder="Todo Item"
                            value={taskName}
                            onChange={(event) => setTaskName(event.currentTarget.value)}
                        />
                    </Grid.Col>
                    <Grid.Col span="content">
                        <Button
                            type="submit"
                            loading={isPending}
                            disabled={txMining || txSuccess || !Boolean(simulateData?.request)}
                            onClick={() => writeContract?.(simulateData!.request)}
                        >
                            Add
                        </Button>
                    </Grid.Col>
                </Grid>

                {fetching &&
                    Array(15)
                        .fill(0)
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        .map((_, index) => <Skeleton key={index} h={20} mt="sm" animate={false} />)}
                {tasks?.taskCategory?.tasks?.items.map((task) => {
                    return <Todo key={task.id} id={task.id} completed={task.completed} text={task.content} />;
                })}
            </SimpleGrid>
        </>
    );
}
