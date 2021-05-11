<?php
require_once('data/getData.php');
?>

<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<title>Taco Spin &#127790;</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
<link rel="stylesheet" href="css/styles.css">

</head>
<body>

<body class="d-flex h-100 text-center text-white bg-dark">
    
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style="height: 10vh;">
      <header class="mb-auto">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="http://www.tacosp.in/app/img/taco-svg_no-face.svg" alt="Taco Spin" height="20" class="d-inline-block align-text-top">
              Taco Spin
            </a>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
              </ul>
            </div> -->
          </div>
        </nav>
      </header>
    
      <main class="d-flex flex-column justify-content-center" style="height: 80vh;">
        <div class="container">
          <div class="row">
            <div class="col">
              <h1>Coming soon..</h1>
                <p class="lead">
                Empires rise and fall as the taco spins. You can try and<br />
                resist but to fight the taco is an effort in futility. The taco<br />
                turns and with it, destiny is made into reality
                </p>
                <div class="btn-group" role="group" aria-label="Features">
                  <button type="button" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu_winners" aria-controls="offcanvasMenu_winners">
                      Previous Winners
                  </button>
                </div>
            </div>
          </div>
        </div>
      </main>
    
      <footer class="d-flex flex-column justify-content-end text-white-50" style="height: 10vh;">
        <p>
          Copyright &#169; 2015-2021 - Rodney Sean
        </p>
      </footer>
    </div>

    <!--// Off Canvas -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasMenu_winners" aria-labelledby="offcanvasMenu_winnersLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasMenu_winnersLabel">Past Winners</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">

        <div class="offcanvas-section">
          <h4 class="text-dark">Previous Winners</h4>
          <table id="winningHistory" class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Guess</th>
                <th scope="col">Total Spins</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="/js/user.js"></script>
<script>

</script>
</body>
</html>