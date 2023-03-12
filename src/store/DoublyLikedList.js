


class DoublyLinkedList {
  constructor() {
    this.nodes = [];
  }
  get size() {
    return this.nodes.length;
  }
  get head() {
    return this.size ? this.nodes[0] : null;
  }
  insertLast(value) {
    this.nodes[this.size] = value;
  }
  getAt(index) {
    return this.nodes[index];
  }
  nextSong(index){
    if(index < this.size-1){
      return this.nodes[index+1];
    }else{
      return this.nodes[0];
    }
  }
  previousSong(index){
    if(index == 0){
      console.log(this.nodes[0]);
      return this.nodes[0];
    }else{
      console.log(this.nodes[index-1]);
        return this.nodes[index-1];
    }
  }
  getIndex(value){
    return this.nodes.indexOf(value);
  }
  clear() {
    this.nodes = [];
  }
}

export const createDLL = (data) =>{
    const list = new DoublyLinkedList();
    data.map((obj)=> {
        list.insertLast(obj);
    })
    return list;
}

