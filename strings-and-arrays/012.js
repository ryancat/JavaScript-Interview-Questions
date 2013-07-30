/*
 * <!--
 *  This program is distributed under
 *  the terms of the MIT license.
 *  Please see the LICENSE file for details.
 * -->
 */

/*
 * Write a method to rotate an image 90 degrees. The image isrepresented by an
 * n by n matrix, where each cell represents a pixel.
 */


function rotate_image (img, direction) {
    var row = img.length, col = img[0].length, temp, l, cur;

    for (l = 0; l < Math.floor(row / 2); l += 1) {
        for (cur = l; cur < row - l - 1; cur += 1) {
            temp = img[cur][l];
            img[cur][l] = img[row - l - 1][cur];
            img[row - l - 1][cur] = img[col - 1 - cur][row - l - 1];
            img[col - 1 - cur][row - l - 1] = img[l][col - 1 - cur];
            img[l][col - 1 - cur] = temp;
        }
    }

    return img;
}





























/*____________________________________________________________________________*/

/**
 * @function {public static} rotate
 *
 * Rotates an n by n matrix of integers 90 degrees.
 *
 * @param {Array} matrix - the matrix to rotate.
 */
function rotate(matrix) {
    var layer = 0;
    var first = 0;
    var last = 0;
    var i = 0;
    var offset = 0;
    var top = 0;
    var n = matrix.length;

    for (layer = 0; layer < n / 2; layer++) {
        first = layer;
        last = n - 1 - layer;

        for (i = first; i < last; i++) {
            offset = i - first;

            top                              = matrix[first      ][i          ];
            matrix[first      ][i          ] = matrix[last-offset][first      ];
            matrix[last-offset][first      ] = matrix[last       ][last-offset];
            matrix[last       ][last-offset] = matrix[i          ][last       ];
            matrix[i          ][last       ] = top                             ;
        }
    }
}

/*____________________________________________________________________________*/

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log( matrix );
rotate(matrix, 3);
console.log( matrix );

/*
Output: ($ /usr/bin/node 012.js)
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
*/
