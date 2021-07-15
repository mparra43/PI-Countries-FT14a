// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 1

export const addActivity = function (payload) {
    return {
        type: 'AddActivity',
        payload: {
            ...payload,
            status: 'Todo',
            id: todoId++,
        }
    }
};

export const removeTodo = function (payload) {
    return {
        type: 'RemoveTodo',
        payload: payload,
    }
};

export const toInProgress = function (payload ) {
    return {
        type: 'ToInProgress',
        payload: payload,
    }
};

export const toDone = function (payload) {
    return {
        type: 'ToDone',
        payload: payload,
    }
};
