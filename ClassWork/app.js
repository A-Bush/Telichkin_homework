/**
 * Created by 1dill on 13.08.2016.
 */

window.onload = function () {
    var name, surname, age, mass, user;
    mass = [];

    function User(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    var add = document.getElementById("add");
    add.onclick = function() {

        var name = get_name();
        var surname = get_surname();
        var age = get_age();
        user = new User(name, surname, age);
        return mass.push(user);
    };



    function get_name() {
        name = document.getElementById("InputName").value;
        str();
        function str() {
            do {
                if (typeof(name) != "string") {
                    alert("wrong name");
                    name = document.getElementById("InputName").value;
                }
            } while (typeof(name) != "string");
        }

        return name;
    }

    function get_surname() {
        surname = document.getElementById("InputSurname").value;
        str();
        function str() {
            do {
                if (typeof(surname) != "string") {
                    alert("wrong surname");
                    surname = document.getElementById("InputSurname").value;
                }
            } while (typeof(surname) != "string");
        }

        return surname;
    }

    function get_age() {
        age = document.getElementById("InputAge").value;
        age = parseInt(age);
        num();
        function num() {
            do {
                if (typeof(age) != "number") {
                    alert("wrong age");
                    age = document.getElementById("InputAge").value;
                    age = parseInt(age);
                }
            } while (typeof(age) != "number");
        }

        return age;
    }
    console.log(mass);
};
