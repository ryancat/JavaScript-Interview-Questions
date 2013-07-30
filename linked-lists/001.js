/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Create a singly linked-list structure in JavaScript.
 * Assume that the list contains integer values.
 */


// Bad: not using this, make it hard to inherant
// Bad: since we are making a constructor here
// Follow the convention
function make_list (value, next) {
	return {
		value: value,
		next: next
	};
}


var top_stack = null;

// Correct
var List = function (value, next) {
	this.value = value;
	this.next = next;
}


// Let's do more
List.prototype = {

	make_list: function (n) {
		var result = new List(1), idx = 2;
		
		while (idx <= n) {	
			result.push(new List(idx));
			idx += 1;
		}
		return result;
	},

	// Validate list
	checkList: function () {
		var that = this;
		while(that.next) {
			if (!that.next['checkList']) {
				return false;
			}
			that = that.next;
		}
		return true;
 	},

	// Push function 
	push: function (list) {
		var that = this;

		if (typeof list === 'undefined' || !list['checkList']) {
			return false;
		}

		while (that.next && that.next['checkList']) {
			that = that.next;
		}

		that.next = list;
		return true;
	},

	// Pop function
	pop: function () {
		var that = this, another;

		while (that.next && that.next['checkList']) {
			another = that;
			that = that.next;
		}

		if (another) {
			another.next = undefined;
		}

		// TODO: HOW TO DELETE 'this'??

		return that;
	},

	last: function () {
		var that = this;

		while (that.next) {
			that = that.next;
		}

		return that;
	},


	// push: function (list) {
	// 	var that = this;
	// 	if (list['checkList']) {
	// 		list.last().next = top_stack;
	// 		top_stack = list;
	// 	}
	// }


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

/*____________________________________________________________________________*/

var listItem = new ListElement(null, 10);

console.log(listItem);
console.log(listItem.data);

/*
Output: ($ /usr/bin/node 001.js)
{ next: null, data: 10 }
10
*/
