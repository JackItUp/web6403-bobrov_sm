// Данные учебной формы авторизации.
class User {
    constructor(login, email, password, agreement) {
        this.login = login;
        this.email = email;
        this.password = password;
        this.agreement = agreement;
    }

    printInfo() {
        console.log(
            'Данные пользователя:\n' +
            'Логин: ' + this.login + '\n' +
            'Email: ' + this.email + '\n' +
            'Пароль: ' + '*'.repeat(this.password.length) + '\n' +
            'Согласие: ' + (this.agreement ? 'Да' : 'Нет')
        );
    }
}

const form = document.querySelector('#login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Учебный сайт: не отправляем пароль на сервер.

    const user = new User(
        form.elements.login.value,
        form.elements.email.value,
        form.elements.password.value,
        form.elements.agreement.checked
    );

    user.printInfo();
    document.querySelector('#form-status').textContent =
        'Данные выведены в консоль (F12).';
});
