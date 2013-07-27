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


// Correct
var List = function (value, next) {
	this.value = value;
	this.next = next;
}


// Let's do more
List.prototype = {

	// Validate list
	checkList: function (list) {

		if (list) {
			return list.hasOwnProperty('value') && 
				list.hasOwnProperty('next') && this.checkList(this.next);
		}

		return true;
	},

	// Push function 
	push: function (list) {

		while (list) {
			if (list.next) {
				this = this.next;
				break;
			}

			if (this.checkList(list)) {
				this.next = list;
			}
		}
		
	},

	// Pop function
	pop: function () {
		var result;

		while (this) {
			if (this.next) {
				if (this.next.next) {
					this = this.next;
					break;
				} else {
					result = this.next;
					this.next = undefined;

					return result;
				}
			}
			result = this;
			this = undefined;
			return result;
		}

		return undefined;
	}


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
