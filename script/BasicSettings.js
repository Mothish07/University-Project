//Load sideBar.html
$(function(){
   $('#sidebar').load('./sideBar.html');
});
//Load Header.html
$(function(){
    $('#headerbar').load('./header.html');
});
//Script for uploading image frontend 
$(document).ready(function() {
    let $LI1 = $('#LI1');
    let $LI2 = $('#LI2');
    let $uploadFile1 = $('#uploadFile1');
    let $uploadFile2 = $('#uploadFile2');
 
    $uploadFile1.on('change', function() {
        $LI1.attr('src', URL.createObjectURL(this.files[0]));
    });
 
    $uploadFile2.on('change', function() {
        $LI2.attr('src', URL.createObjectURL(this.files[0]));
    });
 });
//refresh Button Scripts
let refreshButtons = document.getElementsByClassName('refreshButton');

for (let i = 0; i < refreshButtons.length; i++) {
    refreshButtons[i].addEventListener('click', function() {
        location.reload();
    });
}


//Authority Card Scripts
$(document).ready(function() {
   loadFormData(); // Function Call

   // Function for GET data from Backend
   function loadFormData() {
       $.ajax({
           url: 'phpScripts/Authority.php',
           type: 'GET',
           dataType: 'json',
           success: function(data) {
               if (data.success) {
                  $('#departmentHeadName').val(data.data.departmentHeadName);
                   $('#registrarHeadName').val(data.data.registrarHeadName);
                   $('#ViceChancellorHeadName').val(data.data.ViceChancellorHeadName);

                  $('#departmentHeadDesignation option').each(function() {
                     if ($(this).text() === data.data.departmentHeadDesignation) {
                         $(this).prop('selected', true);
                     }
                 });
             
                 $('#registrarDesignation option').each(function() {
                     if ($(this).text() === data.data.registrarDesignation) {
                         $(this).prop('selected', true);
                     }
                 });
             
                 $('#ViceChancellorDesignation option').each(function() {
                     if ($(this).text() === data.data.ViceChancellorDesignation) {
                         $(this).prop('selected', true);
                     }
                 });
             
                 $('#SigningAuthorityDesignation option').each(function() {
                     if ($(this).text() === data.data.SigningAuthorityDesignation) {
                         $(this).prop('selected', true);
                     }
                 });
                 $('#departmentHead option').each(function() {
                  if ($(this).text() === data.data.departmentHead) {
                      $(this).prop('selected', true);
                  }
                   });
               } else {
                   Swal.fire({
                       toast: true,
                       position: 'top-end',
                       icon: 'error',
                       title: data.message,
                       showConfirmButton: false,
                       timer: 3000,
                       timerProgressBar: true,
                       customClass: {
                           popup: 'swalContainer',
                           title: 'swalTitleError'
                       }
                   });
               }
           },
           error: function() {
               Swal.fire({
                   toast: true,
                   position: 'top-end',
                   icon: 'error',
                   title: 'Failed To Load Data',
                   showConfirmButton: false,
                   timer: 3000,
                   timerProgressBar: true,
                   customClass: {
                       popup: 'swalContainer',
                       title: 'swalTitleError'
                   }
               });
           }
       });
   }

   // Save Button "To POST the update data to Backend"
   $('#saveAuth').click(function() {
       var formData = {
           departmentHead: $('#departmentHead').val(),
           departmentHeadName: $('#departmentHeadName').val(),
           departmentHeadDesignation: $('#departmentHeadDesignation').val(),
           registrarHeadName: $('#registrarHeadName').val(),
           registrarDesignation: $('#registrarDesignation').val(),
           ViceChancellorHeadName: $('#ViceChancellorHeadName').val(),
           ViceChancellorDesignation: $('#ViceChancellorDesignation').val(),
           SigningAuthorityDesignation: $('#SigningAuthorityDesignation').val()
       };

       $.ajax({
           url: 'phpScripts/Authority.php',
           type: 'POST',
           data: formData,
           dataType: 'json', // Parse JSON automatically
           success: function(data) {
               if (data.success) {
                   Swal.fire({
                       toast: true,
                       position: 'top-end',
                       icon: 'success',
                       title: data.message,
                       showConfirmButton: false,
                       timer: 1500,
                       timerProgressBar: true,
                       customClass: {
                           popup: 'swalContainer',
                           title: 'swalTitleSuccess'
                       }
                   });
                   loadFormData();
               } else {
                   Swal.fire({
                       toast: true,
                       position: 'top-end',
                       icon: 'error',
                       title: data.message,
                       showConfirmButton: false,
                       timer: 3000,
                       timerProgressBar: true,
                       customClass: {
                           popup: 'swalContainer',
                           title: 'swalTitleError'
                       }
                   });
               }
           },
           error: function() {
               Swal.fire({
                   toast: true,
                   position: 'top-end',
                   icon: 'error',
                   title: 'Failed To Update Data',
                   showConfirmButton: false,
                   timer: 3000,
                   timerProgressBar: true,
                   customClass: {
                       popup: 'swalContainer',
                       title: 'swalTitleError'
                   }
               });
           }
       });
   });

   // Reset Button
   $('#resetAuth').click(function() {
       $('#Authority')[0].reset();
   });
});

