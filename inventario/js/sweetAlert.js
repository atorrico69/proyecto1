(async () => {

const {value: Producto} = await Swal.fire({
    title: 'Bienvenido!',
    text: 'Reabastecer Stock',
    icon: 'warning',
    confirmButtonText: 'Seleccionar',
    footer: 'Esta es informacion Importante',
    with: '90%',
    padding: '1rem',
    // background: '#000',
    // grow: 'fullscreen',
    backdrop: true,
    // timer: 5000,
    // timerProgressBar: true,
    // toast: true,
    position: 'center',
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,

    input: 'select',
    inputPlaceholder: 'Producto',
    inputValue: '',
    inputOptions: {
        Producto1: 'Producto 1',
        Producto2: 'Producto 2',
        Producto3: 'Producto 3',
        Producto4: 'Producto 4',
        Producto5: 'Producto 5',
        Producto6: 'Producto 6'
    }


});

if (Producto){
    Swal.fire({
        title: `Seleccionaste ${Producto}`
    });
}
})()