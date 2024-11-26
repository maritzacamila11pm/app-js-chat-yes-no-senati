const apiUrl = "http://localhost/app-js-chta-yes-no-senati/api.php";

async function getData(){
    console.log('Ingreso a get data ');
    try {
        const respuesta = await fetch(`${apiUrl}?id=123&nombre=Maritza&apellido=Pongo`,{
            method: "GET"
        });
        const data = await respuesta.json();
        
        console.log('data');
        console.log(data);

    }catch(error){
        console.log("Error al momento de hacer la peticion GET: "+ error);

    }

}
let getdata = document.querySelector('#getdata');
getdata.addEventListener('click', function(){
    getData();
});
