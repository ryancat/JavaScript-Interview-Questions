/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a code to remove duplicates from a linked list, *without* using
 * additional data structures.
 */

var to_delete = [];
function remove_duplicates_brust (list, to_delete) {
    var cur = list, cur_data;

    if (cur) {
        cur_data = cur.value;
        while (cur) {
            if (cur.next) {
                if (cur.next.value === cur_data) {
                    to_delete.push(cur.next);
                    cur.next = cur.next.next;
                }
            }

            cur = cur.next;
        }

        remove_duplicates_brust(list.next, to_delete);
    } else {
        return true;
    }
    

    
}




























/*____________________________________________________________________________*/

/**
 * @function {public static} removeDuplicates
 *
 * Removes duplicate nodes from a linked list.
 *
 * @param {ListElement} head - the head of the list.
 */
function removeDuplicates(head) {
    if (!head) {
        return;
    }

    var previous = head;
    var current = previous.next;
    var runner = null;
    var tmp = null;

    while (current !== null) {
        runner = head;

        while (runner !== current) {
            if (runner.data === current.data) {
                tmp = current.next;
                previous.next = tmp;
                current = tmp;
                break;
            }

            runner = runner.next;
        }

        if (runner === current) {
            previous = current;
            current = current.next;
        }
    }
}

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

var firstElement  = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement  = new ListElement(null, 20);
var fourthElement = new ListElement(null, 20);
var fifthElement  = new ListElement(null, 20);
var sixthElement  = new ListElement(null, 60);

firstElement.next  = secondElement;
secondElement.next = thirdElement;
thirdElement.next  = fourthElement;
fourthElement.next = fifthElement;
fifthElement.next  = sixthElement;

console.log(firstElement);
removeDuplicates(firstElement);
console.log(firstElement);

/*
Output: ($ /usr/bin/node 013.js)
{ next: { next: { next: [Object], data: 20 }, data: 30 }, data: 20 }
{ next: { next: { next: null, data: 60 }, data: 30 }, data: 20 }
*/
