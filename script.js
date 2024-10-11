document.addEventListener("DOMContentLoaded", function() {
    // Animación de carga
    const loading = document.getElementById('loading');
    setTimeout(() => {
        loading.style.display = 'none';
    }, 3000); // Tiempo de duración de la animación
    
    // Modal de soporte
            const modal = document.getElementById('support-modal');
            const supportBtn = document.getElementById('support-btn');
            const closeModal = document.querySelector('.close');

            // Abrir el modal cuando se haga clic en el botón "Soporte"
            supportBtn.addEventListener('click', function() {
                modal.style.display = 'block';
            });

            // Cerrar el modal al hacer clic en el tache
            closeModal.addEventListener('click', function() {
                modal.style.display = 'none';
            });

            // Cerrar el modal al hacer clic afuera del contenido
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });

    // Datos precargados
    
     // UNIDAD DE POLÍTICAS ANTICORRUPCIÓN
    
    
    const data = [
        { id: 1, nombre: 'Irais Graciela Barreto Canales', unidad: 'UNIDAD DE POLÍTICAS ANTICORRUPCIÓN', puesto: 'Jefa de la Unidad', correo: 'irais.barreto', extension: 'PENDIENTE' },
        
        { id: 2, nombre: 'Pedro Palacios Fernández', unidad: 'UNIDAD DE POLÍTICAS ANTICORRUPCIÓN', puesto: 'PENDIENTE', correo: 'pedro.palacios', extension: 'PENDIENTE' },
        
        { id: 3, nombre: 'Mario Flores Padilla', puesto: 'PENDIENTE', correo: 'PENDIENTE', extension: 'PENDIENTE' },
        
        { id: 4, nombre: 'Julieta de la Vega Luna', unidad: 'UNIDAD DE POLÍTICAS ANTICORRUPCIÓN', puesto: 'Directora de Vinculación Interinstitucional', correo: 'julieta.delavega', extension: '1022' },
        
        { id: 5, nombre: 'Mónica Montserrat Correa Zepeda', unidad: 'PENDIENTE', puesto: 'Subdirectora de Vinculación Interinstitucional A', correo: 'monica.correa', extension: 'PENDIENTE' },
        
        { id: 6, nombre: 'Denisse Orozco Tavera', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Vinculación Interinstitucional B', correo: 'denisse.orozco', extension: '1182' },
        
     // DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL   
        
        { id: 7, nombre: 'Vicente Peredo Vázquez ', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Director General de Vinculación Nacional e Internacional', correo: 'vicente.peredo', extension: '1271' },
        
        { id: 8, nombre: 'Sergio Alonso Rodríguez Narvaez', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Director de Proyectos Anticorrupción', correo: 'sergio.rodriguezn', extension: '1402' },
        
        { id: 9, nombre: 'José de Jesús Román Pérez García', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Director de Vinculación con el SNF', correo: 'jose.perez', extension: '1085' },
        
        { id: 10, nombre: 'León David Zayas Ornelas', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Director de Vinculación con el SNA', correo: 'leon.zayas', extension: '1388' },
        
        { id: 11, nombre: 'Julio Téllez Del Río', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Director de Vinculación y Cooperación Internacional', correo: 'julio.tellez', extension: '1520' },
        
        { id: 12, nombre: 'Valentina Valdez Jasso', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Directora de Convenciones y Mecanismos Anticorrupción', correo: 'vvaldez', extension: '1183' },
        
        { id: 13, nombre: 'Irma Yutzil Magaña Reyes', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Implementación del SNA', correo: 'irma.magana', extension: '1211' },
        
        { id: 14, nombre: 'Juan Carlos Villeda Mondragón', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirector de Proyectos Anticorrupción', correo: 'juan.villeda', extension: '1397' },
        
        { id: 15, nombre: 'Martha Miguel Mejía', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Secretaria del Jefe (a) de la UPA', correo: 'martha.miguel', extension: '4481' },
        
        { id: 16, nombre: 'Alberto Ibarra Peralta', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'alberto.ibarra', correo: 'alejandra.herrera', extension: '1583' },
        
        { id: 17, nombre: 'Ana Laura López Hernández', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Proyectos Anticorrupción', correo: 'ana.lopez', extension: '1253' },
        
        { id: 18, nombre: 'Xóchitl Escutia Flores', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Vinculación y Cooperación Internacional', correo: 'xescutia', extension: '1130' },
        
        { id: 19, nombre: 'Berenice Salazar Ayala', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Vinculación y Cooperación Internacional', correo: 'berenice.salazar', extension: '1508' },
        
        { id: 20, nombre: 'Mariana Gallegos López', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Vinculación y Cooperación Internacional', correo: 'mariana.gallegos', extension: '1169' },
        
        
        { id: 21, nombre: 'Raquel Nayeli Vargas Cabrera', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Proyectos Anticorrupción D', correo: 'raquel.vargas', extension: '1297' },
        
        { id: 22, nombre: 'Alejandra Herrera Rodríguez', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Convenciones y Mecanismos Anticorrupción A', correo: 'alejandra.herrera', extension: '1443' },
        
        
        { id: 23, nombre: 'Mariana Yáñez López', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de área', correo: 'mariana.yanez', extension: '1262' },
        
        { id: 24, nombre: 'Nancy Lilian Torres García', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Convenciones y Mecanismos Anticorrupción B ', correo: 'nancy.torresg', extension: '1266' },
        
        { id: 25, nombre: 'Silvia Ramírez Díaz', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Secretaría', correo: 'sramirezd', extension: '1277' },
        
        { id: 26, nombre: 'Karina Álvarez Torres', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Seguimiento a Políticas del SNA B', correo: 'karina.alvarez', extension: '1390' },
        
        { id: 27, nombre: 'Dulce María Aguilar Olvera', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Seguimiento a Políticas del SNA A ', correo: 'dulce.aguilar', extension: '1180' },
        
        { id: 23, nombre: 'Fernando Sánchez Valdespino', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirector de Seguimiento a Políticas del SNA C', correo: 'fernando.escandon', extension: '1553' },
        
        { id: 28, nombre: 'Abigail Itandehui Vázquez López', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirectora de Seguimiento a Políticas del SNF A', correo: 'abigail.vazquez', extension: '1339' },
        
        { id: 29, nombre: 'Francisco Javier Carmona Villagómez', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirector de Seguimiento a Políticas del SNF B', correo: 'francisco.carmona', extension: '1568' },
        
        { id: 30, nombre: 'Leticia Gabriela Bernal Díaz', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Secretaria', correo: 'lbernal', extension: '1031' },
        
        { id: 31, nombre: 'Juan Francisco Elizalde Morales', unidad: 'DIRECCIÓN GENERAL DE VINCULACIÓN NACIONAL E INTERNACIONAL', puesto: 'Subdirector de Vinculación y Cooperación Internacional', correo: 'juan.elizalde', extension: '1544' },
        
        
        // DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO
        
        { id: 32, nombre: 'Grethel Alejandra Pilgram Santos', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Directora General de Transparencia y Gobierno Abierto', correo: 'grethel.pilgram', extension: '1052' },
        
        { id: 33, nombre: 'Fermín Hildebrando García Leal', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Director de Acceso a la Información', correo: 'fermin.vargas', extension: '1174' },
        
        { id: 34, nombre: 'Irving Manchinelly Mota', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Director de Protección de Datos Personales', correo: 'rving.manchinelly', extension: '1433' },
        
        { id: 34, nombre: 'Luis Antonio Guillén Quintero', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Director de Acciones de Transparencia en la Gestión Pública', correo: 'luis.guillen', extension: '1228' },
        
        { id: 35, nombre: 'Arturo Jaime Magallanes', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Director de Datos Abiertos', correo: 'arturo.jaime', extension: '1080' },
        
        { id: 36, nombre: 'Eduardo Vargas Ortiz', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Director de Gobierno Abierto y Obligaciones de Transparencia', correo: 'evargas', extension: '1023' },
        
        { id: 37, nombre: 'Andrea Mondragón Reyes', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirectora de Gobierno Abierto y Obligaciones de Transparencia', correo: 'andrea.mondragon', extension: '1523' },
        
        { id: 38, nombre: 'Karina Pérez Cortes', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirectora de Protección de Datos Personales', correo: 'karina.perez', extension: '1276' },
        
        { id: 39, nombre: 'Erika Torres Godínez', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirectora de Gobierno Abierto y Obligaciones de Transparencia', correo: 'erika.torres', extension: '1385' },
        
        { id: 40, nombre: 'Fernando Escandón Yuso', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirector de Acceso a la Información', correo: 'fernando.escandon', extension: '1553' },
        
        { id: 41, nombre: 'Andrea Michelle Delgado Rodríguez', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Jefa de Departamento de Acceso a la Información ', correo: 'andrea.delgado', extension: '1384' },
        
        
        { id: 42, nombre: 'Alejandra Reyes Salas', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'alejandra.salas', correo: 'karina.perez', extension: '1581' },
        
        
        { id: 43, nombre: 'Andrik Gilberto García Sánchez', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirector de Gobierno Abierto ', correo: 'andrik.garcia', extension: '1305' },
        
        { id: 44, nombre: 'Juan Antonio Guzmán Oliva', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Jefe de Departamento', correo: 'juan.guzman', extension: '1376' },
        
        { id: 45, nombre: 'Enrique Zapotitla Salazar', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Enlace', correo: 'enrique.zapotitla', extension: '1537' },
        
        { id: 46, nombre: 'Miguel Angel Villegas Arellanos', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Jefe de Departamento de Datos Abiertos', correo: 'miguel.villegas', extension: '1139' },
        
        { id: 47, nombre: 'Javier Ortiz Hernández', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Auxiliar de Departamento', correo: 'jortiz', extension: '1402' },
        
        { id: 48, nombre: 'Julieta Lizbeth Salinas Ruiz', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Auxiliar de  Departamento', correo: 'lizbeth.salinas', extension: '1149' },
        
        { id: 49, nombre: 'Federico René Sánchez Delgado', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Auxiliar de Departamento', correo: 'federico.sanchez', extension: '1543' },
        
        { id: 50, nombre: 'Brenda Grisselle Zatarain Ramírez', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Jefa de Departamento', correo: 'brenda.zatarain', extension: '1192' },
        
        { id: 51 nombre: 'Lethzae Guadalupe Rojas Anievas', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirectora de área', correo: 'lethzae.rojas', extension: '1441' },
        
        { id: 52, nombre: 'Cristina Begné Guerra', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirectora de área', correo: 'cristina.begne', extension: '1451' },
        
        { id: 53, nombre: 'Raúl Galicia Lira', unidad: 'DIRECCIÓN GENERAL DE TRANSPARENCIA Y GOBIERNO ABIERTO', puesto: 'Subdirector de área', correo: 'raul.galicia', extension: '1104' },
        
        //DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD
        
        
        { id: 54, nombre: 'Gibran Alberto Briones Acosta', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Director General del Centro de Estudios para Prevenir la Corrupción e Impunidad ', correo: 'gibran.briones', extension: '4046' },
        
        { id: 55, nombre: 'Ernesto Eduardo Morales Maldonado', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Director de Evaluación Integral de Formación y Capacitación', correo: 'ernesto.morales', extension: '1541' },
        
        { id: 51, nombre: 'Amanda Judith Monter Gamiño', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Directora de Formación y Capacitación Institucional', correo: 'amanda.monter', extension: '1534' },
        
        { id: 52, nombre: 'Mayda Areli Angel Sánchez', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirectora de Formación y Capacitación Institucional A', correo: 'areli.angel', extension: '4351' },
        
        { id: 53, nombre: 'Rocio Juárez Méndez', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirectora de Evaluación Integral de Formación y Capacitación A  ', correo: 'rocio.juarez', extension: '1542' },
        
        { id: 54, nombre: 'Zazil América Torres González', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirectora de Innovación para el Aprendizaje A ', correo: 'zazil.torres', extension: '4349' },
        
        { id: 55, nombre: 'Juana Iris Fragoso Barreto', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'juana.fragoso', correo: 'Subdirectora de los Sistemas de Información de los Sistemas Anticorrupción y Fiscalización', extension: '1352' },
        
        { id: 56, nombre: 'Cuauhtémoc Jaime Merino Gallegos', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirector de Formación y Capacitación Institucional B ', correo: 'cuauhtemoc.merino', extension: '1106' },
        
        { id: 57, nombre: 'Nancy Laura Contreras García', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirectora de Evaluación Integral de Formación y Capacitación B  ', correo: 'nancy.contreras', extension: '4417' },
        
        { id: 58, nombre: 'Efraín Madrigal García', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Subdirector de área', correo: 'efrain.madrigal', extension: '1207' },
        
        { id: 59, nombre: 'Irvin Iván Vieyra Córdoba', unidad: 'DIRECCIÓN GENERAL DEL CENTRO DE ESTUDIOS PARA PREVENIR LA CORRUPCIÓN E IMPUNIDAD', puesto: 'Jefe de Departamento de Mecanismos Anticorrupción  ', correo: 'irvin.vieyra', extension: '4418' }
    ];

    const rowsPerPage = 7;
    let currentPage = 1;

    function displayData(page) {
        const tableBody = document.querySelector('#directory-table tbody');
        tableBody.innerHTML = '';

        const startIndex = (page - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, data.length);

        for (let i = startIndex; i < endIndex; i++) {
            const row = `<tr>
                <td>${data[i].id}</td>
                <td>${data[i].nombre}</td>
                <td>${data[i].unidad}</td>
                <td>${data[i].puesto}</td>
                <td>${data[i].correo}</td>
                <td>${data[i].extension}</td>
            </tr>`;
            tableBody.innerHTML += row;
        }

        document.getElementById('pagination-info').textContent = `Mostrando ${startIndex + 1}-${endIndex} de ${data.length} resultados`;
    }

    function search() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredData = data.filter(item =>
            item.nombre.toLowerCase().includes(searchTerm) ||
            item.unidad.toLowerCase().includes(searchTerm) ||
            item.puesto.toLowerCase().includes(searchTerm)
        );
        displayFilteredData(filteredData);
    }

    function displayFilteredData(filteredData) {
        const tableBody = document.querySelector('#directory-table tbody');
        tableBody.innerHTML = '';

        filteredData.forEach(item => {
            const row = `<tr>
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                <td>${item.unidad}</td>
                <td>${item.puesto}</td>
                <td>${item.correo}</td>
                <td>${item.extension}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

        document.getElementById('pagination-info').textContent = `Mostrando 1-${filteredData.length} de ${filteredData.length} resultados`;
    }
    
    
    

    // Evento de búsqueda al presionar Enter
    document.getElementById('search-input').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            search();
        }
    });
    
    
    

    // Funcionalidad de paginación
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayData(currentPage);
        }
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentPage < Math.ceil(data.length / rowsPerPage)) {
            currentPage++;
            displayData(currentPage);
        }
    });
    
   

    // Mostrar los datos al cargar la página
    displayData(currentPage);

    // Función para descargar el archivo en formato Excel
    document.getElementById('excel-button').addEventListener('click', function() {
        let table = document.getElementById("directory-table");
        let wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "directorio_contactos.xlsx");
    });
});
    
    

    // Funcionalidad de paginación
    document.getElementById('prev-btn').addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayData(currentPage);
        }
    });

    document.getElementById('next-btn').addEventListener('click', function() {
        if (currentPage < Math.ceil(data.length / rowsPerPage)) {
            currentPage++;
            displayData(currentPage);
        }
    });
    
   

    // Mostrar los datos al cargar la página
    displayData(currentPage);

    // Función para descargar el archivo en formato Excel
    document.getElementById('excel-button').addEventListener('click', function() {
        let table = document.getElementById("directory-table");
        let wb = XLSX.utils.table_to_book(table);
        XLSX.writeFile(wb, "directorio_contactos.xlsx");
    });
});
