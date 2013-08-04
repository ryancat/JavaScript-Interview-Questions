function merge_s (arr1, arr2) {
    var result = [], cur, i = 0, j = 0, len1, len2;
    if (arr1 === null) {
        return arr2;
    }

    if (arr2 === null) {
        return arr1;
    }

    len1 = arr1.length;
    len2 = arr2.length;

    if (len1 === 0) {
        return arr2;
    }

    if (len2 === 0) {
        return arr1;
    }

    while (true) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i += 1;
        } else {
            result.push(arr2[j]);
            j += 1;
        }

        if (i >= len1) {
            result = result.concat(arr2.slice(j));
            break;
        }

        if (j >= len2) {
            result = result.concat(arr1.slice(i));
            break;
        }
    }

    return result;
}

function merge_sort (arr) {
    var len, mid, arr1, arr2;
    if (arr === null) {
        return null;
    }
    len = arr.length;
    if (len === 0) {
        return [];
    }
    if (len === 1) {
        return arr;
    }
    mid = Math.floor(len / 2);
    arr1 = arr.slice(0, mid);
    arr2 = arr.slice(mid);

    return merge_s(merge_sort(arr1), merge_sort(arr2));
}

function test_time (func, arg) {
    var before, after;
    before = Date.now();
    func.apply(null, arg);
    after = Date.now();

    return after - before;
}

function bubble_sort (arr) {
    var len, i, temp, is_sort = false;

    if (arr === null) {
        return null;
    }

    len = arr.length;

    while (!is_sort) {
        is_sort = true;
        for (i = 0; i < len - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                is_sort = false;
            }
        }
    }

    return arr;
    
}



function insert_sort (arr) {
    var len, temp, i, j;

    if (arr === null) {
        return null;
    } 

    len = arr.length;

    for (i = 0; i < len; i += 1) {
        temp = arr[i];
        
        for (j = 0; j < i; j += 1) {
            if (arr[j] <= temp && arr[j + 1] >= temp) {
                arr = shift_ele(arr, i, j + 1);
                break;
            } else if (j === 0 && arr[j] >= temp) {
                arr = shift_ele(arr, i, 0);
                break;
            }
        }
    }

    return arr;
}

function shift_ele (arr, from, to) {
    var arr1, arr2, arr3, to_right = false;

    if (from <= to) {
        to_right = true;
    }

    if (to_right) {
        arr1 = arr.slice(0, from);
        arr2 = arr.slice(from + 1, to + 1);
        arr3 = arr.slice(to + 1);
        return arr1.concat(arr2).concat(arr.slice(from, from + 1)).concat(arr3);
    } else {
        arr1 = arr.slice(0, to);
        arr2 = arr.slice(to, from);
        arr3 = arr.slice(from + 1);
        return arr1.concat(arr.slice(from, from + 1)).concat(arr2).concat(arr3);
    }

}




























