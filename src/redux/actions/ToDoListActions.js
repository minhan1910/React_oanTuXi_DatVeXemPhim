import * as actionTypes from "../types/ToDoListTypes"

export const addTaskAction = (newTask) => ({
    type: actionTypes.add_task,
    newTask,
});

export const changeThemeAction = (themeId) => ({
    type: actionTypes.change_theme,
    themeId
});

export const doneTaskAction = (taskId) => ({
    type: actionTypes.done_task,
    taskId,
});

export const deleteTaskAction = (taskId) => ({
    type: actionTypes.delete_task,
    taskId,
});

export const editTaskAction = (taskEdit) => ({
    type: actionTypes.edit_task,
    taskEdit,
});

export const updateAskAction = (taskName) => ({
    type: actionTypes.update_task,
    taskName,
});

