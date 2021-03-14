# API Documentation

## Auth

|Route   | Method   | Body  | Purpose|
|---|---|---|---|
|/api/users/signup   | POST   | {email: string, password: string}  |  Sign up for an account |  
|/api/users/signin   | POST   | {email: string, password: string}  |  Sign in to existing account |  
|/api/users/signout   | POST   | {}  |  Sign out |  
|/api/users/currentuser   | GET   | -  |  Return info about the user |  