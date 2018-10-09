{this.state.complete.map((value, index) => {
    return (<div key={index} > {value}</div>)
  })}


  {this.state.all.map((value, index) => {
    return (<div key={index} > {value}</div>)
  })}








   Search = () => {
console.log('click');
let complete = [];
this.state.todos.map((value, index) => {
if (value.done) {
  complete.push(value.value);
}
});
this.setState({ complete })
}

Alldata = () => {
// console.log('click');
let all = [];
this.state.todos.map((value, index) => {
all.push(value.value);
});
this.setState({ all })
}

Incomplete = () => {
let incomplete = [];
this.state.todos.map((value, index) => {
if (value.done == false) {
  incomplete.push(value.value)
}
});
this.setState({ incomplete })
}






Search = (x) => {
let search = [];
if (x == 'complete') {
this.state.todos.map((value, index) => {
  if (value.done) {
    search.push(value);
  }
});
} else if (x == 'incomplete') {
this.state.todos.map((value, index) => {
  if (!value.done) {
    search.push(value);
  }
});
} else if (x == 'all') {
search = this.state.todos
}
this.setState({ search })
}