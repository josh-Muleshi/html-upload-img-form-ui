<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style_autre.css">
</head>
<body>
    <div class="card">
        <div class="top">
            <p>Selection des photo</p>
            <button type="button">Upload</button>
        </div>
        <form class="" action="/upload" method="post">
            <span class="inner">Glisez l\'image ici ou <span class="select">browse</span></span>
            <input type="file" name="file" class="file" multiple>
        </form>
        <div class="container">
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>