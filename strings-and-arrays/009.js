/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method to detect whether two Strings are anagrams or not.
 */


// TOO complicated!!! Use nice function for array and string!


function is_anagram (str1, str2) {
    var str1_arr, str2_arr, len = str1.length, i;
    if (!str1 && !str2) {
        return true;
    } else if (!str || !str2) {
        return false;
    } else {

        if (str1.length !== str2.length) {
            return false;
        }
        console.log(str1, str2);
        str1_arr = str1.split("").sort();
        str2_arr = str2.split("").sort();

        console.log(str1_arr, str2_arr);

        for (i = 0; i < len; i += 1) {
            if (str1_arr[i] !== str2_arr[i]) {
                return false;
            }
        }

        return true;
    }
    


}


// Better

function is_anagram_reg (str1, str2) {
    return prepare_str(str1) === prepare_str(str2);
}   

function prepare_str (str) {
    return str.replace(/ /g, '').toLowerCase().split('').sort().join('');
}


























/*____________________________________________________________________________*/

/**
 * @function {private static} prepare
 *
 * Prepares the `String` for anagram comparison.
 *
 * @param {String} str - the `String` to prepare.
 *
 * @return the prepared `String`.
 */
function prepare(str) {
    return str.replace(/ /g, '').toLowerCase().split('').sort().join('');
}

/**
 * @function {public static} isAnagram
 *
 * Checks whether two given strings are anagrams of each other.
 *
 * @param {String} str1 - the first `String` to test.
 * @param {String} str2 - the second `String` to test.
 *
 * @return `true` if the two `String`s are anagrams, `false` otherwise.
 */
function isAnagram(str1, str2) {
     return prepare(str1) === prepare(str2);
}

/*____________________________________________________________________________*/

console.log( isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort') );

/*
Output: ($ /usr/bin/node 009.js)
true
*/
