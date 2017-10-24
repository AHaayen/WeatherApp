var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Charlotte'
    };

    setTimeout(() => {
        callback(user);        
    }, 3000);
};

getUser(23, (userObject) => {
    console.log(userObject);
});



