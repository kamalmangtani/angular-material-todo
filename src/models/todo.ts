export class Todo {
    taskDescription : string;
    isCompleted :Boolean;

    constructor(desc :string, isCompleted: Boolean) {
        this.isCompleted = isCompleted;
        this.taskDescription = desc;
    }
}