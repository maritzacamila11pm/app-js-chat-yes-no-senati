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
//MARITZA CAMILA PONGO MAMANI 
//ALTER: PARA VER SI YA ESTAS CONECTADO ES SOLO UNA ALERTA DE FUNCOANLIDAD
async function postData() {
  //alert('Ingreso a el POST');
  try {
    const respuesta = await fetch(apiUrl,{
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({id: 123, nombre: 'Maritza', apellido: 'Pongo',lenguaje_fav:"JAVA", color:"Verde"})
    });

    const data_retorno = await respuesta.json();
    console.log(data_retorno);

  } catch (error) {
    console.log("Ocurrio un error al momento de hacer la peticion POST: "+ error )
  }
}

//para yes no 
const apiUrl1 = "https://yesno.wtf/api";

async function getData(){
    console.log('Ingreso a get data ');
    try {
        const respuesta = await fetch(apiUrl1,{
            method: "GET"
        });
        const data = await respuesta.json();
        
        console.log('data');
        console.log(data);

    }catch(error){
        console.log("Error al momento de hacer la peticion GET: "+ error);

    }
}
let yesno = document.querySelector('#yes');
yesno.addEventListener('click', function(){
    getData();
});


