/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Given two numbers represented by a linked list, where each node contains
 * a single digit and the least significant digit is the head of the list
 * (i.e. the numbers are stored in reverse order), write a function to add
 * those two numbers and return the sum as another linked list.
 * Use the ListElement class in 001.js
 */





function math_add_list (list1, list2) {
    var head1 = list1, head2 = list2, cur1 = head1, cur2 = head2, carry = 0, sum = 0, result = new List(-1), result_tail = result;

    while (cur1 || cur2) {
        carry = 0;
        console.log(result_tail);
        result_tail.next = new List(0);
        console.log(result_tail.next);
        result_tail = result_tail.next;
        console.log(result_tail);
        if (!cur1 || !cur2) {
            if (cur1) {
                sum = cur1.value;
            } else {
                sum = cur2.value;
            }
            result_tail.value = sum + carry;
            carry = 0;
        } else {
            sum = cur1.value + cur2.value;
            if (sum > 9) {
                sum -= 10;
                result_tail.value = sum + carry;
                carry = 1;
            } else {
                result_tail.value = sum + carry;
                carry = 0;
            }
        }

        if (cur1) {
            cur1 = cur1.next;
        }
        if (cur2) {
            cur2 = cur2.next;
        }
    }

    return result;
}


var l1 = new List(2);
l1.next = new List(1);

var l2 = new List(5);
l2.next = new List(3);




















/*____________________________________________________________________________*/

function addLists(node1, node2, carry) {
    if (!node1 && !node2) {
        if (carry) {
            return new ListElement(null, carry);
        }

        return null;
    }

    if (!carry) {
        carry = 0;
    }

    var result = new ListElement(null, carry);

    var value = carry;

    if (node1) {
        value += node1.data;
    }

    if (node2) {
        value += node2.data;
    }

    result.data = value % 10;

    var more = addLists(
        node1 ? node1.next : null,
        node2 ? node2.next : null,
        value > 10 ? 1 : 0
    );

    result.next = more;

    return result;
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


var a1 = new ListElement(null, 8);
var a10 = new ListElement(null, 7);

a1.next = a10;

var b1 = new ListElement(null, 8);
var b10 = new ListElement(null, 7);

b1.next = b10;

var sum = addLists(a1, b1);

console.log(a1);
console.log(b1);
console.log(sum);

/*
Output: ($ /usr/bin/node 015.js)
                   { next: { next: null, data: 7 }, data: 8 }
                   { next: { next: null, data: 7 }, data: 8 }
{ next: { next: { next: null, data: 1 }, data: 5 }, data: 6 }
*/
