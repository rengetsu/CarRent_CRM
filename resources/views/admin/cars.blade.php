<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Whee!</title>


    <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/bootstrap.min.css')}}">


    <link href="{{URL::to('css/sb-admin.css')}}" rel="stylesheet">


    <link href="{{URL::to('css/plugins/morris.css')}}" rel="stylesheet">



<style type="text/css">
    #txt{
        font-size: 48px;
    }
    .navbar {
     background: #2980b9 !important;
   }
   #sides ul {
    background: #2980b9 !important;

   }
   #sides ul li a{
    color: #fff !important;
   }
   body {
    background: #2c3e50;
   }
   span{
    font-size: 40px;
   }

  .dropdown a{
    color: #f39c12 !important;
  }

   body {
    background-color: #323232 !important;
   }

   .spoiler, .spoiler2{
  color: black;
  background-color:black;
}

.spoiler:hover{
  color: white;
  }

.spoiler2:hover {
  background-color:white;
  }
</style>

</head>

<body>
  <?php
  $cars = array("1", "2", "3", "4", "5", "6", "7");
  $cars_sk = 7;
  ?>

    <div id="wrapper">


        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#" data-toggle="modal" data-target="#test"></a>
            </div>

            <ul class="nav navbar-right top-nav">


                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i>{{Auth::user()->fname}} {{Auth::user()->lname}}<b class="caret"></b></a>
                    <ul class="dropdown-menu">


                        <li>
                            <a href="#"><i class="fa fa-fw fa-gear"></i> Profile</a>
                        </li>
                         <li>
                            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li>
                            <a href="{{route('admin_logout')}}"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="collapse navbar-collapse navbar-ex1-collapse" id="sides">
                <ul class="nav navbar-nav side-nav">
                    <li >
                      <a href="{{route('admin_home')}}" ><i class="glyphicon glyphicon-home pull-right"></i> Home</a>
                    </li>
                    <li>
                      <a href="{{route('admin_message')}}" ><i class="glyphicon glyphicon-envelope pull-right"></i> Meessage</a>
                    </li>
                    <li class="active">
                      <a href="{{route('admin_cars')}}" ><i class="glyphicon glyphicon-education pull-right"></i> Cars</a>
                    </li>
                     <li >
                      <a href="{{route('admin_reservation')}}" ><i class="glyphicon glyphicon-tasks pull-right"></i> Reservations</a>
                    </li>



                    <li>
                      <a href="{{route('admin_custoemr')}}" ><i class="glyphicon glyphicon-tasks pull-right"></i> Customers</a>
                    </li>
                </ul>
            </div>

        </nav>


        <div id="page-wrapper">
          <div class="row">
            <h1 class="text-center">Car List</h1>

            <button type="button" class="btn btn-info">New Car</button>
          </div>

        </div>

        <div id="page-wrapper">
          <div class="row">

             <table class="table">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Car</th>
                    <th>Year</th>
                    <th>Price 1 Day</th>
                    <th>Bags</th>
                    <th>MPG</th>
                    <th>Plus</th>
                    <th>Type</th>
                    <th>System</th>
                    <th>Photo</th>
                  </tr>

                  <?php foreach ($cars as $key => $cars_sk): ?>

                    <tr>
                      <td><?php $key ?></td>
                      <td>Marcedes-Benz SLK</td>
                      <td>2016</td>
                      <td>79.00 $</td>
                      <td>2 Bags</td>
                      <td>150 MPG</td>
                      <td>Airbags</td>
                      <td>Manual/Auto</td>
                      <td>AC</td>
                      <td><img width="50" height="50" src="https://thenewswheel.com/wp-content/uploads/2015/07/2016-SLK-New-630x463.jpg"></td>
                    </tr>

                  <?php endforeach; ?>

                </thead>
             </table>
          </div>

        </div>

        </div>

    </div>

<script type="text/javascript" src="{{URL::to('assets/js/jquery-2.2.4.min.js')}}"></script>
<script type="text/javascript" src="{{URL::to('assets/js/bootstrap.min.js')}}"></script>

</body>

</html>
