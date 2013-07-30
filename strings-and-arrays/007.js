/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Design an algorithm to remove duplicate characters in an Array of characters
 * without using any additional buffer.
 */


function remove_duplicate_str (arr) {
    var len = arr.length, i, j, cur;

    for (i = 0; i < len; i += 1) {
        cur = arr[i];
        for (j = i + 1; j < len; j += 1) {
            if (cur === arr[j]) {
                console.log(cur);
                arr = arr.slice(0, j).concat(arr.slice(j + 1));
                len -= 1;
                j -= 1;
            }
        }
    }

    return arr;
}



// in-place remove duplicate

function remove_dupli_inplace (str_arr) {
    var len = str_arr.length, tail = 1, i, j, cur;

    for (i = 1; i < len; i += 1) {
        cur = str_arr[i];
        for (j = 0; j < tail; j += 1) {
            if (str_arr[j] === cur) {
                break;
            }
        }

        if (j === tail) {
            str_arr[tail] = str_arr[i];
            tail += 1;
        }
    }

    str_arr.length = tail;

    return str_arr;
}





















/*____________________________________________________________________________*/


/**
 * @function {public static} removeDuplicates
 *
 * Removes duplicates from a `String` `Array`.
 *
 * @param {Array} ar - an `Array` of characters.
 *
 * @return the de-duped `Array`.
 */
function removeDuplicates(ar) {
    if (!ar) {
        return;
    }

    var len = ar.length;

    if (len < 2) {
        return;
    }

    var tail = 1;
    var i = 0;
    var j = 0;

    for (i = 1; i < len; i++) {
        for (j = 0; j < tail; j++) {
            if (ar[i] === ar[j]) {
                break;
            }
        }

        if (j === tail) {
            ar[tail] = ar[i];
            tail++;
        }
    }
    console.log(ar);
    ar.length = tail;

    return ar;
}

/*____________________________________________________________________________*/

console.log( removeDuplicates( 'abcdefghij'.split('')          ) );
console.log( removeDuplicates( 'aaaaaaaaaaaaaa'.split('')      ) );
console.log( removeDuplicates( ''.split('')                    ) );
console.log( removeDuplicates( null                            ) );
console.log( removeDuplicates( 'aaabbbcccddeeffgg'.split('')   ) );
console.log( removeDuplicates( 'ababcdefdecdefababac'.split('')) );

/*
Output: ($ /usr/bin/node 007.js)
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ]
[ 'a' ]
undefined
undefined
[ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
[ 'a', 'b', 'c', 'd', 'e', 'f' ]
*/
