module.exports = {

    // remember to be careful with "Fat Arrow"
    // blog.continuation.io/how-to-abuse-the-fat-arrow/

  const helloWorld = (greeting = 'Hello World')  => {

      return greeting;
  };

  return { helloWorld };
};
