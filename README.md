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

### API 2
#### GET /sites/list/:username

[GET] /app/sites/list

Request Data: None
Response Data: [List of stored website username & passwords]

<p float="left">
  <img src="https://raw.githubusercontent.com/vieee/develop/master/a.png" width="47%" />
  <img src="https://raw.githubusercontent.com/vieee/develop/master/b.png" width="47%" /> 
</p>
