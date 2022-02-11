$('button').on('click', function(){
    const cep = $('input').val();
    const formatValid = /^\d{5}-\d{3}$|^\d{8}$/.test(cep);
    if(formatValid){
        $.ajax(`https://cep.awesomeapi.com.br/json/${cep}`).done(
            function(res){
                $('#invalid').text('');
                delete res.address_type;
                delete res.address_name;
                const areaData = $('main div:last-child');
                areaData.html('');
                for(let i in res){
                    const item = $('<span>').text(i.toLocaleUpperCase() + ':' + res[i]);
                    item.slideUp('fast','linear');
                    item.slideDown('fast','swing');
                    areaData.append(item);
                }
                $('iframe').attr('src',`https://maps.google.com/maps?q=${res.cep}&t=&z=13&ie=UTF8&iwloc=&output=embed`)
            }
        )
    }else{
        $('#invalid').text('CEP formato XXXXX-XXX ou XXXXXXXX');
    }
})