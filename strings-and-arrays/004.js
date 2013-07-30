/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write two conversion routines that convert a String to a Number,
 * and a Number back to a String, without using type coercion or eval.
 */


function str_to_num (str) {
    //return str - '0';
    var is_neg = false, zero = '0'.charCodeAt(0), len = str.length, i, num = 0;

    if (str[0] === "-") {
        is_neg = true;
        str = str.slice(1);
        len -= 1;
    }

    for (i = 0; i < len; i += 1) {
        num *= 10;
        num += (str[i].charCodeAt(0) - zero);
    }
    return is_neg ? num * (-1) : num;
}

function num_to_str (num) {
    var result = [], cur; 

    while (num > 10) {
        cur = num % 10;
        result.unshift(cur);

        num = Math.floor(num / 10);
    }

    result.unshift(num);

    console.log(result);

    return result.join('');
}























/*____________________________________________________________________________*/

/**
 * @function {public static} strToInt
 *
 * Converts a given `String` to an `Integer`.
 *
 * @param {String} str - the `String` to convert.
 *
 * @return the converted `Integer`.
 */
function strToInt(str) {
    var i = 0;
    var num = 0;
    var len = str.length;
    var isNegative = false;
    var zero = '0'.charCodeAt(0);

    if (str[0] === '-') {
        isNegative = true;
        i = 1;
    }

    while (i < len) {
        num *= 10;
        num += str.charCodeAt(i++) - zero;
    }

    if (isNegative) {
        num *= -1;
    }

    return num;
}

/**
 * @function {public static} intToStr
 *
 * Converts a given `Integer` to a `String`.
 *
 * @param {String} str - the `Integer` to convert.
 *
 * @return the converted `String`.
 */
function intToStr(num) {
    var i = 0;
    var isNegative = false;
    var temp = [];
    var zero = '0'.charCodeAt(0);

    if (num < 0) {
        num *= -1;
        isNegative = true;
    }

    while (num !== 0) {
        temp.push(String.fromCharCode(zero + (num % 10)));
        num = Math.floor(num/10);
    }

    temp = temp.reverse();

    temp.splice(0, 0, isNegative ? '-' : '');

    return temp.join('');
}

/*____________________________________________________________________________*/

console.log(strToInt('1234'));
console.log(strToInt('-1234'));
console.log(intToStr(1234));
console.log(intToStr(-1234));

/*
Output: ($ /usr/bin/node 004.js)
1234
-1234
1234
-1234
*/
