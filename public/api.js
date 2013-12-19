$(document).ready(function() {
    $('#btnGet').click(function() {
        ajaxify('Get', 'http://localhost:3000/employee', function(err, data) {                        
            $('#resp').html(JSON.stringify(data));
        });
    });

    $('#btnPut').click(function() {
        ajaxify('Put', 'http://localhost:3000/employee', function(err, data) {
            $('#resp').html(JSON.stringify(data));
        });
    });

    $('#btnPost').click(function() {
        ajaxify('Post', 'http://localhost:3000/employee', function(err, data) {
            $('#resp').html(JSON.stringify(data));
        });
    });

    $('#btnDelete').click(function() {
        ajaxify('Delete', 'http://localhost:3000/employee', function(err, data) {
            $('#resp').html(JSON.stringify(data));
        });
    });

    $('#btnErr').click(function() {
        ajaxify('Get', 'http://localhost:3000/employeeErr', function(err, data) {
            if(err){
                $('#err').html(JSON.stringify(err));
            }else{
                $('#err').html(JSON.stringify(data));
            }
        });
    });


    function ajaxify(reqType, url, cb) {
        $.ajax({
            "type": reqType,
            "url": url,
            success: function(data) {
                if(data.error){
                    cb(data.error,data);
                }else{
                    cb(undefined, data);
                }
                
            }
        });
    }

});