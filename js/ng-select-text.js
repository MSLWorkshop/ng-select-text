angular.module('acm.ngSelectText', [])
.directive('selectText', function ($window) {
    return {
        link: function (scope, element) {
            element.on('click', function () {
                var selection = $window.getSelection(),
                    range = document.createRange();

                range.selectNodeContents(element[0]);
                selection.removeAllRanges();
                selection.addRange(range);
            });
        }
    };
});
