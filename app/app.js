(function() {
    'use strict';

    angular.module('app', [
            "ui.router",
            "ngStorage",
            '720kb.datepicker',
            'ngFileUpload',
            'angular.filter',
            'angularjs-dropdown-multiselect'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            //$urlRouterProvider.otherwise("/");
            $urlRouterProvider.otherwise(function($injector,$location){
                var $state=$injector.get('$state'); 
                $state.go('checkstatus');
            });
            
            $stateProvider.state("login", {
                url: "/login",
                templateUrl: "/views/user/login.html",
                controller: "loginController"
            }).state("logout", {
                url: "/logout",
                templateUrl: "/views/user/logout.html",
                controller: "logoutController"
            }).state("home", {
                url: "/home",
                templateUrl: "/views/user/home.html",
                controller: "dashboardController"
               
            })
            .state("checkstatus",{
                url:"/check",
                templateUrl:"/views/user/chceck.html",
                controller:"checkstatus"
            })
          
            .state("Schedule TimeTable", {
                parent:"home",
                url: "/edit/timetable",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/timetablesetter/edit.html",
                        controller: "timetableedit"
                    }   
                }
            
            })
            .state("Change Password", {
                parent:"home",
                url: "/changepassword",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/timetablesetter/changepassword.html",
                        controller: "changepass"
                    }   
                }
            
            })
            .state("Add faculty", {
                parent:"home",
                url: "/edit/Addfaculty",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/timetablesetter/facultyadd.html",
                        controller: "addfacc"
                    }   
                }
            
            })
            .state("setprefered", {
                parent:"home",
                url: "/set/prefered",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/timetablesetter/prefered.html",
                        controller: "prefered"
                    }   
                }
            
            })
            .state("timetable", {
                parent:"home",
                url: "/view/timetable",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/user/timetable.html",
                        controller: "fagController"
                    }   
                }
            
            })
            .state("customsearch", {
                parent:"home",
                url: "/view/custom",
                views: {
                    'tasks@home':{
                        templateUrl: "/views/user/custom.html",
                        controller: "hrcellController"
                    }   
                }
            })
         

               //to present 
                    .state("conreg", {
                        parent:"home",
                        url: "/hr/contractorregistration",
                        views: {
                            'tasks@home':{
                                templateUrl: "/views/hr_cell/contractorRegistration.html",
                                controller: "hrcellController"
                            }   
                        }
                    
                    })
                    .state("viewprofile", {
                        parent:"home",
                        url: "/home/viewprofile",
                        views: {
                            'tasks@home':{
                                templateUrl: "/views/user/profile.html",
                                controller: "hrcellController"
                            }   
                        }
                    
                    })
          
            //to present 
            .state("faculty",{
                parent:"home",
                url:"home/faculty",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/faculty.html",
                        controller:"faculty"
                    }
                }
            })
            .state("Add subjects",{
                parent:"home",
                url:"home/subjects",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/addsubjects.html",
                        controller:"addsub"
                    }
                }
            })
            .state("Add Department",{
                parent:"home",
                url:"home/Department",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/addDepartment.html",
                        controller:"addDept"
                    }
                }
            })
            .state("Dept details",{
                parent:"home",
                url:"home/rooms",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/deptdetails.html",
                        controller:"build"
                    }
                }
            })
            .state("User Managemnt",{
                parent:"home",
                url:"home/userManagment",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/usermanagment.html",
                        controller:"usermanag"
                    }
                }
            })
            .state("Edit TimeTable",{
                parent:"home",
                url:"home/editTT",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/Edittimetable.html",
                    controller:"editTT"
                    }
                    
                }
            })
            .state("Open electives",{
                parent:"home",
                url:"home/Open electives",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/Openelectives.html",
                        controller:"Openelectives"
                    }
                }
            })
            //dept schedule
            .state("Dept schedule",{
                parent:"home",
                url:"home/Dept schedule",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/Deptschedule.html",
                        controller:"Deptschedule"
                    }
                }
            })
            //
            .state("Clear Timetable",{
                parent:"home",
                url:"home/ClearTimetable",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/timetablesetter/deleteSchedule.html",
                        controller:"deletedata"
                    }
                }
            })
            .state("processbill",{
                parent:"home",
                url:"/process/bill",
                views:{
                    'tasks@home':{
                        templateUrl:"/views/user/processBill.html",
                        controller:"fagController"
                    }
                }
            })
         
       
            
          
   
           ;
   
        })
        .constant("globalConfig", {
            personalfaculty:"http://202.63.117.90:4000/api/user/personalfaculty",
            getfacname:"http://202.63.117.90:4000/api/user/getfacname",
            delallotment:"http://202.63.117.90:4000/api/user/delallotment",
            excelfacapi:"http://202.63.117.90:4000/api/user/exceladdfacinfo",
            uploaddata:'http://202.63.117.90:4000/api/user/uploaddata',
            deleteoldallot:'http://202.63.117.90:4000/api/user/deleteoldallot',
            deletedata:'http://202.63.117.90:4000/api/user/deletedata',
            test1:'http://202.63.117.90:4000/api/user/test1',
            finalinsertAPI:'http://202.63.117.90:4000/api/user/finalinsertAPI',
            editfinalinsertAPI:'http://202.63.117.90:4000/api/user/editfinalinsertAPI',
            getelementAPI:'http://202.63.117.90:4000/api/user/getelementAPI',
            editgetelementAPI:'http://202.63.117.90:4000/api/user/edit/getelementAPI',
            undoAPI:'http://202.63.117.90:4000/api/user/undoAPI',
            updatefacAPI:'http://202.63.117.90:4000/api/user/updatefacAPI',
            allotwithprevious:'http://202.63.117.90:4000/api/user/allotwithprevious',
            clearFacSubAllot:'http://202.63.117.90:4000/api/user/clearFacSubAllot',
            facallotment: 'http://202.63.117.90:4000/api/user/facallotment',
            facavbAPI:'http://202.63.117.90:4000/api/user/facavb',
            getsubjectname:'http://202.63.117.90:4000/api/user/getsubjectname',
            facdayinfoApi:'http://202.63.117.90:4000/api/user/facdayinfo',
            subinfoAPI:'http://202.63.117.90:4000/api/user/subinfo',
            getweekrptAPI:'http://202.63.117.90:4000/api/user/weekreport',
            custom:'http://202.63.117.90:4000/api/user/custom',
            getdeptrooms:'http://202.63.117.90:4000/api/user/getdeptrooms',
            gettableh:'http://202.63.117.90:4000/api/user/gettablecourse',
            getdeprt:'http://202.63.117.90:4000/api/user/getdepart',
            timetabledept: 'http://202.63.117.90:4000/api/user/timetabledeprt',
            timetableAPI: 'http://202.63.117.90:4000/api/user/timetable',
            userLoginApi: 'http://202.63.117.90:4000/api/user/login',
            userDashboardApi:'http://202.63.117.90:4000/api/user/home',
            getTaskTypeListApi:'http://202.63.117.90:4000/api/user/home/tasktypedetails',
            userLogoutApi: 'http://202.63.117.90:4000/api/user/home/logout',
            addfaculty:'http://202.63.117.90:4000/api/user/addfaculty',
            getfac:'http://202.63.117.90:4000/api/user/getfac',
            viewfac:'http://202.63.117.90:4000/api/user/viewfac',
            active:'http://202.63.117.90:4000/api/user/active',
            deletefac:'http://202.63.117.90:4000/api/user/deletefac',
            addsubject:'http://202.63.117.90:4000/api/user/addsubject',
            getusersAPI:'http://202.63.117.90:4000/api/user/getusersAPI',
            adduser:'http://202.63.117.90:4000/api/user/adduser',
            deactivateuser:'http://202.63.117.90:4000/api/user/deactivateuser',
            deleteuser:'http://202.63.117.90:4000/api/user/deleteuser',
            Changepassword:'http://202.63.117.90:4000/api/user/Changepassword',
            addDepartment:'http://202.63.117.90:4000/api/user/addDepartment',
            getrooms:'http://202.63.117.90:4000/api/user/getrooms',
            deleteroom:'http://202.63.117.90:4000/api/user/deleteroom',
            addsemesters:'http://202.63.117.90:4000/api/user/addsemesters',
            deactivate:'http://202.63.117.90:4000/api/user/deactivate',
            activaterole:'http://202.63.117.90:4000/api/user/activaterole',
            getarchives:'http://202.63.117.90:4000/api/user/getarchives',
            addrooms:'http://202.63.117.90:4000/api/user/addrooms',
            deleteshedule:'http://202.63.117.90:4000/api/user/deleteshedule',
            deletearchive:'http://202.63.117.90:4000/api/user/deletearchive',
            deletespec:'http://202.63.117.90:4000/api/user/deletespec',
            getsubjects:'http://202.63.117.90:4000/api/user/getsubjects',
            editsubject:'http://202.63.117.90:4000/api/user/editsubject',
            deletesubject:'http://202.63.117.90:4000/api/user/deletesubject',
            addsubjecti:'http://202.63.117.90:4000/api/user/addsubjecti',
            changefacname:'http://202.63.117.90:4000/api/user/changefacname',
            editallotment:'http://202.63.117.90:4000/api/user/editallotment',

            // naveen 
            headfoot: "http://202.63.117.90:4000/api/user/headfoot",
        }).run(run);

    run.$inject = ['$rootScope','$localStorage'];

    function run($rootScope, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.userData) {
                $rootScope.userLogin = true;
                if($localStorage.userData.rolename == 'ADMIN') {
                    $rootScope.isAdmin = true;
                 //   $rootScope.name=$localStorage.userData.name;
                }
            }else {
                 $rootScope.userLogin = false;
                 $rootScope.isAdmin = false;
            }
    }
})();