function newAdmin(name, age, country) {
    var name = name || 'Miguel';
    var age = age || 25;
    var country = country || 'VE';
    console.log(name, age, country);
}

newUser();
newUser('Ruben', 31, 'ES');


function newAdmin(name = 'Miguel', age = 25, country = 'VE') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ruben', 31, 'ES');


