const Users = sequelize.define('users', {
    firstname: { type: Sequelize.STRING },
    lastname: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING }
})

Users.sync()
/*
Users.create({
    firstname: 'Pablo',
    lastname: 'George',
    username: 'pablogeokar',
    email: 'pablogeokar@hotmail.com'
})
*/

Users.findAll().then((users) => {
    users.forEach(user => {
        console.log('===================================');
        console.log('fistname: ' + user.firstname);
        console.log('fistname: ' + user.lastname);
        console.log('fistname: ' + user.username);
        console.log('fistname: ' + user.email);
        console.log('===================================');
    });
}).catch((err) => {

});