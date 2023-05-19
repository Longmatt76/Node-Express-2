
1. There was no validation when registering or logging in a user. I added jsonSchema validation and wrote some tests to verify it was working. 

2. The user login route wasn't awaiting User.authenticate which means the token was being created irregardless of wheather or not the user was authenticated. I added tests that would fail in that circumstance.  

3. The error handling was very basic

4. placeholder 

5. placeholder 

6. The authUser middleware function was only decoding the token instead of verifying it which     returns the decoded payload without verifying if the signature is valid. I changed it to jwt.verify. 