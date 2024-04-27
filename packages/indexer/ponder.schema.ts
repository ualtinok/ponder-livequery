import { createSchema } from '@ponder/core';

export default createSchema((p) => ({
    TaskCategory: p.createTable({
        id: p.bigint(),
        name: p.string(),
        tasks: p.many('Task.categoryId'),
        taskCount: p.int(),
        owner: p.hex(),
    }),
    Task: p.createTable({
        id: p.string(),
        content: p.string(),
        completed: p.boolean(),
        categoryId: p.bigint().references('TaskCategory.id'),
    }),
}));
