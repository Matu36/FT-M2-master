//ocultamos la imagen//
const loading = $("img");
loading.hide();


//conectar el boton ver amigos// 

$("#boton").click (() => {
    loading.show ();
    const lista = $("#lista");
    lista.empty();
$.get (`http://localhost:5000/amigos`, (data) => {
    for (const amigo of data) {
        const li = document.createElement("li");
        li.innerText = amigo.name;
        lista.append (li);
    }
    loading.hide();
});
});

//primero llamo al campo de busqueda (input)//

$ ("#search").click (() => {
    $.get (`http://localhost:5000/amigos/${$("input").val()}` , (data) => {
        $("#amigo").text (data.name);
    });
});



$ ("#delete").click (() => {
$.ajax ({
    method: "DELETE" ,
    url: `$("http://localhost:5000/amigos")/${$("#inputDelete").val()}` ,
    success: () => {
        $("#success").text ("Tu amigo fue borrado con éxito");
    },
});
})


