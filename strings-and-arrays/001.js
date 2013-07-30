/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

 /*
  * Write an efficient function to find the first non-repeated character
  * in a String.
  */

var str = "r6ddurviuhbydtijkbhjkfdsgfisda;khrpiogyhroeignkjreghiusdhfksdbfuk";

function findFirstSingleChar (str) {
    var cache = [], i = 0, cur;

    while (str.slice(i, i+1)) {
        cur = str.slice(i, i+1);
        if (cache.indexOf(cur) === -1) {
            cache.push(cur);
        } else {
            cache.splice(cache.indexOf(cur), 1);
        }

        i += 1;
    }
    return cache[0];
}

























/*____________________________________________________________________________*/

/**
 * @function {public static} findFirstNonRepeatedChar
 *
 * Finds the first non-repeated character of a given `String`.
 *
 * @param {String} str - the `String` to seek.
 *
 * @return the first non-repeated character if found, `null` otherwise.
 */
function findFirstNonRepeatedChar(str) {
    var charHash = {};
    var i = 0;
    var c = '';
    var o = null;
    var len = str.length;

    var kSeenOnce = 1;
    var kSeenTwice = 2;

    for (i = 0; i < len; i++) {
        c = str[i];
        o = charHash[c];

        if (o === undefined) {
            charHash[c] = kSeenOnce;
        } else if (o === kSeenOnce) {
            charHash[c] = kSeenTwice;
        }
    }

    for (i = 0; i < len; i++) {
        c = str[i];

        if (charHash[c] === kSeenOnce) {
            return c;
        }
    }

    return null;
}

/*____________________________________________________________________________*/

console.log( findFirstNonRepeatedChar('lorem ipsum dolar pit ahmets') );

/*
Output: ($ /usr/bin/node 001.js)
u
*/
