//CREATING MY OWN ARRAY 

class MyArray {
    constructor(){
        this.length = 0;
        this.data ={};
    }
// Retriving an array
get(index) {
    return this.data[index];

}
// Adding an array 
push(item) {
    this.data[this.length] = item;
    this.length++;

}
//Deleting
pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;
    return lastItem;
}
}
const playlist = new MyArray();
playlist.push(12)
playlist.pop(1);
console.log(playlist);
