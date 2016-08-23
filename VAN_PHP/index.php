<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <title>test_google_map</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/jquery-3.1.0.min.js"></script>
    <script src="js/script.js"></script>
    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
    <!--[if lt IE 9]>
    <script>
        document.createElement('header');
        document.createElement('nav');
        document.createElement('section');
        document.createElement('article');
        document.createElement('aside');
        document.createElement('footer');
    </script>
    <![endif]-->

    <script async defer
            src="https://maps.googleapis.com/maps/api/js?language=uk-UA&callback=initMap&signed_in=true&key=AIzaSyARouqvaQxJURS_KghOESmcb2r8CAyWFa4&region=UA&callback=initMap">
    </script>
</head>
<body>
<section>
    <div id="test-map">

    </div>
    <div id="map_property">
        <div id="medical">
            <form>
                <input type="checkbox" value="Лікарня" id="hospital" name="hospital">
                <label for="hospital">Лікарні</label>
                <input type="checkbox"  value="Аптека" id="pharmacy" name="pharmacy">
                <label for="pharmacy">Аптеки</label>

            </form>
        </div>
        <div id="regions">
            <form>
                <input type="checkbox" id="crimea" value="АР Крим" name="region">
                <label for="crimea">АР Крим</label>
                <input type="checkbox" id="kyiv" value="Київ" name="region">
                <label for="kyiv">Київ</label>
                <input type="checkbox" id="kharkiv" value="Харківська" name="region">
                <label for="kharkiv">Харківська</label>
                <input type="checkbox" id="dnepr" value="Дніпропетровська" name="region">
                <label for="dnepr">Дніпропетровська</label>
                <input type="checkbox" id="lviv" value="Львівська" name="region">
                <label for="lviv">Львівська</label>
                <input type="checkbox" id="chernivtci" value="Черкаська" name="region">
                <label for="chernivtci">Черкаська</label>
                <input type="checkbox" id="kherson" value="Херсонська" name="region">
                <label for="kherson">Херсонська</label>

            </form>
        </div>
    </div>
</section>

</body>
</html>