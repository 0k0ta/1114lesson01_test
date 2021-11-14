{
    'use strict';

    $(function(){
        $('.menu-trigger').on('click',function(){
            // やりたいことを書く
            $(this).toggle('active');
            $('#global-nav').toggle('active');
        })
    });
}