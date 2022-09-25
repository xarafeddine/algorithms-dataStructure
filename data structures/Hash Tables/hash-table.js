class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const PrimeNum = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let code = key.charCodeAt(i);
      total = (total * PrimeNum + code) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const hashedKey = this._hash(key);
    const arr = [key, value];
    if (this.keyMap[hashedKey]) {
      let exist = this.keyMap[hashedKey].some((arr) => key === arr[0]);
      if (exist) return "already exist";
      this.keyMap[hashedKey].push(arr);
    } else {
      this.keyMap[hashedKey] = [arr];
    }
    return hashedKey;
  }

  get(key) {
    const hashedKey = this._hash(key);
    if (this.keyMap[hashedKey]) {
      for (let i = 0; i < this.keyMap[hashedKey].length; i++) {
        if (this.keyMap[hashedKey][i][0] === key) {
          return this.keyMap[hashedKey][i][1];
        }
      }
    }
    return undefined;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return valuesArr;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keysArr;
  }
}

let hashMap = new HashTable(4);
hashMap.set("yellow", "yyy");
hashMap.set("green", "ggg");
hashMap.set("blue", "bbb");
hashMap.set("red", "rrr");

debugger;
