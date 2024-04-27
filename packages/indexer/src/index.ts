import { ponder } from '@/generated';

ponder.on('Todo:NewCategory', async ({ event, context }) => {
    const { TaskCategory } = context.db;

    await TaskCategory.create({
        id: event.args.id,
        data: {
            name: event.args.text,
            taskCount: 0,
            owner: event.transaction.from,
        },
    });
});

ponder.on('Todo:NewTask', async ({ event, context }) => {
    const { Task, TaskCategory } = context.db;

    await Task.create({
        id: `task/${event.args.catId}/${event.args.taskId}`,
        data: {
            content: event.args.text,
            completed: false,
            categoryId: event.args.catId,
        },
    });
    await TaskCategory.update({
        id: event.args.catId,
        data: ({ current }) => ({
            taskCount: current.taskCount ? current.taskCount + 1 : 1,
        }),
    });
});
