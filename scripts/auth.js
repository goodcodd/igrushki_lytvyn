document.addEventListener('DOMContentLoaded', function () {
    // Авторизація
    const login = document.querySelector('#loginEmail');
    const password = document.querySelector('#loginPassword');
    const submit = document.querySelector('#submit');

    const users = {};

    function createID(users) {
        return 'User' + Object.keys(users).length;
    }

    submit.addEventListener('click', () => {
        const loginUser = login.value;
        const passwordUser = password.value;

        const user = new User(loginUser, passwordUser);
        const userID = createID(users);

        users[userID] = user;

        console.log(users);
    });

    // Реєстрація
    const name = document.querySelector('#firstName');
    const lastname = document.querySelector('#lastName');
    const email = document.querySelector('#email');
    const password2 = document.querySelector('#password');
    const department = document.querySelector('#department');
    const city = document.querySelector('#city');
    const phone = document.querySelector('#phone');

    const register = document.querySelector('#register');

    const usersReg = {};

    function UserReg(name) {
        this.name = name;
    }

    function createRegID(usersReg) {
        return 'UserReg' + Object.keys(usersReg).length;
    }

    register.addEventListener('click', () => {
        const nameUser = name.value;
        const lastnameUser = lastname.value;
        const emailUser = email.value;
        const passwordReg = password2.value;
        const departmentUser = department.value;
        const cityUser = city.value;
        const phoneUser = phone.value;

        const reguser = new UserReg(nameUser, lastnameUser, emailUser, passwordReg, departmentUser, cityUser, phoneUser);
        const reguserID = createRegID(usersReg);

        usersReg[reguserID] = reguser;

        console.log(usersReg);

        alert(`${nameUser}, ласкаво просимо!`);
    });
});
