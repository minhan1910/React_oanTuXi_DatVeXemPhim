import * as CreateTheme from '../../JSS_StyledComponent/Themes'
import * as actionTypes from '../types/ToDoListTypes';
import {arrTheme} from '../../JSS_StyledComponent/Themes/ThemeManager';

const initialState = {
    themeToDoList: CreateTheme.ToDoListDarkTheme,
    taskList: [
        {id:'task-1', taskName:'Demo task 1', done:true},
        {id:'task-2', taskName:'Demo task 2', done:false},
        {id:'task-3', taskName:'Demo task 3', done:true},
        {id:'task-4', taskName:'Demo task 4', done:false},
    ],
    taskEdit: {id:'-1', taskName:'', done:false},
}

const toDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.add_task: {
            //check empty
            if(!action.newTask.taskName.trim()) {
                alert('Task name is required');
                return {...state};
            }

            //isExist
            let taskListUpdate = [...state.taskList];
            
            let index = taskListUpdate.findIndex(task => task.taskName === action.newTask.taskName);

            if(index !== -1) {
                alert('Task name already exists');
                return {...state};
            }

            taskListUpdate.push(action.newTask);

            //xử lý xong thì gán taskList mới vào taskList
            state.taskList = [...taskListUpdate];
            return {...state};
        }   

        case actionTypes.change_theme: {
            const theme = arrTheme.find(theme => theme.id === parseInt(action.themeId));
            if(theme) {
                state.themeToDoList = {...theme.theme};
            }

            return {...state};
        }

        case actionTypes.done_task: {
            //dùng let chứ ko nên dùng const
            //khi thay đổi object trong mảng
            //nó sẽ bị chậm hiệu suất hoặc sai logic
            let taskListUpdate = [...state.taskList];

            const indexTaskChange = taskListUpdate.findIndex(task => task.id === action.taskId);

            if(indexTaskChange !== -1) {
                taskListUpdate[indexTaskChange].done = true; 
            }           

            return {
                ...state,
                 taskList: taskListUpdate,
            };
        }

        case actionTypes.delete_task: {
            return {
                ...state,
                taskList: state.taskList?.filter(task => task.id !== action.taskId),
            };
        }

        case actionTypes.edit_task: {
            return {
                ...state,
                taskEdit: action.taskEdit,
            };
        }

        case actionTypes.update_task: {
            state.taskEdit = {...state.taskEdit, taskName: action.taskName}

            //Chỉnh sửa lại taskList
            let taskListUpdate = [...state.taskList];

            const index = taskListUpdate.findIndex(task => task.id === state.taskEdit.id);

            if(index !== -1) {
                taskListUpdate[index] = state.taskEdit;
                alert('Update Successfully !!');
            }
            state.taskList = taskListUpdate;
            //Để lại để chút lifecycle nó có thể bấm edit lại được
            state.taskEdit = {id:'-1', taskName:'', done:false};
            
            return {...state};
        }
        
        default:
            return {...state};
    }
}

export default toDoListReducer;