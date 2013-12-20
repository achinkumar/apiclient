$(document).ready(function () {
    $('#btnGet').click(function () {
        clearDiv();
        ajaxify('Get', '/employee', handleViewEmployee);
    });

    $('#btnPut').click(function () {
        clearDiv();
        ajaxify('Put', '/employee', handleUpdateEmployee);
    });

    $('#btnPost').click(function () {
        clearDiv();
        ajaxify('Post', '/employee', handleCreateEmployee);
    });

    $('#btnDelete').click(function () {
        clearDiv();
        ajaxify('Delete', '/employee', handleDeleteEmployee);
    });

    function handleViewEmployee(err, data) {
        if (err) {
            $('#err').html(JSON.stringify(err));
        } else {
            $('#resp').html(JSON.stringify(data));
        }
    };

    function handleUpdateEmployee(err, data) {
        if (err) {
            $('#err').html(JSON.stringify(err));
        } else {
            $('#resp').html(JSON.stringify(data));
        }
    };

    function handleCreateEmployee(err, data) {
        if (err) {
            $('#err').html(JSON.stringify(err));
        } else {
            $('#resp').html(JSON.stringify(data));
        }
    };

    function handleDeleteEmployee(err, data) {
        if (err) {
            $('#err').html(JSON.stringify(err));
        } else {
            $('#resp').html(JSON.stringify(data));
        }
    };
    
    function clearDiv(){
        $('#err').html(null);
        $('#resp').html(null);
    };
    
    function ajaxify(reqType, url, cb) {
        $.ajax({
            "type": reqType,
            "url": url,
            success: function (data) {
                if (data.error) {
                    cb(data.error, data);
                } else {
                    cb(undefined, data);
                }

            }
        });
    }

});