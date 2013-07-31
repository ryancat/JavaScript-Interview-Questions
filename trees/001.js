/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * A Tree is a data structure that consists of zero or more child Nodes, where
 * each child Node can also have zero or more child Nodes.
 *
 * Implement an _"immutable"_ tree Node in JavaScript.
 * That is to say, once constructed, it should be impossible to alter
 * the Node's value, or add/remove a child node to it.
 *
 * Assume that a Node can have zero or more child Nodes and each
 * Node will be only storing primitive integer values.
 *
 * Provide getter functions for your Node implementation that return:
 *
 *      - A reference to the Node's child Node at a given index.
 *      - The Node's child count.
 *      - The Node's current value.
 *
 * Example:
 *
 *      var leaf1 = new Node(null, 1);
 *      var leaf2 = new Node(null, 2);
 *      var root = new Node([leaf1, leaf2], 3);
 *
 * should give the following data structure
 *
 *           (root){3}
 *           /       \
 *          /         \
 *      (leaf1){1}  (leaf2){2}
 *
 * where `root.getChild(1).getValue()` should give you `2`.
 *
 * Hint: You can use the `Module Pattern`.
 */


// var Node_my = (function () {

//     return function (leaf_arr, val) {
//         this.getChild = function (idx) {
//             return leaf_arr[idx];
//         };

//         this.getValue = function () {
//             return val;
//         };
//     }
// })();


var Node_my_1 = function (leaf_arr, val) {

    var childCount = 0, i = 0, tot_child_num;
    if (leaf_arr) {
        childCount = leaf_arr.length;
    }
    tot_child_num = childCount;

    this.getChild = function (idx) {
        return leaf_arr[idx];
    };

    this.getValue = function () {
        return val;
    };

    this.getChildCount = function () {

        while (i < childCount) {
            tot_child_num += this.getChild(i).getChildCount();
            i += 1;
        }

        return tot_child_num;
    };
};


var $Tree_my = (function (my, undefined) {

    var nodes = {}, root = null, node_count = 0, this_node = null, priv_key = "love";

    var hash = function (pub_key) {
        var use_key = priv_key + pub_key, i, len, key = 0;
        len = use_key.length;
        for (i = 0; i < len; i += 1) {
            key += use_key.charCodeAt(i)
        }
        return key;
    };

    my.fn = {
        getRoot: function () {
            return root;
        },

        getChildrenCount: function () {
            return node_count;
        }
    };

    my.Node = function (child_arr, value) {
        var cur_node = {
            value: value,
            children: child_arr || []
        }, i, len = 0;

        if (child_arr) {
            len = child_arr.length;
        }
        this.id = hash(Math.pow(len + value, value).toString());
        while (nodes[this.id]) {
            this.id = this.id + '1';
        }
        nodes[this.id] = cur_node;

        if (node_count === 0) {
            root = this.id;
        }

        for (i = 0; i < len; i += 1) {
            if (root === child_arr[i].id) {
                root = this.id;
            }
        }     

        node_count += 1;

        console.log(nodes);
        
    };

    my.Node.prototype = {
        getChild: function (idx) {
            if (nodes[this.id]) {
                return nodes[this.id].children[idx];
            }
            
            return null;
            
        },

        getValue: function () {
            if (nodes[this.id]) {
                return nodes[this.id].value;
            }

            return null;
        }, 

        getChildCount: function () {
            var tot_children = 0, j;
            if (nodes[this.id]) {
                for (j = 0; j < nodes[this.id].children.length; j += 1) {
                    tot_children += nodes[this.id].children[j].getChildCount();
                }

                return tot_children + nodes[this.id].children.length;
            }
        }
    };


    return my;

})($Tree_my || {});





















/*____________________________________________________________________________*/

(function(context) {
    /*
     * The node collection.
     * Note that it's impossible to reach it outside this module.
     * And we will provide a very restricted access to it through
     * the `context.Node` "facade" below.
     */
    var nodes = {};

    var counter = 0;

    var kNodeKey = 'n';
    var kEmpty = '';

    /**
     * @class {public} Node
     *
     * Creates a simple node.
     *
     * @param {Node[]} children - an array of child nodes.
     * @param {Integer} value - the value of the node.
     */
    context.Node = function(children, value) {
        this.id = [Math.random(), kNodeKey, counter++].join(kEmpty);

        nodes[this.id] = {
            children : (children || []),
            value : value
        };
    }

    /**
     * @function {public} Node.getChildCount
     *
     * Gets the child count of the node.
     *
     * @return the child count.
     */
    context.Node.prototype.getChildCount = function() {
        return nodes[this.id].children.length;
    };

    /**
     * @function {public} Node.getChild
     *
     * Gets the child of the node at a given index.
     *
     * @param {Integer} index - the index to get.
     *
     * @return the child node at the given index.
     */
    context.Node.prototype.getChild = function(index) {
        return nodes[this.id].children[index];
    };

    /**
     * @function {public} Node.getValue
     *
     * Gets the value of the node.
     *
     * @return the `Integer` value of the node.
     */
    context.Node.prototype.getValue = function() {
        return nodes[this.id].value;
    }
}(this));

/*____________________________________________________________________________*/

var leaf1 = new this.Node(null, 1);
var leaf2 = new this.Node(null, 2);
var root = new this.Node([leaf1, leaf2], 3);

console.log(root);
console.log(root.getChildCount());
console.log(root.getValue());
console.log(root.getChild(0));
console.log(root.getChild(0).getChildCount());
console.log(root.getChild(0).getValue());
console.log(root.getChild(1));
console.log(root.getChild(1).getChildCount());
console.log(root.getChild(1).getValue());

/*
Output: ($ /usr/bin/node 001.js)
{ id: '0.35295142116956413n2' }
2
3
{ id: '0.6293376912362874n0' }
0
1
{ id: '0.0803379702847451n1' }
0
2
*/
