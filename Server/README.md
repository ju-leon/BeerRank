# API Specification

## Commands

Header:

```
authorization: Basic <Encoded username:pw>
```

Encode `username:password` using Base64.



User:

```json
GET: /user
	Body: 
		{"username":"yourusername"}

POST: /user/add
	Body:
		{
      "username": "",
      "firstName": "",
      "lastName": "",
      "email": "",
      "password": "",
		}

GET: /user/login
	
```

Game:

```json
GET: /game
	Body:
		{"_id":""}

POST: /game
	Creates new empty lobby	
	Body: 
		{}

PUT: /game
	Body:
    {
      "_id": "5cd6e786990e9328ce70edf3",
      "state": "playing"
    }

PUT: /game/setResult
	Body:
    {
      "_id": "5cd6e786990e9328ce70edf3",
      "result": 0
    }

GET: /game/join?gameID=...
	Body:
    {
    }

GET: /game/changeTeam
	Body:
    {
			"_id": "5cd6e786990e9328ce70edf3"
    }
```





