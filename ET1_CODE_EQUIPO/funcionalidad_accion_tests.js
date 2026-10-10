/*
----------------------------------------------
PARA LA ENTIDAD funcionalidad_accion:
 - id_funcionalidad
 - id_accion
 ----------------------------------------------
 ----------------------------------------------

DECISIONES DE DISEÑO PARA LA ENTIDAD FUNCIONALIDAD_ACCION: Se han definido, para cada atributo y acción, solo los tests atómicos que tienen sentido según su formato. 
Los dos atributos (id_funcionalidad e id_accion) forman la clave primaria compuesta y son claves foráneas, y se introducen mediante elementos select
 --------------
 Se interpreta "numérico min 1 max 11" como número de dígitos (int(11)). Para ambos se definen ADD, EDIT y SEARCH. En ADD y EDIT se incluyen min_size (equivale a la selección obligatoria 
    de un valor), max_size, format (solo dígitos enteros) y valid; max_size y format, aunque un select no debería generar esos errores, se mantienen para detectar valores manipulados.
     En SEARCH se omite min_size porque el filtro es opcional y un valor vacío significa "sin filtro". No se incluyen tests sobre la unicidad del par (id_funcionalidad, id_accion) ni sobre la
    existencia de los ids en sus tablas, al ser comprobaciones de servidor y no validaciones atómicas de formato del campo.

 ----------------------------------------------

*/
// [entidad, campo, elemento, num_def, descripcion, validacion_atomica, accion, resultado_esperado, mensaje]
var funcionalidad_accion_def_tests = [
    // 1.1. ATRIBUTO: "id_funcionalidad" con acción: "ADD"
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 1, "Validar selección obligatoria de id_funcionalidad en ADD", "min_size", "ADD", "id_funcionalidad_min_size_ko",
        "Debe seleccionar obligatoriamente una funcionalidad válida (mínimo 1 dígito numérico)."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 2, "Validar longitud máxima de dígitos para id_funcionalidad en ADD", "max_size", "ADD", "id_funcionalidad_max_size_ko",
        "El identificador de funcionalidad sobrepasa los 11 dígitos numéricos permitidos."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 3, "Validar formato numérico para id_funcionalidad en ADD", "format", "ADD", "id_funcionalidad_format_ko",
        "El identificador de funcionalidad solo puede componerse exclusivamente de dígitos numéricos enteros."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 4, "Validar id_funcionalidad seleccionada válida en ADD", "valid", "ADD", true,
        "La funcionalidad seleccionada ha sido validada correctamente."
    ],
    // 1.2. ATRIBUTO: "id_funcionalidad" con acción: "EDIT"
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 5, "Validar selección obligatoria de id_funcionalidad en EDIT", "min_size", "EDIT", "id_funcionalidad_min_size_ko",
        "Error al modificar: debe seleccionar una funcionalidad válida (mínimo 1 dígito numérico)."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 6, "Validar longitud máxima de dígitos para id_funcionalidad en EDIT", "max_size", "EDIT", "id_funcionalidad_max_size_ko",
        "Error al modificar: el identificador de funcionalidad sobrepasa los 11 dígitos numéricos permitidos."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 7, "Validar formato numérico para id_funcionalidad en EDIT", "format", "EDIT", "id_funcionalidad_format_ko",
        "Error al modificar: el identificador de funcionalidad debe ser numérico."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 8, "Validar id_funcionalidad correcta en EDIT", "valid", "EDIT", true,
        "El cambio de funcionalidad se ha validado satisfactoriamente."
    ],
    // 1.3. ATRIBUTO: "id_funcionalidad" con acción: "SEARCH"
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 9, "Validar longitud máxima del filtro por id_funcionalidad en SEARCH", "max_size", "SEARCH", "id_funcionalidad_max_size_ko",
        "El filtro de búsqueda por funcionalidad no puede superar los 11 dígitos numéricos."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 10, "Validar formato de filtro por id_funcionalidad en SEARCH", "format", "SEARCH", "id_funcionalidad_format_ko",
        "El filtro de búsqueda por funcionalidad únicamente permite valores numéricos enteros."
    ],
    [
        "funcionalidad_accion", "id_funcionalidad", "select", 11, "Validar búsqueda por id_funcionalidad correcta en SEARCH", "valid", "SEARCH", true,
        "Filtro de búsqueda por funcionalidad aplicado con éxito."
    ],
    // 2.1. ATRIBUTO: "id_accion" con acción: "ADD"
    [
        "funcionalidad_accion", "id_accion", "select", 12, "Validar selección obligatoria de id_accion en ADD", "min_size", "ADD", "id_accion_min_size_ko",
        "Debe seleccionar obligatoriamente una acción válida (mínimo 1 dígito numérico)."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 13, "Validar longitud máxima de dígitos para id_accion en ADD", "max_size", "ADD", "id_accion_max_size_ko",
        "El identificador de acción sobrepasa los 11 dígitos numéricos permitidos."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 14, "Validar formato numérico para id_accion en ADD", "format", "ADD", "id_accion_format_ko",
        "El identificador de acción solo puede componerse exclusivamente de dígitos numéricos enteros."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 15, "Validar id_accion seleccionada válida en ADD", "valid", "ADD", true,
        "La acción seleccionada ha sido validada correctamente."
    ],
    // 2.2. ATRIBUTO: "id_accion" con acción: "EDIT"
    [
        "funcionalidad_accion", "id_accion", "select", 16, "Validar selección obligatoria de id_accion en EDIT", "min_size", "EDIT", "id_accion_min_size_ko",
        "Error al modificar: debe seleccionar una acción válida (mínimo 1 dígito numérico)."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 17, "Validar longitud máxima de dígitos para id_accion en EDIT", "max_size", "EDIT", "id_accion_max_size_ko",
        "Error al modificar: el identificador de acción sobrepasa los 11 dígitos numéricos permitidos."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 18, "Validar formato numérico para id_accion en EDIT", "format", "EDIT", "id_accion_format_ko",
        "Error al modificar: el identificador de acción debe ser numérico."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 19, "Validar id_accion correcta en EDIT", "valid", "EDIT", true,
        "El cambio de acción se ha validado satisfactoriamente."
    ],
    // 2.3. ATRIBUTO: "id_accion" con acción: "SEARCH"
    [
        "funcionalidad_accion", "id_accion", "select", 20, "Validar longitud máxima del filtro por id_accion en SEARCH", "max_size", "SEARCH", "id_accion_max_size_ko",
        "El filtro de búsqueda por acción no puede superar los 11 dígitos numéricos."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 21, "Validar formato de filtro por id_accion en SEARCH", "format", "SEARCH", "id_accion_format_ko",
        "El filtro de búsqueda por acción únicamente permite valores numéricos enteros."
    ],
    [
        "funcionalidad_accion", "id_accion", "select", 22, "Validar búsqueda por id_accion correcta en SEARCH", "valid", "SEARCH", true,
        "Filtro de búsqueda por acción aplicado con éxito."
    ]
];
 
