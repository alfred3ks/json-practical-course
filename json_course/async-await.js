// Aqui vemos como crear una funcion asincrona usando asinc y await:

let datosAPI = async () => {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let responseJson = await response.json();
  console.log(responseJson);
}

datosAPI();