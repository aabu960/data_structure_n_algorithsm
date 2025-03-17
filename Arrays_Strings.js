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

}