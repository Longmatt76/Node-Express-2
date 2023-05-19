Answer the following questions below:


- What is a JWT?
 
  JWT stands for "JSON WEB TOKEN". They are tokens generated and used for authentication that can be setup to be used across multiple web applications.  

- What is the signature portion of the JWT?  What does it do?
 
  The signature portion of a JWT is a hashed compilation of the header, payload and secret key. It's used to verify the origin of the token.

- If a JWT is intercepted, can the attacker see what's inside the payload?
 
  Yes, if they knew enough to know that the header and payload are base64 and can be decoded using a base 64 decoder, but any changes to the header or payload would change the signature and our server would know that that token didn't originate from us, or that it was tampered with.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
 
  First you would create an endpoint (or endpoints like registration and login) that would issue a token based on whatever credentials you require. Next you would verify the credentials (typically by comparing username and password to the values stored in your db), then you would sign the token and return it to the user. Finally you would set up authentication middleware in your routes that would check tokens to verify if the user had whatever authorization was required for that route. For example if they were logged in, an admin etc....  

- Compare and contrast unit, integration and end-to-end tests.

  Unit testing is used to test individual components like a single function. Integration tests are used to test how those different components work together and end to end tests are used to simulate the user's experience by evaluating an application's flow from start to finish.  

- What is a mock? What are some things you would mock?

  Mocking is a testing technique that is used to test something complex or beyond your control by creating a "mock" version of it that you can control and testing that instead. For example instead of actually testing how your application interacts with a 3rd party API you could create a mock API response and test against that because ultimately you only control how your application performs and not how a third party API performs. You could also use mocks for anything that involves randomness. For example, in my exchange rate assessment I probably could have used a mock to test the exchange rate of the dollar by making it constant and eliminating the errors that would occur with fluctuations.

- What is continuous integration?

  Continuous integration is the practice of merging small code changes frequently as opposed to making big batch changes. You can integrate CI toolkits with Github that will test a build and if all tests pass the changes can be deployed by the CI toolkit, if any tests fail the build is rejected.  

- What is an environment variable and what are they used for?

  Environmental variables are values that are set (like as in a .env file) that can be accessed by an application to configure a wide range of things such as secret keys, api keys, db configuration, settings for different libraries etc....

- What is TDD? What are some benefits and drawbacks?

  TDD stands for "test driven development" and is the practice of writing tests first (which will fail) and then writing the necessary code to make the tests pass, then you refactor. The benefit is that it makes you think through how the code will work before actually writing any code which in theory can lead to better code. The drawback would be the additional time it takes, especially for developers new to the practice.

- What is the value of using JSONSchema for validation?

   The value of using JSONSchema for validation is that you can catch bad data before it reaches your db, also it can simplify the validation process and reduce the amount of code you need to write.

- What are some ways to decide which code to test?

  Instead of striving for 100% coverage it may be better to focus on testing the things that a user would actually do and give priority to critical components that would ruin the user experience if they failed, then work your way down from there. Also testing for edge cases can be helpful in identifying errors that wouldn't show up during normal "proper" usage.  

- What does `RETURNING` do in SQL? When would you use it?

  The RETURNING clause is used when making INSERT, UPDATE or DELETES that don't inherently return data like a SELECT would. This is useful for error catching, for example on an INSERT you could return a column and if those rows came back empty you would know that there was an issue in writing the data so you could then throw an error.  

- What are some differences between Web Sockets and HTTP?
 
  Web sockets create a connection between the client and server that stays continually connected until it's severed by either side. It's like building a tunnel between the client and server side. HTTP on the other hand has no continuous connection, each interaction between the client and server requires a new request that must be initiated by the client whereas a Web Socket is bidirectional. HTTP is a stateless protocol, it remembers nothing whereas Web Sockets have state. HTTP is a heavy protocol whereas Web Sockets are lightweight and fast. Because of these differences Web Sockets are the preferred choice for any application that demands low latency, real time exchange of data between the server and client whereas HTTP is the preferred choice when you need the traditional request/response cycle.  

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Honestly I don't feel as though I have enough experience with Express yet to make a judgment. I feel as though the Flask units were more thorough with a greater emphasis on building the apps ourselves in the exercises whereas with Express it was more of just a general overview and the exercises were typically nearly finished apps that we just completed one aspect of. I guess that makes sense since all the basic concepts are the same, it's just a different way of doing things so there probably was no need to have us retrace everything from the beginning, but because of that as of now at least I definitely feel more comfortable in Flask. That being said, I'll use React/Express for my 2nd capstone which will give me plenty of time to put everything into practice, after which I can probably pick a favorite.  

