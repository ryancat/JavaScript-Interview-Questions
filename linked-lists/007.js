/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Devise a time and space efficient algorithm to find the mth-to-last element
 * of a singly linked list.
 * Use the structure in 001.js as a template.
 * Assume a global pointer to the head.
 */


var buffer = [];
var head = null;

var find_element_m = function (list, m) {
    var current = 0;
    if (!list || m < 0) {
        return null;
    }

    if (!head.next) {
        if (m === 1) {
            return head;
        } else {
            return null;
        }
    }

    do {
        buffer[current % m] = head;
        console.log(buffer, current % m);
        current += 1;
        head = head.next;
    } while (head !== undefined);

    head = list;
    
    if (current < m) {
        return null;
    } else {
        console.log(current);
        return buffer[current % m];
    }
};

var find_ele_m_new = function (list, m) {
    var cur = head, result = head, i; 

    for (i = 0; i < m - 1; i += 1) {
        if (cur.next) {
            cur = cur.next;
        } else {
            return null;
        }
    }

    while (cur.next) {
        cur = cur.next;
        result = result.next;
    }

    return result;
}



























 /*____________________________________________________________________________*/

/**
 * @class {public} ListElement - denotes a list node.
 * @param {ListElement} next - the next node. (null if it's tail)
 * @param {Integer} data - list data.
 */
function ListElement(next, data) {
    this.next = next;
    this.data = data;
}

/**
 * @function {public static} findMToLast
 *
 * Finds mth-to-last element of a list
 *
 * @param {Integer} m - the mth index to find the element at.
 *
 * @return the found element if exists, `null` otherwise.
 */
function findMToLast(m) {
    var current = head;
    var mBehind = head;
    var i = 0;

    for (i = 0; i < m; i++) {
        if (current.next) {
            current = current.next;
        } else {
            return null;
        }
    }

    while (current.next) {
        current = current.next;
        mBehind = mBehind.next;
    }

    return mBehind;
}

 /*____________________________________________________________________________*/

 var head = null;

var firstElement = new ListElement(null, 20);
var secondElement = new ListElement(null, 30);
var thirdElement = new ListElement(null, 40);

firstElement.next = secondElement;
secondElement.next = thirdElement;

head = firstElement;

console.log(findMToLast(3));
console.log(findMToLast(2));
console.log(findMToLast(1));
console.log(findMToLast(0));

/*
Output: ($ /usr/bin/node 007.js)
null
{ next: { next: { next: null, data: 40 }, data: 30 }, data: 20 }
{ next: { next: null, data: 40 }, data: 30 }
{ next: null, data: 40 }
*/
