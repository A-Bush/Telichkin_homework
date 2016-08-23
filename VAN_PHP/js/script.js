var map, json, all_markers, property, input_region, input_medical;
all_markers = []; //Массив всех маркеров на карте (по умолчанию невидимые)

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

//Обработка данных из базы
window.eqfeed_callback = function (json) {
    for (var i = 0; i < json.length; i++) {
        find_all_marker();
    }
    function find_all_marker() {
        var id = json[i].id;
        var type = json[i].type;
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
            /* icon: image,*/
            region: region,
            type: type,
            id: id,
            visible: false
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
        all_markers.push(marker);
    }
};


window.onload = function () {
    property = document.getElementById("map_property");
    input_region = document.getElementById("regions").getElementsByTagName("input");
    input_medical = document.getElementById("medical").getElementsByTagName("input");
    eqfeed_callback(json); //Запуск поиска меток

    property.addEventListener('click', function () {
        checking();
        checkRegion();
        unmarkers();
        
    });
    function checking() {
        for(var b = 0; b < all_markers.length; b++) {
            all_markers[b].check = 'no';
        }
    }
    function checkRegion() {
        for (var a = 0; a < input_region.length; ) {
            if (input_region[a].checked) {
                var some_region = input_region[a].value;
                checkType(some_region);
                a++;
            }
            else {
                a++;
            }
        }
    }
    function checkType(some_region) {
        for (var i = 0; i < input_medical.length; ) {
            if (input_medical[i].checked) {
               var some_type = input_medical[i].value;
                findMarker(some_region, some_type);
                i++;
            }
            else {
                i++;
            }
        }
    }
    function findMarker (some_region, some_type) {
        for (var j = 0; j < all_markers.length; ) {
            if (all_markers[j].type == some_type && all_markers[j].region == some_region) {
                all_markers[j].setVisible(true);
                all_markers[j].check = 'yes';
                j++;
            }
            else {
                j++;
            }
        }
    }
    function unmarkers() {
        for (var c = 0; c < all_markers.length;) {
            if (all_markers[c].check == 'no') {
                all_markers[c].setVisible(false);
                c++;
            }
            else {
                c++;
            }
        }
    }


};


/*window.onload = function () {

 var all_regions = document.getElementById("regions").getElementsByTagName("input"); //Все области
 var all_regions_value = document.getElementById("regions"); //Значение всех областей*!/
 hospit = document.getElementById("hospital"); //Все больницы
 pharm = document.getElementById("pharmacy"); //Все аптеки
 var image;
 //Добавление и уаление областей
 all_regions_value.onclick = function () {
 clearMarkers(all_hosp, null);
 clearMarkers(all_pharm, null);
 /!*checking(all_hosp, some_region);
 checking(all_pharm, some_region);*!/
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


 };*/
