$(document).ready(function() {
    let table = new DataTable('#tabla', {
        dom: 'Blfrtip',
        buttons: [
            {
                extend: 'copy',
                text: 'Copiar',
                // className: ''
            },
            {
                extend: 'csv',
                text: 'Exportar a CSV',
            },
            {
                extend: 'excel',
                text: 'Exportar a Excel',
            },
            {
                extend: 'pdf',
                text: 'Exportar a PDF',
                title: 'SAE - SISTEMA DE ADMINISTRACION E-CART ' + new Date().toLocaleString(),
                filename: 'Listado de empleados',
                customize: function(doc) {
                    doc.content.splice(0, 0, {
                        text: 'Lista de Empleados',
                        style: 'header'
                    });
                    doc.content.splice(1, 0, {
                        text: 'Este es un mensaje adicional para el PDF.',
                        margin: [0, 0, 0, 20]
                    });
                }
            },
            {
                extend: 'print',
                text: 'Imprimir',
                title: 'SAE - Listado de Marcas'
            }
        ],
        language: {
            url: 'https://cdn.datatables.net/plug-ins/2.1.7/i18n/es-AR.json',
        },
        lengthMenu: [5, 10, 25, 50, 75, 100, 200, 300, 500, 1000],
        pageLength: 5,

    });

 // Espera un poco para asegurarte de que los botones están en el DOM
    setTimeout(function() {
        $('.dt-button.buttons-copy.buttons-html5')
            .removeClass('dt-button')
            .addClass('bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded');

        // Repite para otros botones si es necesario
        $('.dt-button.buttons-csv.buttons-html5')
            .removeClass('dt-button')
            .addClass('bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded');

        $('.dt-button.buttons-excel.buttons-html5')
            .removeClass('dt-button')
            .addClass('bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded');

        $('.dt-button.buttons-pdf.buttons-html5')
            .removeClass('dt-button')
            .addClass('bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded');

        $('.dt-button.buttons-print')
            .removeClass('dt-button')
            .addClass('bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded');
    }, 100); // 100 ms de espera


});