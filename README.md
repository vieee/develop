# Develop

A web application that keeps a record of users' passwords. Users can log into the panel to see the username and passwords of websites they
have saved.


### API 1
#### POST /sites
[POST] /app/sites
Request Data: {
'website': str,
'username': str,
'password': str
}
Response Data: {
'status': 'The website has been successfully inserted.'
}

#### GET /sites/list/:username
[GET] /app/sites/list
Request Data: None
Response Data: [List of stored website username & passwords]
