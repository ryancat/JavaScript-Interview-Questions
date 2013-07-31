/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Using the node structure in 002.js
 * Create the following binary serch tree:
 *
 *          15
 *          /\
 *        13  20
 *        /\   /\
 *      11 15 18 22
 */


var n3 = new BinaryT (11),
    n4 = new BinaryT (15), 
    n5 = new BinaryT (18),
    n6 = new BinaryT (22),
    n1 = new BinaryT (13, n3, n4),
    n2 = new BinaryT (20, n5, n6),
    n0 = new BinaryT (15, n1, n2);
























/*____________________________________________________________________________*/

/**
 * @class {public} Node
 *
 * A typical binary tree node.
 *
 * @param {Node} left - the left node.
 * @param {Node} right - the right node.
 * @param {Integer} value - the value of this node.
 */
function Node(left, right, value) {
    this.left = left;
    this.right = right;
    this.value = value;
}

/*
 * Sample structure.
 */
var root = new Node(
    new Node(
        new Node(null, null, 11),
        new Node(null, null, 15),
        13
    ),
    new Node(
        new Node(null, null, 18),
        new Node(null, null, 22),
        20
    ),
    15
);

/*____________________________________________________________________________*/

console.log(root);

/*
Output: ($ /usr/bin/node 003.js)
{ left:
   { left: { left: null, right: null, value: 11 },
     right: { left: null, right: null, value: 15 },
     value: 13 },
  right:
   { left: { left: null, right: null, value: 18 },
     right: { left: null, right: null, value: 22 },
     value: 20 },
  value: 15 }
*/
