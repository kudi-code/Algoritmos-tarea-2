class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getNextNode() {
        return this.nextNode;
    }

    setNextNode(nextNode) {
        this.nextNode =  nextNode;
    }
}

class List {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        newNode.setNextNode(this.head);
        this.head = newNode;
    }

    remove(data) {
        let current = this.head;
        let previous = null;
        let found = false;

        while (!found) {
            if(current.getData() === data) {
                found = true;
            } else {
                previous = current;
                current = current.getNextNode();
            }
        }

        if(previous === null) {
            this.head = current.getNextNode();
        } else {
            previous.setNextNode(current.getNextNode());
        }
    }

    size() {
        let current = this.head;
        let counter = 0;

        while (current !== null) {
            counter ++;
            current = current.getNextNode();
        }

        return counter;
    }

    isEmpty() {
        return this.head === null;
    }

    search(data) {
        let current = this.head;
        let found = false;

        while(current && !found) {
            if(current.getData() === data) {
                found = true;
            } else {
                current = current.getNextNode();
            }
        }

        return found;
    }
    append(data){
        let current = this.head;

        while(current) {
            current = current.getNextNode();
        }
        this.add(data)
    }
    index(){
        let current = this.head;
        let found = false;
        let index =0

        while(current && !found) {
            if(current.getData() === data) {
                found = true;
            } else {
                current = current.getNextNode();
                index++
            }
        }

        return index;

    }
    insert(pos, item){
        let current = this.head;
        let index =0
        while(current) {
            if(index === pos) {
                this.add(item)
            }
        }

    }
    pop(){
        let current = this.head;

        while(current) {
            current = current.getNextNode();
        }
        this.remove(current.getData())        

    }
    pop(pos){
        let current = this.head;
        let index =0
        while(current) {
            if(index === pos) {
                this.head = current.getNextNode();
                break
            } else {
                current = current.getNextNode();
                index++
            }
        }
    }
}

const list = new List();
list.add(1); // 
list.add(2); // 
list.add(5)
console.log(list.search(3));



