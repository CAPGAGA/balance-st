// for top formset
document.getElementById('submitBtnTop').addEventListener('click', function(){
    if(document.getElementById('gridCheckTop').checked){
    send_request(document.getElementById('inputNameTop').value, document.getElementById('inputEmailTop').value, document.getElementById('inputPhoneTop').value)
    }else{
    document.getElementById('warningTop').removeAttribute("hidden");
    console.log('not checked')
    }
})

function send_request(name, email, phone){
   console.log('sending data')
   var url = 'get_request/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-CSRFToken': csrftoken,
        },
        body:JSON.stringify({'name': name, 'email': email, 'phone': phone})
    })

    .then((response) =>{
        return response.json()
    })

    .then((data) =>{
        console.log('data', data)
        location.reload()
    })
}



