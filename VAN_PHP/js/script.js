var map, json, all_pharm, all_hosp, hospit, pharm, some_region;
all_pharm = []; //массив маркеров аптек
all_hosp = []; //массив маркеров больницы
//Инициализация карты
function initMap() {
    var point = {lat: 47.9900864, lng: 29.3946292};

    map = new google.maps.Map(document.getElementById('test-map'), {
        center: point,
        /*scrollwheel: false,*/
        zoom: 6,
        mapTypeId: 'terrain'
    });
}
//получение данных из базы
(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'controller.php', true);
    xhr.send();
    xhr.responseType = "json";
    xhr.onreadystatechange = function () { // (3)
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            json = xhr.response;
        }
    };
})();
window.onload = function () {
    var property = document.getElementById("map_property");
    var all_regions = document.getElementById("regions").getElementsByTagName("input"); //Все области
    var all_regions_value = document.getElementById("regions"); //Значение всех областей*/
    hospit = document.getElementById("hospital"); //Все больницы
    pharm = document.getElementById("pharmacy"); //Все аптеки
    var image;
    //Добавление и уаление областей
    all_regions_value.onclick = function () {
        clearMarkers(all_hosp, null);
         clearMarkers(all_pharm, null);
        /*checking(all_hosp, some_region);
        checking(all_pharm, some_region);*/
        check_region();
    };
    //добавление и удаление Больниц с карты
    hospit.onclick = function () {
        check_region();
    };
    //добавление и удаление Аптек с карты
    pharm.onclick = function () {
        check_region();
    };
    //очистка маркерова
    function clearMarkers(all, map) {
        for (var i = 0; i < all.length; i++) {
            all[i].setMap(map);
        }
    }

    function check_region() {
        some_region = [];
        for (var i = 0; i < all_regions.length; i++) {
            if (all_regions[i].checked) {
                some_region = all_regions[i].value;
                check_hosp(some_region);
                check_pharm(some_region);
            }
        }
    }

    function check_hosp(some_region) {
        if (hospit.checked) {
            image = "images/placeholder_hosp.png";
            eqfeed_callback(json, "Лікарня", all_hosp, image, some_region);
        }
        else {
            clearMarkers(all_hosp, null);
        }
    }

    function check_pharm(some_region) {
        if (pharm.checked) {
            image = "images/placeholder_pharm.png";
            eqfeed_callback(json, "Аптека", all_pharm, image, some_region);
        }
        else {
            clearMarkers(all_pharm, null);
        }
    }

    /*function checking(argument, some_region) {
        var temp = argument;
        for (var i = 0; i < temp.length; i++) {
            if (temp[i].region) {
                argument = temp.filter(function () {
                    return (temp[i].region == some_region);
                });
            }
        }
    }*/
};

//Обработка данных из базы
window.eqfeed_callback = function (json, type, all, image, some_region) {
    for (var i = 0; i < json.length; i++) {
        if (json[i].type == type && json[i].region == some_region) {
            find_marker(all);
        }
    }
    function find_marker(all) {
        var id = json[i].id;
        var cords = json[i].cords;
        cords = cords.split(',');
        var latLng = new google.maps.LatLng(cords[0], cords[1]);
        var title = json[i].name;
        var region = json[i].region;
        var city = json[i].city;
        var address = json[i].address;
        var site = json[i].site;
        var telephone = json[i].telephone;
        var person = json[i].person;
        var marker = new google.maps.Marker({
            position: latLng,
            title: title,
            map: map,
            icon: image,
            region: region,
            id: id
        });
        //Информация об объекте при клике
        var contentString = '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h1 id="firstHeading" class="firstHeading">' + title + '</h1>' +
            '<div id="bodyContent">' +
            '<address>' + region + ' область, м. ' + city + ', ' + address + '</address>' +
            '<p class="site">Сайт: <a href="' + site + '">' +
            site + '</a> </p>' +
            '<p class="telephone">Телефон: <a href="tel:' + telephone + '">' +
            telephone + '</a> </p>' +
            '<p class="person">Керівництво: ' + person + '</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
        all.push(marker);
        /*checking_mark(marker);*/

    }


    /*function checking_mark(marker) {
        var some_mark = all;
        for (var j = 0; j <= some_mark.length; j++) {
            if (some_mark[j].id) {
                all = some_mark.filter(function () {
                    return (some_mark[j].id !== json[i].id);
                });
            }
            else {
                all.push(marker);
            }

        }

    }*/
};