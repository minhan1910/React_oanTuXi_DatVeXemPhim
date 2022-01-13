import React, { Component } from "react";
import { Container } from "../../ComponentsToDoList/Container";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import { TextField, Label, Input } from "../../ComponentsToDoList/TextField";
import { Button } from "../../ComponentsToDoList/Button";
import {
  Table,
  Td,
  Th,
  Tr,
  Thead,
  Tbody,
} from "../../ComponentsToDoList/Table";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { ThemeProvider } from "styled-components";
import * as CreateTheme from "../../Themes";
import { connect } from "react-redux";
import * as CreateAction from "../../../redux/actions/ToDoListActions.js";
import { arrTheme } from "../../Themes/ThemeManager";
import * as ActionReducer from "./modulesListTasks/actions";

class ToDoList extends Component {
  state = {
    taskName: "",
    disabled: true,
    loading: false,
    data: null,
    error: null,
  };

  componentDidMount() {
    this.props.fetchData();
    console.log(this.props.data);
  }

  renderTaskCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task) => {
        return (
          <Tr key={task.id}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(CreateAction.deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskListToDo = () => {
    //dùng filter vs map sẽ chạy nhanh hơn flatMap
    return this.props.taskList
      ?.filter((task) => !task.done)
      .map((task) => {
        return (
          <Tr key={task.id}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={ async () => {


                    //Ở đây nó sẽ bị bất đồng bộ 
                    //do chưa kịp setState thì nó dispatch lên thay đổi props
                    //cũng render lại thì khả năng cao sẽ bị lỗi
                    //=======> Process Async
                   await this.setState({ 
                      disabled: false,
                  });

                  this.props.dispatch(CreateAction.editTaskAction(task));
                }}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>

              <Button
                onClick={() => {
                  this.props.dispatch(CreateAction.doneTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>

              <Button
                onClick={() => {
                  this.props.dispatch(CreateAction.deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTheme = () => {
    return arrTheme?.map((theme) => (
      <option value={theme.id}>{theme.name}</option>
    ));
  };

  //trước khi render thì set lại cái state và truyền từ cái state xuống chứ ko lấy từ props
  //vì khi lấy từ props nó sẽ bị ghi đè lên giá trị khi bị setState lại lúc người dùng nhập 1 ký tự
  // UNSAFE_componentWillReceiveProps(newProps) {
  //     console.log('this props',this.props);
  //     console.log('newProps', newProps);
  //     this.setState({
  //         taskName: newProps.taskEdit.taskName
  //     });
  // }

  // static getDerivedStateFromProps(newProps, currentState) {
  //     //newProps là props mới , props cũ là this.props (không truy xuất được)
  //     //currentState: ứng với state hiện tại this.state

  //     //hoặc trả về state mới (this.state)
  //     let newState = {...currentState, taskName: newProps.taskEdit.taskName};
  //      return newState;

  //     //trả về null state giữ nguyên
  //     return null;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(e) => {
              const { value } = e.target;
              //dispath value to reducer
              this.props.dispatch(CreateAction.changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>

          <Heading3 className="mt-2">To Do List</Heading3>

          <TextField
            value={this.state.taskName}
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            label="Task name"
            className="w-50"
          />

          <Button
            onClick={() => {
              //Lấy thông tin người dùng vào từ input
              let { taskName } = this.state;
              //Tạo ra 1 task object
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: false,
              };
              //đưa task object lên redux thônng qua phương thức dispatch
              this.props.dispatch(CreateAction.addTaskAction(newTask));
            }}
            className="ml-2"
          >
            <i className="fa fa-plus"></i> Add Task
          </Button>
          
          {
        //Check disabled
          this.state.disabled ? (
            <Button
              disabled
              onClick={() => {
                this.props.dispatch( 
                  CreateAction.updateAskAction(this.state.taskName)
                );
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update Task
            </Button>
          ) : (
            <Button
              onClick={ async () => {

                let {taskName} = this.state;

                await this.setState({                    
                    disabled: true, 
                    taskName: '',
                });

                this.props.dispatch(
                  CreateAction.updateAskAction(taskName)
                );

              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update Task
            </Button>
          )}
          <hr />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>{this.renderTaskListToDo()}</Thead>
          </Table>

          <Heading3>Task Completed</Heading3>
          <Table>
            <Thead>{this.renderTaskCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  //đây là lifecycle trả về props cũ và state cũ của component trước khi render
  //(lifecycle này chạy sau khi render)
  componentDidUpdate(prevProps, prevState) {
    //nếu ko có đk thì nó sẽ bị lặp vô tận nếu setState
    //vì khi nó set lại sẽ render lại gặp did này set tiếp => infinity

    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoList.themeToDoList,
    taskList: state.ToDoList.taskList,
    taskEdit: state.ToDoList.taskEdit,
    data: state.ListAllToDoList.data,
    loading: state.ListAllToDoList.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(ActionReducer.actFetchData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
