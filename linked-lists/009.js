/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Start with the data structure in 008.js
 * Devise an algorithm to flatten the list, so that all the nodes appear
 * in a single-level doubly linked list.
 * Then write an algorithm to unflatten the flattened list back to its
 * initial position.
 * Assume you are given global references to head and tail of the first level
 * list.
 */


var head = null, tail = null;

function flattenList_dfs () {
    var cur = head, pause = [], temp_last, temp_first;
    if (!head || !tail) {
        return false;
    }

    while (cur || pause.length > 0) {
        if (cur) {
           if (cur.child) {
                pause.push(cur);
                cur = cur.child;
                cur.prev = pause[pause.length - 1]; 
            } else {
                if (!cur.next) {
                    temp_last = cur;
                } 
                cur = cur.next;
            } 
        } else {
            cur = pause.pop();
            temp_first = cur.next;
            cur.next = cur.child;

            if (temp_first) {
                temp_first.prev = temp_last;
                temp_last.next = temp_first;

                cur = temp_first;
            } else {
                cur = undefined;
            }
            

        } 
    }
    return true;
}


function flatten_bfs () {
    var cur = head, queue =[], temp_node;

    addToQueue(queue, cur);

    while (queue.length > 0) {
        cur = queue.shift();
        if (temp_node) {
            temp_node.next = cur;
            cur.prev = temp_node;
        }
        if (cur.child) {
            addToQueue(queue, cur.child);
        }
        temp_node = cur;
    }
}

function addToQueue (q, list_head) {
    while (list_head) {
        q.push(list_head);
        list_head = list_head.next;
    }
}


function unflatten_bfs (list) {
    var cur = head, temp_next;

    while (cur) {
        if (cur.child) {
            cur.child.prev = undefined;
        }

        cur = cur.next;
    }

    cur = head;
    while (cur) {
        temp_next = cur.next;
        if (temp_next) {
            if (!temp_next.prev) {
                cur.next = undefined;
            }
        }
        cur = temp_next;
    }
}









// var l1 = new D_List(1, l2, undefined, undefined);
// var l2 = new D_List(2, l7, l1, l3);
// var l3 = new D_List(3, l6, undefined, l4);
// var l4 = new D_List(4, l5, undefined, undefined);
// var l5 = new D_List(5, undefined, l4, undefined);
// var l6 = new D_List(6, undefined, l3, undefined);
// var l7 = new D_List(7, undefined, l2, undefined);

var l1 = new D_List(1),
l2 = new D_List(2), 
l3 = new D_List(3),
l4 = new D_List(4),
l5 = new D_List(5),
l6 = new D_List(6),
l7 = new D_List(7);


l1.next = l2;
l2.prev = l1;
l2.next = l7;
l2.child = l3;
l3.next = l6;
l3.child = l4;
l4.next = l5;
l5.prev = l4;
l6.prev = l3;
l7.prev = l2;


head = l1;
tail = l7;










 /*____________________________________________________________________________*/

/**
 * @function {public static} flattenList
 *
 * Flattens the list.
 */
function flattenList() {
    var currentNode = head;

    while (currentNode) {
        if (currentNode.child) {
            append(currentNode.child);
        }

        currentNode = currentNode.next;
    }
}

/**
 * @function {public static} append
 *
 * Appends the child to the tail of the list,
 * and updates the tail.
 *
 * @param {ListElement} child - the child node to append.
 */
function append(child) {
    var currentNode = null;

    tail.next = child;
    child.prev = tail;

    currentNode = child;

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

/**
 * @function {public static} unflattenList
 *
 * Unflattens the list.
 */
function unflattenList() {
    var currentNode = head;

    unflatten(head);

    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    tail = currentNode;
}

/**
 * @function {public static} unflatten
 *
 * Recursively unbinds the childNode from its
 * previous node.
 *
 * @param {ListElement} childNode - the node to unbind.
 */
function unflatten(childNode) {
    var currentNode = childNode;

    while (currentNode) {
        if (currentNode.child) {
            currentNode.child.prev.next = null;
            currentNode.child.prev = null;

            unflatten(currentNode.child);
        }

        currentNode = currentNode.next;
    }
}
