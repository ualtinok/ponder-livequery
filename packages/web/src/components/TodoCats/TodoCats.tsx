import { TodoCatAddModal } from '@/components/TodoCats/TodoCatAddModal';
import { useTaskCategoriesQuery } from '@/generated/gql';
import { Button, Modal, SegmentedControl, SimpleGrid, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { Dispatch, SetStateAction } from 'react';
import classes from './TodoCats.module.css';

export interface TodoCatProps {
    setCategory?: Dispatch<SetStateAction<string>>;
}
export function TodoCats(props: TodoCatProps) {
    const { setCategory } = props;
    const [{ data: categories, fetching }] = useTaskCategoriesQuery();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <SimpleGrid mt={3}>
            {fetching &&
                Array(15)
                    .fill(0)
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    .map((_, index) => <Skeleton key={index} h={28} mt="sm" animate={false} />)}
            <SegmentedControl
                radius="md"
                size="md"
                fullWidth
                onChange={setCategory}
                orientation="vertical"
                data={
                    categories?.taskCategorys.items.map((category) => {
                        return { value: category.id, label: `${category.name} (${category.taskCount})` };
                    }) || []
                }
                classNames={classes}
            />

            <Button
                variant="filled"
                fullWidth
                radius="md"
                onClick={() => {
                    open();
                }}
            >
                Add Category
            </Button>

            <Modal opened={opened} onClose={close} title="Add Category">
                <TodoCatAddModal closePop={close} />
            </Modal>
        </SimpleGrid>
    );
}
