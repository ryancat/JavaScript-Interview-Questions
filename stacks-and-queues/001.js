/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a Stack object by using a linked list of integers.
 * Use the structure in linked-lists/001.js for list items.
 * The stack should have push(int), pop(), and peek() methods.
 */

var List_my = function (value, next) {
    this.value = value;
    this.next = next;
};

var Stack_my = function (n) {
    var cur, head, tail;

    if (n <= 0) {
        return null;
    }
    head = new List_my(0, null);
    tail = head;

    while (n > 1) {
        cur = new List_my(0, head);
        head = cur;
        n -= 1;
    }

    this.head = head;
}

Stack_my.prototype = {
    push: function (value) {
        var new_node = new List_my(value);
        if (new_node) {
            new_node.next = this.head;
            this.head = new_node;
        }
    },

    pop: function () {
        var to_pop = this.head;
        this.head = this.head.next;

        to_pop.next = null;
        return to_pop.value;
    }, 

    peek: function () {
        return this.head.value;
    }
}




























/*____________________________________________________________________________*/

/**
 * @class {public} Stack
 *
 * A basic stack implementation.
 */
function Stack() {
    this.head = null;
}

var sp = Stack.prototype;

/**
 * @function {public} Stack.push
 *
 * Pushes data to Stack.
 *
 * @param {Integer} data - the data to push.
 */
sp.push = function(data) {
    var node = new ListElement(null, data);

    if (this.head) {
        node.next = this.head;
        this.head = node;

        return;
    }

    this.head = node;
};

/**
 * @function {public} Stack.pop
 *
 * Pops data from the Stack.
 *
 * @return the popped data.
 */
sp.pop = function() {
    if (this.head) {
        var tmp = this.head;

        this.head = this.head.next;

        return tmp.data;
    }

    return null;
}

/**
 * @function {public} Stack.peek
 *
 * Gets the value at the top of the stack.
 *
 * @return the top value if exists, `null` if stack is empty.
 */
sp.peek = function() {
    if (this.head) {
        return this.head.data;
    }

    return null;
};

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}

/*____________________________________________________________________________*/

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());

/*
Output: ($ /usr/bin/node 001.js)
3
3
2
2
1
1
null
null
*/
