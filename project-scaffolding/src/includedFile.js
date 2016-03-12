(function () {

    // remember to be careful with "Fat Arrow"
    // blog.continuation.io/how-to-abuse-the-fat-arrow/

    var helloWorld = function (greeting = 'Hello World') {

        return greeting;
    };

    const findElements = (selector = 'p') => {

        return document.querySelectorAll(selector);
    };


    module.exports = {
        helloWorld,
        findElements
    };


})();

