class LinkedList {
    constructor() {
        this.head = null;
    }
    unshift(item) {
        //add the new item to the start of my linkedlist

        let node = new Node(item, this.head);
        node.previous = this.head;
        this.head = node;
    }
    shift() {
        //opposite of unshift, it removes the first item from the list
        let el2 = this.head.next;
        console.log(`This is our second element: ${el2}`)
        console.log(el2.next);

        this.head = el2;
    }
    removeAll(item) {
        //Removes all instances of item from the list
    }
    removeAt(index) {
        //Remove an Item at a particular index
        let node = this.head;
        let prev = null;
        for (let i = 0; i <= index; i++) {
            if (i === index - 1) {
                prev = node;
            }
            else if (i === index) {
                //If we're not at the of the linkedlist
                if (node.next !== null) {
                    let newNext = node.next;
                    prev.next = newNext;
                }
                else{
                    //if we ARE at the end of the linkedlist
                    let newNext = null;
                    prev.next = newNext;
                }
            }
            node = this.getNextNode(node);
        }

    }
    getNextNode(node) {
        //Step one node further into our linkedList
        let n = node.next;
        return n;
    }


    print() {
        //This will print each node in my linked list
        let node = this.head;

        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }


}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

let list = new LinkedList();

list.unshift("heeey");
list.unshift(1234);
list.unshift("slim shady");
list.unshift(true);
list.unshift("slim shady");
list.unshift("slim shady");
list.removeAt(2);
list.removeAt(4);
list.removeAt(4);

list.print();