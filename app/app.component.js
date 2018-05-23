System.register(['angular2/core', './todo.service', './sort-pipe.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, sort_pipe_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (sort_pipe_component_1_1) {
                sort_pipe_component_1 = sort_pipe_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                //creating an istance of todoService
                function AppComponent(_todoService) {
                    this._todoService = _todoService;
                    this.edited = false;
                    this.changes = 0;
                }
                ;
                //getting the todos list
                AppComponent.prototype.getTodos = function () {
                    var _this = this;
                    /*calling the getTodos() method of TodoService,
                   when the promise it's done, (than) we use a callback function (=>)
                   with heroes as parameter and this.heroes = heroes as statment.
                   it's the same of: todoService.getTodos().then(function(todos) {this.todos = todos}) */
                    this._todoService.getTodos().then(function (todos) { return _this.todos = todos; });
                };
                //method that it will be calleld by angular at proper time in the beggining
                AppComponent.prototype.ngOnInit = function () {
                    this.getTodos();
                };
                //method to add a new todo in the list
                AppComponent.prototype.addNewTodo = function () {
                    //adding an element at the biggining, use push if you want at the end
                    this.todos = this.todos.concat({ "name": "New Todo, edit it!", completed: false });
                    this.saveTodos();
                };
                AppComponent.prototype.saveTodos = function () {
                    //show box msg
                    this.edited = true;
                };
                AppComponent.prototype.editTodo = function (todo) {
                    //this.todos = this.todos.slice();
                    this.saveTodos();
                };
                //method to remove the selected todo from the list
                AppComponent.prototype.deleteTodo = function (i) {
                    this.todos.splice(i, 1);
                    //this.todos = this.todos.slice();
                    this.saveTodos();
                };
                AppComponent.prototype.makeAChange = function () {
                    console.log('>> makeAChange');
                    this.changes += 1;
                };
                AppComponent.prototype.completeTodo = function (todo) {
                    todo.completed = !todo.completed;
                    //this.todos = this.todos.slice();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        //name of the html element
                        selector: 'my-app',
                        //view of the selector,  " ` " is alt + 9
                        templateUrl: "./app/todo-list.component.html",
                        providers: [todo_service_1.TodoService],
                        pipes: [sort_pipe_component_1.TodosSortPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map