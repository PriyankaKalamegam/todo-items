(this["webpackJsonpsimple-todo-app"]=this["webpackJsonpsimple-todo-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),l=a(5),i=a(1),d=a(2),s=a(4),p=a(3);var u=function(e){var t=e.todo,a=t.completed,n=t.id,r=t.title;return o.a.createElement("div",null,o.a.createElement("li",{className:"todo-item"},o.a.createElement("input",{type:"checkbox",checked:a,onChange:function(){return e.handleChangeProps(n)}}),o.a.createElement("button",{onClick:function(){e.deleteTodoProps(e.todo.id)}},"DELETE"),o.a.createElement("span",{style:e.todo.completed?{fontStyle:"italic",color:"#d35e0f",opacity:.4,textDecoration:"line-through"}:null},r)))},m=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.props.todos.map((function(t){return o.a.createElement(u,{key:t.id,todo:t,handleChangeProps:e.props.handleChangeProps,deleteTodoProps:e.props.deleteTodoProps}," ")})))}}]),a}(n.Component),h=function(){return o.a.createElement("header",{style:{padding:"20px 0",lineHeight:"2em"}},o.a.createElement("h1",{style:{fontSize:"25px",marginBottom:"15px"}},"Simple Todo App"),o.a.createElement("p",{style:{fontSize:"19px"}},"Please add to-dos item(s) through the input field"))},f=a(8),b=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addTodoProps(e.state.title),e.setState({title:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-container"},o.a.createElement("input",{type:"text",className:"input-text",placeholder:"Add Todo Items here...",value:this.state.title,name:"title",onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"Submit",className:"input-submit"}))}}]),a}(n.Component),v=a(17),E=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:Object(v.a)(),title:"Exercise for an Hour",completed:!1},{id:Object(v.a)(),title:"Practice React everyday",completed:!1},{id:Object(v.a)(),title:"Water the plants",completed:!1}]},e.handleChange=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(l.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodoItem=function(t){var a={id:Object(v.a)(),title:t,completed:!1};e.setState({todos:[].concat(Object(l.a)(e.state.todos),[a])})},e}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(h,null),o.a.createElement(b,{addTodoProps:this.addTodoItem}),o.a.createElement(m,{todos:this.state.todos,handleChangeProps:this.handleChange,deleteTodoProps:this.delTodo}))}}]),a}(o.a.Component);a(14);c.a.render(o.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.0ae4e626.chunk.js.map