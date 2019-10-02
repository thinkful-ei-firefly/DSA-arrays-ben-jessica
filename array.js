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

  get(index) {
    if (index <0 || index > this.length-1) {
      throw new Error ('Index out of bounds!');
    }
    return memory.get(this.ptr+index);
  }

  pop() {
    if (this.length <= 0) {
      throw new Error ('Cannot pop() an empty array!');
    }
    const lastItem = this.get(this.length-1);
    this.length --;
    return lastItem;
  }

  insert (index, value) {
    if (index < 0 || index > this.length-1) {
      throw new Error ('Index out of bounds!');
    }
    if (this.length >= this.capacity) {
      this.resize((this.length+1)* MyArray.SIZE_RATIO);
    }
    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr+index, value);
    this.length++;
  }

  remove (index) {
    if (index < 0 || index > this.length-1) {
      throw new Error ('Index out of bounds!');
    }
    memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}
MyArray.SIZE_RATIO = 3;

module.exports = MyArray;