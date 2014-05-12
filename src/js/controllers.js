'use strict';

/* Controllers */

var geotoolsApp = angular.module('geotoolsApp', []);

geotoolsApp.filter('charNumber', function () {

    var DK_ALPHABET = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
        'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
        't': 20, 'u': 21, 'v': 22, 'x': 23, 'y': 24, 'z': 25, 'æ': 26, 'ø': 27, 'å': 28
    };

    var DK_ALPHABETW = {
        'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
        'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19,
        't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26, 'æ': 27, 'ø': 28, 'å': 29
    };

    return function (input, withW) {
        input = input.toLowerCase() || '';
        var out = [];
        for (var i = 0; i < input.length; i++) {
            var number;
            if (withW) {
                number = DK_ALPHABETW[input.charAt(i)];
            } else {
                number = DK_ALPHABET[input.charAt(i)];
            }
            if (number != undefined) {
                out.push(number);
            }
        }
        return out;
    };
});

geotoolsApp.filter('sumOfDigits', function () {
    return function (input) {

        function sum(s) {
            var result = 0;
            for (var i = 0; i < s.length; i++) {
                var number = s.charAt(i);
                if (!isNaN(number)) { //TODO - handle " "
                    result = result + parseInt(number);
                }
            }
            return result;
        }

        function reduce(n) {
            var sum = 0;
            while (n > 0) {
                sum = sum + n % 10;
                n = Math.floor(n/10);
            }
            return sum;
        }

        if (input != null) {
            return reduce(sum(input));
        }
        return null;
    }
});
