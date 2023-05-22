
1. There was no validation when registering or logging in a user. I added jsonSchema validation and wrote some tests to verify it was working. 

2. The user login route wasn't awaiting User.authenticate which means the token was being created irregardless of wheather or not the user was authenticated. I added tests that would fail in that circumstance.  

3. The doc string for get users/ says it should only return "basic info" {username, first_name, last_name} but the method was setup to also return email and phone so I changed it to only return "basic info". Not sure if this is really a "bug" but the instructions said to treat the docstrings as gospel. There were also a few unneeded uses of let over const in the users routes that I changed.  

4. The patch users/ route was missing validation so I added it. Also as implemented it would have only allowed an admin to have auth when it was supposed to allow both the verified user and admins. This is because it was lacking the proper middleware function, it was checking seperately for the logged in user and also for admins but that would simply fail any regular user because they can't pass the admin check. It requires a different approach that can check in a single middleware function if the user is said user OR an admin so I wrote that function and changed it, also I modified some testing to verify. 

5.  The authUser middleware function was only decoding the token instead of verifying it, which just returns the decoded payload without verifying if the signature is valid. I changed it to jwt.verify.   

6. There may be some errors in the SQLforPartialUpdate function but I'm really not sure. For one it's using let over const plus there's no error handling and I'm not even postive that it's handling the SQL injection properly but again I'm not sure because I don't entirely understand the function. It's nothing we've ever been taught, it seems to me like it's just some arbitrarily complicated workaround to avoid using a SQL query builder or ORM, but I could be wrong....  