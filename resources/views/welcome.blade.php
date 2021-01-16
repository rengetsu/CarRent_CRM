<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="author" content="Jewel Theme">
        <meta name="description" content="Wheel - Responsive and Modern Car Rental Website Template">
        <meta name="keywords" content="">
        <title>Wheel</title>
        <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
        <!-- reset css -->
        <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/css_reset.css')}}">
        <!-- bootstrap -->
        <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/bootstrap.min.css')}}">
        <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/jquery.datetimepicker.min.css')}}">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="{{URL::to('assets/css/bootstrap-select.min.css')}}">
        <!-- preload -->
        <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/loaders.min.css')}}">
        <link rel="stylesheet" type="text/css" href="{{URL::to('assets/css/index.css')}}">
        <!--[if lt IE 9]>
        <script src="assets/js/html5shiv.min.js"></script>
        <script src="assets/js/respond.min.js"></script>
        <![endif]-->
    </head>
    <body class="">
        <!-- MAIN -->
        <div class="load-wrap">
            <div class="wheel-load">
                <img src="images/loader.gif" alt="" class="image">
            </div>
        </div>
        <div class="wheel-menu-wrap ">
            <div class="container-fluid wheel-bg1">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="wheel-logo">
                            <a href="{{url('/')}}"><img src="https://www.vgtu.lt/files/3843/192/9/14_0/VT_LogoRGB_BlueTransparent.png" alt=""></a>
                        </div>
                    </div>

                    <div class="col-sm-9 ">
                        <div class="wheel-navigation">
                            <nav id="dl-menu">
                                <!-- class="dl-menu" -->
                                <ul class="main-menu dl-menu">
                                    <li class="menu-item   current-menu-parent menu-item-has-children  ">
                                        <a href="index.php">Home</a>

                                    </li>
                                    <li class="menu-item current-menu-parent menu-item-has-children  ">
                                        <a href="{{route('auth_car_list')}}"> Listing </a>


                                    </li>

                                    <li class="menu-item menu-item-has-children  ">
                                        <a href="{{route('auth_contact')}}">Contact</a>

                                    </li>

                                    </li>
                                    <li class="menu-item ">
                                        <a href="{{route('auth_about')}}">About</a>
                                    </li>
                                    <li class="menu-item ">
                                        <a href="{{route('auth_account')}}">Account</a>
                                    </li>

                                    @if(Auth::check())
                                        <li class="menu-item ">
                                            <a href="{{route('user_reservation')}}">Reservation</a>
                                        </li>
                                        <li class="menu-item ">
                                            <a href="{{route('user_activity')}}">Activity</a>
                                        </li>
                                        <li class="menu-item ">
                                            <a href="{{route('user_logout')}}">Logout</a>
                                        </li>

                                    @endif
                                </ul>
                                <div class="nav-menu-icon"><i></i></div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wheel-start">
            <img src="images/bg1.jpg" alt="" class="wheel-img">
            <div class="container padd-lr0">
                <div class="col-lg-6 col-lg-push-6 ">
                    <header class="wheel-header marg-lg-b100 marg-lg-t200  marg-md-b0 marg-md-t0">
                        <h1>Car Rent CRM  </h1>
                        <h2>CRM For Car Rent</h2>
                    </header>
                </div>

            </div>
        </div>
        <!-- ////////////////////////////////////////////////////////////// -->
        <div class="wheel-bg2">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <div class="wheel-header text-center marg-lg-t140 marg-lg-b340 marg-md-t140 marg-md-b140 marg-sm-t70 ">
                            <h5>the Biggest Online </h5>
                            <h3>car <span>Rental</span>  Service</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wheel-clients">
            <div class="container padd-lr0">
                <div class="row">
                    <div class="col-md-4 padd-r0 padd-md-lr15">
                        <div class="wheel-service-item text-center wheel-bg3">
                            <div class="wheel-service-logo">
                                <img src="images/ico1.png" alt="">
                            </div>
                            <h5>24/7</h5>
                            <p>TWe work for you every day, at any time, without interruption! </p>
                        </div>
                    </div>
                    <div class="col-md-4 padd-lr0 padd-md-lr15">
                        <div class="wheel-service-item text-center wheel-service-active wheel-bg4">
                            <div class="wheel-service-logo">
                                <img src="images/ico2.png" alt="">
                            </div>
                            <h5>Best Cars</h5>
                            <p>Only best cars in your city! Rent now, very fast and withnout any problems! </p>
                        </div>
                    </div>
                    <div class="col-md-4 padd-l0 padd-md-lr15">
                        <div class="wheel-service-item  text-center wheel-bg5">
                            <div class="wheel-service-logo">
                                <img src="images/ico3.png" alt="">
                            </div>
                            <h5>Best Prices</h5>
                            <p>Only best prices in our city! The best cars at the best prices that change every day!  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 ">
                    <div class="wheel-service-img">
                        <img src="images/i1.png" alt="" class="wheel-img">
                    </div>
                </div>
            </div>
        </div>
        <!-- /////////////////////////////////////////////////// -->
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="wheel-header wheel-testi-header text-center marg-lg-t155 marg-lg-b65 marg-md-t50  marg-md-b50">
                        <h3>Our Mission is <span>Client’s</span> Satisfaction</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <div class="wheel-testimonial text-center">
                        <p>Car Rent Company created as University Project in Vilnius Tech.</p>
                        <div class="wheel-testimonial-info">
                            <span>Oleg Mongol</span>
                            <img height="70" width="70" src="https://img.championat.com/c/900x900/news/big/o/s/oleg-mongol-podralsja-s-240-kilogrammovym-soperniko_158935407440426528.jpg" alt="">
                            <p> C.E.O. & Co-Founder</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

            </div>
        </div>





        <div class="wheel-footer-info wheel-bg6">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-sm-6  padd-lr0"><img height="50" width="150" src="https://www.vgtu.lt/files/3843/192/9/14_0/VT_LogoRGB_BlueTransparent.png" alt=""><span> &#169; Vilnius Tech 2020 | Designed with Love By Pavel Trostianko</span></div>
                    <div class="col-lg-4 col-sm-6 padd-lr0">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Pages</a></li>
                            <li><a href="">Listings</a></li>
                            <li><a href="">Reservation</a></li>
                            <li><a href="">Location</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Scripts project -->
        <script type="text/javascript" src="{{URL::to('assets/js/jquery-2.2.4.min.js')}}"></script>
        <script type="text/javascript" src="{{URL::to('assets/js/bootstrap.min.js')}}"></script>
        <!-- count -->
        <script type="text/javascript" src='{{URL::to('assets/js/jquery.countTo.js')}}'></script>
        <!-- google maps -->
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBt5tJTim4lOO3ojbGARhPd1Z3O3CnE-C8" type="text/javascript"></script>
        <!-- swiper -->
        <script type="text/javascript" src="{{URL::to('assets/js/idangerous.swiper.min.js')}}"></script>
        <script type="text/javascript" src="{{URL::to('assets/js/equalHeightsPlugin.js')}}"></script>
        <script type="text/javascript" src="{{URL::to('assets/js/jquery.datetimepicker.full.min.js')}}"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script type="text/javascript" src="{{URL::to('assets/js/bootstrap-select.min.js')}}"></script>
        <script type="text/javascript" src="{{URL::to('assets/js/index.js')}}"></script>
        <!-- sixth block end -->
    </body>
</html>