//Header Card Scripts
$(document).ready (function() {
    loadFormData(); //function call

//function for get data from backend
    function loadFormData(){
        $.ajax({
            url: 'phpScripts/header.php',
            type: 'GET',
            success: function(response) {
                let data = JSON.parse(response);
                if (data.success) {
                    $('#HL1').val(data.data.headerLine1);
                    $('#HL2').val(data.data.headerLine2);
                    $('#HL3').val(data.data.headerLine3);
                    $('#LI1').attr('src', data.data.logoImage1);
                    $('#LI2').attr('src', data.data.logoImage2);
                } else {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'swalContainer',
                            title: 'swalTitleError'
                        }
                    });
                }
            },
            error: function() {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed To Load Data',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'swalContainer',
                        title: 'swalTitleError'
                    }
                });
            }
        });
    }

//Save Button 'to post the update data in backend'
    $('#saveHead').click(function() {
    var formData = new FormData();
    formData.append('headerLine1', $('#HL1').val());
    formData.append('headerLine2', $('#HL2').val());
    formData.append('headerLine3', $('#HL3').val());

   
    if ($('#uploadFile1')[0].files[0]) {
        formData.append('logoImage1', $('#uploadFile1')[0].files[0]);
    }
    if ($('#uploadFile2')[0].files[0]) {
        formData.append('logoImage2', $('#uploadFile2')[0].files[0]);
    }

    $.ajax({
        url: 'phpScripts/header.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function(response) {
            try {
                let data = JSON.parse(response);
                if (data.success) {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'swalContainer',
                            title: 'swalTitleSuccess'
                        }
                    });
                    loadFormData();
                } else {
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'swalContainer',
                            title: 'swalTitleError'
                        }
                    });
                }
            } catch (e) {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to update data',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'swalContainer',
                        title: 'swalTitleError'
                    }
                });
            }
        },
        error: function(xhr, status, error) {
            
            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Failed to update data',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                customClass: {
                    popup: 'swalContainer',
                    title: 'swalTitleError'
                }
            });
        }
    });
    });

//reset button Script
    $('#resetHead').on('click', function() {
    $('#header')[0].reset();
    });
    loadFormData();//initial load
});

//Email Settings Card Scripts
$(document).ready(function(){
    loadFormData(); //function call

    //function for getting the data from backend
    function loadFormData(){
        $.ajax({
            url:'phpScripts/emailSettings.php',
            type:'GET',
            success:function(response){
                let data = JSON.parse(response);
                if (data.success){
                    $('#emailId').val(data.data.emailId);
                        $('#mailSignature').val(data.data.mailSignature);
                }
                else{
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'swalContainer',
                            title: 'swalTitleError'
                        }
                    });
                }
            }
            ,
            error:function() {
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed To Load Data',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'swalContainer',
                        title: 'swalTitleError'
                    }
                });
            }
        });
    }

    //Save Button 'to post the updated data to backend'
    $('#saveEmail').click(function(){
        var formData = new FormData($('#emailSettings')[0]);
        $.ajax({
            url:'phpScripts/emailSettings.php',
            type:'POST',
            data: formData,
            contentType: false,
            processData: false,
            success:function(response) {
                try {
                    let data = JSON.parse(response);
                    if (data.success) {
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'success',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            customClass: {
                                popup: 'swalContainer',
                                title: 'swalTitleSuccess'
                            }
                        });
                    } else {
                        console.error('Error saving email settings:', data.message);
                        Swal.fire({
                            toast: true,
                            position: 'top-end',
                            icon: 'error',
                            title: data.message,
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            customClass: {
                                popup: 'swalContainer',
                                title: 'swalTitleError'
                            }
                        });

                    }
                } catch (e) {
                    console.error('Error parsing JSON:', e, response);
                    Swal.fire({
                        toast: true,
                        position: 'top-end',
                        icon: 'error',
                        title: 'Failed to update data',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        customClass: {
                            popup: 'swalContainer',
                            title: 'swalTitleError'
                        }
                    });
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX POST request error:', error);
                Swal.fire({
                    toast: true,
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to update data',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    customClass: {
                        popup: 'swalContainer',
                        title: 'swalTitleError'
                    }
                });
            }
        });

    });
    //resetButton script
    $('#resetEmail').on('click', function() {
        $('#emailSettings')[0].reset();
    });
});

  


