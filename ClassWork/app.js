/**
 * Created by 1dill on 13.08.2016.
 */

window.onload = function () {
    var name, surname, age, i;
    i = 1;
    function User(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    function new_user() {
        i++;
        return i;
    }
var {user(i)} = get_info();
    new_user();
    console.log(user);


    function get_info() {
        get_name();
        get_surname();
        get_age();
        return new User(name, surname, age);
    }

    function get_name() {
        name = prompt("Write your name");
        str();
        function str() {
            do {
                if (typeof(name) != "string") {
                    alert("wrong name");
                    name = prompt("write another name");
                }
            } while (typeof(name) != "string");
        }

        return name;
    }

    function get_surname() {
        surname = prompt("Write your surname");
        str();
        function str() {
            do {
                if (typeof(surname) != "string") {
                    alert("wrong surname");
                    surname = prompt("write another surname");
                }
            } while (typeof(surname) != "string");
        }

        return surname;
    }

    function get_age() {
        age = +prompt("Write your age");
        num();
        function num() {
            do {
                if (typeof(age) != "number") {
                    alert("wrong age");
                    age = +prompt("write another age");
                }
            } while (typeof(age) != "number");
        }

        return age;
    }
};