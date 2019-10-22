(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/add-task/add-task.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-task/add-task.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class='card-body'>    \n        <div class='content row'>\n            <textarea id={{task.tempId}} class=\"col-11 form-control\" type=\"text\" value={{task.task}}\n             placeholder=\"Add a task...\" (keydown.enter)=\"$event.preventDefault()\" (keydown.enter)=\"addTask(task.tempId)\">\n            </textarea>\n            <mat-icon class='icons col-1' >delete</mat-icon>\n        </div>   \n    </div>\n </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <app-todo></app-todo>\n</router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div id='taskItem' class='card-body'>    \n        <div class='content row'>\n            <textarea class=\"col-11 form-control\" type=\"text\" id={{task.task_id}}\n            value={{task.task}} placeholder=\"Add a task...\" (keydown.enter)=\"$event.preventDefault()\" (keydown.enter)=\"enterTask(task)\">\n            </textarea>\n            <mat-icon class='icons col-1' (click)='deleteTask(task.task_id)' >delete</mat-icon>\n        </div>   \n    </div>\n </div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" class=\"container\">\n        <div class=\"row justify-content-center\">\n                <h1>Todo App!</h1>\n                <form>\n                    <input id='inputTask' name='taskInput' [(ngModel)]='task'>\n                    </form>\n                    <button id='addTask' (click)='addTask()'>Add Task</button>\n                    <div *ngIf='show'>\n                    <button id='testButton'>Hello!!</button>\n                    </div>\n                    <button (click)='newTask()'>new task</button>\n        </div>\n        <div class=\"row justify-content-center\">\n            <app-task class=\"col-8\" *ngFor='let task of taskList; let i = index' [task]='task' [index]='i'></app-task>\n            <app-add-task class=\"col-8\" *ngFor='let task of addTaskList' [task]='task'></app-add-task> \n        </div>   \n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons:hover {\n  cursor: pointer;\n}\n\n.card {\n  background: #cbd1d1;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n  outline: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXRhc2svRDpcXE1hc3Rlcm1pbmRcXHRvRG9MaXN0M1xcdG9Eb0xpc3RcXGFuZ3VsYXIvc3JjXFxhcHBcXGFkZC10YXNrXFxhZGQtdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRkLXRhc2svYWRkLXRhc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FkZC10YXNrL2FkZC10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pY29uczpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMywgMjA5LCAyMDkpO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSIsIi5pY29uczpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjY2JkMWQxO1xufVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");



let AddTaskComponent = class AddTaskComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
    }
    addTask(tempId) {
        if (document.getElementById(tempId).value) {
            return false;
        }
        else {
            this.obj = {
                task: this.task,
                userId: 1
            };
            this.user.createTask(this.obj).subscribe();
        }
    }
};
AddTaskComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddTaskComponent.prototype, "task", void 0);
AddTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-task',
        template: __webpack_require__(/*! raw-loader!./add-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/add-task/add-task.component.html"),
        styles: [__webpack_require__(/*! ./add-task.component.scss */ "./src/app/add-task/add-task.component.scss")]
    })
], AddTaskComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'To Do List';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo.component */ "./src/app/todo/todo.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _todo_todo_component__WEBPACK_IMPORTED_MODULE_6__["TodoComponent"],
            _task_task_component__WEBPACK_IMPORTED_MODULE_8__["TaskComponent"],
            _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__["AddTaskComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/task/task.component.scss":
/*!******************************************!*\
  !*** ./src/app/task/task.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icons:hover {\n  cursor: pointer;\n}\n\n.card {\n  background: #cbd1d1;\n}\n\ntextarea {\n  width: 100%;\n  resize: none;\n  overflow: auto;\n  outline: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay9EOlxcTWFzdGVybWluZFxcdG9Eb0xpc3QzXFx0b0RvTGlzdFxcYW5ndWxhci9zcmNcXGFwcFxcdGFza1xcdGFzay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzay90YXNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZUFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmljb25zOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAzLCAyMDksIDIwOSk7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59IiwiLmljb25zOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNjYmQxZDE7XG59XG5cbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");



let TaskComponent = class TaskComponent {
    constructor(user) {
        this.user = user;
    }
    ngOnInit() {
    }
    enterTask(taskItem) {
        var input = document.getElementById(taskItem.task_id).value;
        var previousTask = taskItem.task;
        if (input !== previousTask) {
            console.log(input, previousTask);
            console.log("post to database");
        }
        else {
            console.log("Nothing");
        }
    }
    deleteTask(id) {
        var params = {
            taskId: id
        };
        console.log(params);
        this.user.deleteTask(params).subscribe();
    }
};
TaskComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "task", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskComponent.prototype, "index", void 0);
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: __webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task.component.html"),
        styles: [__webpack_require__(/*! ./task.component.scss */ "./src/app/task/task.component.scss")]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/todo/todo.component.scss":
/*!******************************************!*\
  !*** ./src/app/todo/todo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/todo/todo.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");



let TodoComponent = class TodoComponent {
    constructor(user) {
        this.user = user;
        this.task = null;
        this.addTaskList = [];
        this.userId = 1;
    }
    ngOnInit() {
        this.user.getTasks(this.userId).subscribe(data => {
            this.taskList = data;
        });
    }
    addTask() {
        if (this.task === "" || this.task === null) {
            return false;
        }
        else {
            this.obj = {
                task: this.task,
                userId: 1
            };
            this.user.createTask(this.obj).subscribe(() => {
                this.show = true;
            });
        }
    }
    newTask() {
        var arrayLength = this.addTaskList.length;
        var newTask = {
            completed: false,
            task: null,
            tempId: arrayLength
        };
        if (this.addTaskList.length === 0) {
            console.log(newTask);
            this.addTaskList.push(newTask);
        }
        else if (document.getElementById(`${arrayLength - 1}`).value !== "") {
            this.addTaskList.push(newTask);
        }
        else {
            return false;
        }
        //   if (this.taskList.slice(-1)[0].task === "" || this.taskList.slice(-1)[0].task === null) {
        //     console.log(this.taskList)
        //     return false;
        //   } else {
        //   var newTask = {
        //       completed: false,
        //       task: null,
        //     }
        //   this.taskList.push(newTask);
        //   }
    }
};
TodoComponent.ctorParameters = () => [
    { type: _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }
];
TodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo.component.html"),
        styles: [__webpack_require__(/*! ./todo.component.scss */ "./src/app/todo/todo.component.scss")]
    })
], TodoComponent);



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
    }
    createTask(user) {
        return this.http.post('/api/createTask', user);
    }
    getTasks(params) {
        const options = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('userId', params);
        return this.http.get('/api/get', { params: options });
    }
    deleteTask(params) {
        return this.http.post('/api/deleteTask', params);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Mastermind\toDoList3\toDoList\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map