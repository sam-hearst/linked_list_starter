class LinkedListNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        // Your code here
        this.head = null;
        this.length = 0
    }

    addToHead(val) {
        // Your code here


        let node = new LinkedListNode(val);
        node.next = this.head
        this.head = node
        this.length++
        return
    }

    addToTail(val) {
        // Your code here
        let newNode = new LinkedListNode(val);
        this.length++
        if (!this.head) {
            this.head = newNode
            return this
        }

        let currentNode = this.head

        while (currentNode.next) {  // this logic gets me the tail
            currentNode = currentNode.next
        }

        currentNode.next = newNode
        return this
    }

    // You can use this function to help debug
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log("NULL");
    }
}

module.exports = LinkedList;
