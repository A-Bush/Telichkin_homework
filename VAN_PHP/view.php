<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

</head>
<body>

<div class="container-fluid">
    <div class="container">
        <table class="table table-stripped">
            <thead>
            <tr class="success">
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Telephones</th>
                <th>Site</th>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
</div>

<script>
    var json;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'controller.php', true);
    xhr.send();
    xhr.responseType = "json";
    xhr.onreadystatechange = function() { // (3)
        if (xhr.readyState != 4) return;

        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            json = xhr.response;
        }
    }

</script>

</body>
</html>