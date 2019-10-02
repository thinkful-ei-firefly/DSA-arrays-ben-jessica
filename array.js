/* eslint-disable strict */
const Memory = require('./memory');
const memory = new Memory();

class MyArray {
  constructor() {
    this.length = 0;
    this.capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this.capacity) {
      this.resize((this.length+1)* MyArray.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory!');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this.capacity = size;
  }

}
MyArray.SIZE_RATIO = 3;

module.exports = MyArray;