/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Implement a routine that prints all possible combinations of a string,
 * starting from 1 character length to the length of the string.
 */



function print_combination (str, result) {
    var len; 
    if (!str) {
        return []; 
    }
    console.log(str);
    len = str.length;
    if (len > 1) {
        return add_front(str[0], print_combination(str.slice(1), result));

    } else {
        if (len === 1) {
            return [str[0]];
        } else {
            return [];
        }
    }
}


function add_front(str, result) {
    var len = result.length, i;
    result.push(str);
    for (i = 0; i < len; i += 1) {
        result.push(str + result[i]);
    }


    return result;
}



























/*____________________________________________________________________________*/

/**
 * @function {public static} combine
 *
 * Prints all possible combinations of a given `String`.
 *
 * @param {String} str - the `String` to combine.
 */
function combine(str) {
    var length = str.length;
    var input = str.split('');
    var output = [];

    doCombine(input, output, length, 0, 0);
}

/**
 * @function {public static} doCombine
 *
 * Recursively combines the given input.
 *
 * @param {Array} input - the input `String`
 * @param {Array} output - the output buffer.
 * @param {Integer} length - the length of the `String`.
 * @param {Integer} level - recursion depth
 * @param {Integer} start - starting index
 */
function doCombine(input, output, length, level, start) {
    var i = 0;

    for (var i = start; i < length; i++) {
        output.push(input[i]);

        console.log(output.join(''));

        if (i < length - 1) {
            doCombine(input, output, length, level+1, i+1);
        }

        output.length = output.length - 1;
    }
}

/*____________________________________________________________________________*/

combine('SF_CA');

/*
Output: ($ /usr/bin/node 008.js)
S
SF
SF_
SF_C
SF_CA
SF_A
SFC
SFCA
SFA
S_
S_C
S_CA
S_A
SC
SCA
SA
F
F_
F_C
F_CA
F_A
FC
FCA
FA
_
_C
_CA
_A
C
CA
A
*/
