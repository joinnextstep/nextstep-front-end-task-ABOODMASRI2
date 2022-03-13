# NextStep Fontend Task Requuirments

## As TODO list app has become the new hello world! 
Your task to create a web that manage a todo list for user, and the user wish to have the following features:

### Listing TODOs
As an end user i should be able to see a list of the todos the i've created and i would more than happy to see the following for each todo item in the list
1. todo's name
2. todo's status (`new`, `in-progress`, `done`)

Also, if i was using *mobile* device it would be nice if you display `1 todo item per row`, if i was using `tablet` show me `2 items per row`, and in case i was using `desktop` screen please show me `6 items per row` 

### To get a list of todos, send an `HTTP GET` request to this endpoint:  `https://api.joinnextstep.com/api/todo`
Sample response: 
```
[
    {
        "id": 1,
        "name": "Setup new angular app",
        "status": 0
    },
    {
        "id": 2,
        "name": "Create routing",
        "status": 0
    }
]
```

### Create new todo
Also, as an end-user i want to be able to create new todo item by inserting the follwoing infomration
1. name: string
2. status: new | in-progress | done

I would be happy to get a success message if the todo item was successfully created as well as getting error message if somehting went worng

#### To create new todo item, Send an `HTTP POST` request to this endpoint: `https://api.joinnextstep.com/api/todo`
Request body:
```
{
    "name": "Create routing",
    "status": 0 // 0 for new | 1 for in-progress | 2 for done
}
```


### Update the details of specific todo item
As an end-user, i want to be able to update the name and/or the status of the todo item

I would be happy to get a success message if the todo item was successfully updated as well as getting error message if somehting went worng
#### To update the todo item, Send an `HTTP PUT` request to this endpoint `https://api.joinnextstep.com/api/todo/{id}`
Request body:
```
{
    "name": "Create routing",
    "status": 0 // 0 for new | 1 for in-progress | 2 for done
}
```


### Change the status of specific todo item
As an end-user, i should have the ability to change the todo's status into `new`, `in-progress`, or `done`

I would be happy to get a success message if the todo item status was successfully updated as well as getting error message if somehting went worng
#### To update the status of the todo item, Send an `HTTP PATCH` request to this endpoint `https://api.joinnextstep.com/api/todo/{id}?stats=0`



### Delete a specific todo item
As an end-user, i should have the ability to remove a todo item

I would be happy to get a success message if the todo item status was successfully deleted as well as getting error message if somehting went worng
#### To delete the todo item, Send an `HTTP DELETE` request to this endpoint `https://api.joinnextstep.com/api/todo/{id}`



## Technical Requirements
1. You should use Angular framework
2. Using css external libraires like bootstrap is *not allowed*
3. You can use libraires like angular materila, but you have to explain why
4. Make sure to work in a sperate branch and the branch name should be `firstname-lastname:email`
5. After you complte the task, create a pull-request from your branch into `main` branch and notify us over info@joinnextstep.com


Hope you enjoy it! And if you have any questions, please don't hesitate to contact us: info@joinnextstep.com.

 
