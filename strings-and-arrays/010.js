/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method to detect whether two Strings are anagrams or not.
 * *DO NOT* sort strings.
 */

function prepare_str_nosort (str) {
    return str.replace(/ /g, '').toLowerCase().split('');
}

function is_ana_nosort (str1, str2) {
    var str1_arr = prepare_str_nosort(str1), 
        str2_arr = prepare_str_nosort(str2),
        i, len1 = str1_arr.length, len2 = str2_arr.length, cur;


    if (len1 !== len2) {
        return false;
    }

    for (i = 0; i < len1; i += 1) {
        cur = str2_arr.indexOf(str1_arr[i]);
        if (cur === -1) {
            return false;
        }

        str2_arr[cur] = undefined;
    }

    return true;
}





























/*____________________________________________________________________________*/

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
    var ar1 = str1.replace(/ /g, '').toLowerCase().split('');
    var ar2 = str2.replace(/ /g, '').toLowerCase().split('');

    if (ar1.length !== ar2.length) {
        return;
    }

    var letters = {};
    var uniqueCharCount = 0;
    var completedCount = 0;

    var i = 0;
    var len = 0;
    var c = '';

    for (i = 0, len = ar1.length; i < len; i++) {
        c = ar1[i];

        if (!letters[c]) {
            uniqueCharCount++;
            letters[c] = 1;
        } else {
            letters[c]++;
        }
    }

    for (i = 0, len = ar2.length; i < len; i++) {
        c = ar2[i];

        if (!letters[c]) {
            return false;
        }

        letters[c]--;

        if (letters[c] === 0) {
            completedCount++;

            if(completedCount == uniqueCharCount) {
                return i === len - 1;
            }
        }
    }

    return false;
}

/*____________________________________________________________________________*/

console.log( isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort') );

/*
Output: ($ /usr/bin/node 010.js)
true
*/