// [entidad, campo, num_def_test, num_prueba, accion, objeto_valores, resultado_esperado]
var funcionalidad_accion_pruebas = [
    // 1.1. ATRIBUTO: "id_funcionalidad" en ADD
    ["funcionalidad_accion", "id_funcionalidad", 1, 1, "ADD", { "id_funcionalidad": "" }, "id_funcionalidad_min_size_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 2, 2, "ADD", { "id_funcionalidad": "123456789012" }, "id_funcionalidad_max_size_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 3, 3, "ADD", { "id_funcionalidad": "func_1" }, "id_funcionalidad_format_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 4, 4, "ADD", { "id_funcionalidad": "1" }, true],

    // 1.2. ATRIBUTO: "id_funcionalidad" en EDIT
    ["funcionalidad_accion", "id_funcionalidad", 5, 5, "EDIT", { "id_funcionalidad": "" }, "id_funcionalidad_min_size_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 6, 6, "EDIT", { "id_funcionalidad": "123456789012" }, "id_funcionalidad_max_size_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 7, 7, "EDIT", { "id_funcionalidad": "abc" }, "id_funcionalidad_format_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 8, 8, "EDIT", { "id_funcionalidad": "2" }, true],

    // 1.3. ATRIBUTO: "id_funcionalidad" en SEARCH
    ["funcionalidad_accion", "id_funcionalidad", 9, 9, "SEARCH", { "id_funcionalidad": "123456789012" }, "id_funcionalidad_max_size_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 10, 10, "SEARCH", { "id_funcionalidad": "1a" }, "id_funcionalidad_format_ko"],
    ["funcionalidad_accion", "id_funcionalidad", 11, 11, "SEARCH", { "id_funcionalidad": "1" }, true],

    // 2.1. ATRIBUTO: "id_accion" en ADD
    ["funcionalidad_accion", "id_accion", 12, 12, "ADD", { "id_accion": "" }, "id_accion_min_size_ko"],
    ["funcionalidad_accion", "id_accion", 13, 13, "ADD", { "id_accion": "123456789012" }, "id_accion_max_size_ko"],
    ["funcionalidad_accion", "id_accion", 14, 14, "ADD", { "id_accion": "acc_1" }, "id_accion_format_ko"],
    ["funcionalidad_accion", "id_accion", 15, 15, "ADD", { "id_accion": "1" }, true],

    // 2.2. ATRIBUTO: "id_accion" en EDIT
    ["funcionalidad_accion", "id_accion", 16, 16, "EDIT", { "id_accion": "" }, "id_accion_min_size_ko"],
    ["funcionalidad_accion", "id_accion", 17, 17, "EDIT", { "id_accion": "123456789012" }, "id_accion_max_size_ko"],
    ["funcionalidad_accion", "id_accion", 18, 18, "EDIT", { "id_accion": "abc" }, "id_accion_format_ko"],
    ["funcionalidad_accion", "id_accion", 19, 19, "EDIT", { "id_accion": "2" }, true],

    // 2.3. ATRIBUTO: "id_accion" en SEARCH
    ["funcionalidad_accion", "id_accion", 20, 20, "SEARCH", { "id_accion": "123456789012" }, "id_accion_max_size_ko"],
    ["funcionalidad_accion", "id_accion", 21, 21, "SEARCH", { "id_accion": "1a" }, "id_accion_format_ko"],
    ["funcionalidad_accion", "id_accion", 22, 22, "SEARCH", { "id_accion": "1" }, true]
];