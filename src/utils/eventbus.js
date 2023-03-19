class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, fn) {
    if(this.events[eventName]) {
      this.events[eventName].push(fn);
    } else {
      this.events[eventName] = [fn];
    }
  }
  off(eventName, fn) {
    let tasks = this.events[eventName].slice();
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn);
      if (index >= 0) {
        this.events[eventName].splice(index, 1);
      }
    }
  }
  emit(eventName, ...args) {
    if (this.events[eventName]) {
      let _tasks = this.events[eventName].slice();
      for(let fn of _tasks) {
        fn(...args);
      }
    }
  }
}

const eventbus = new EventEmitter();

export default eventbus;

