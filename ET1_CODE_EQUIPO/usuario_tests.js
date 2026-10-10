/*
----------------------------------------------
PARA LA ENTIDAD USUARIO:
 - dni
 - usuario
 - contrasena
 - id_rol
 ----------------------------------------------

DECISIONES DE DISEÑO PARA LA ENTIDAD USUARIO: Se han definido, para cada atributo y acción, solo los tests atómicos que tienen sentido según su formato. 
 --------------
 DNI: solo ADD y SEARCH, porque es clave primaria (y FK de persona) y no se modifica en EDIT. En ADD se incluyen min_size, max_size, format (8 dígitos + letra mayúscula), personalized (letra de control, 
      algoritmo módulo 23) y valid.  En SEARCH se omiten min_size y personalized: la búsqueda es exacta por DNI completo, por lo que el format ya exige los 9 caracteres, y no se recalcula la letra porque el
      objetivo es localizar un registro, no darlo de alta. Se considera DNI estándar válido el formado por 8 dígitos y una letra mayúscula de control; las letras minúsculas se rechazan en el test de formato.
      Adicionalmente, se rechaza en NIE al ser de 7 digitos y 2 letras.
 --------------
 - USUARIO: se validan ADD, EDIT y SEARCH con min_size (5), max_size (45) y format (alfabético sin ñ ni acentos); en SEARCH se omite min_size porque el filtro puede
            ser parcial u omitirse. 
 --------------
 - CONTRASENA: solo ADD y EDIT con min_size (8), max_size (45) y format alfabético sin ñ ni acentos; no se define SEARCH porque la contraseña es
               un dato sensible que nunca se utiliza como criterio de búsqueda. 
 --------------
 - ID_ROL: es un select y clave foránea; se interpreta "numérico min 1 max 11" como número de dígitos (int(11)). En ADD y EDIT min_size equivale a seleccionar un rol obligatoriamente, y max_size y 
         format protegen frente a valores manipulados; en SEARCH se omite min_size porque el filtro es opcional. En todos los casos hay un test "valid" que confirma el caso correcto y su mensaje.

 ----------------------------------------------
*/
 
// [entidad, campo, elemento, num_def, descripcion, validacion_atomica, accion, resultado_esperado, mensaje]
var usuario_def_tests = [
    // 1.1. ATRIBUTO: "dni" con acción: "ADD"
    [ 
        "usuario", "dni", "input", 1, "Validar longitud mínima de los caracteres del dni en ADD", "min_size", "ADD", "dni_min_size_ko", 
        "El DNI introducido es demasiado corto. Debe contener exactamente 9 caracteres (8 números y una letra)."
    ],
    [ 
        "usuario", "dni", "input", 2, "Validar longitud máxima de los caracteres del dni en ADD", "max_size", "ADD", "dni_max_size_ko", 
        "El DNI introducido sobrepasa el límite permitido. Debe contener exactamente 9 caracteres (8 números y una letra)."
    ],
    [ 
        "usuario", "dni", "input", 3, "Validar formato estandar de DNI (8 digitos y 1 letra) en ADD", "format", "ADD", "dni_format_ko", 
        "El formato del DNI es incorrecto. Debe contener 8 dígitos numéricos seguidos de una letra mayúscula."
    ],
    [ 
        "usuario", "dni", "input", 4, "Validar calculo de la letra del DNI en ADD", "personalized", "ADD", "dni_personalized_ko", 
        "La letra indicada no coincide con el cálculo del algoritmo oficial del Ministerio del Interior para el DNI introducido."
    ],
    [ 
        "usuario", "dni", "input", 5, "Validar DNI correcto y verificado en ADD", "valid", "ADD", true,
        "El DNI proporcionado es válido y cumple con todas las reglas de estructura y control."
  
    ],
    // 1.2. ATRIBUTO: "dni" con acción: "SEARCH"
    [ 
        "usuario", "dni", "input", 6, "Validar longitud maxima en la busqueda de DNI en SEARCH", "max_size", "SEARCH", "dni_max_size_ko", 
        "El valor del DNI para búsqueda no debe exceder los 9 caracteres de longitud."
    ],
    [ 
        "usuario", "dni", "input", 7, "Validar formato estandar de DNI en SEARCH", "format", "SEARCH", "dni_format_ko", 
        "El DNI debe tener un formato válido: 8 dígitos numéricos seguidos de una letra mayúscula."
    ],
    [ 
        "usuario", "dni", "input", 8, "Validar busqueda de DNI correcta en SEARCH", "valid", "SEARCH", true, 
        "Criterio de búsqueda por DNI aceptado correctamente."
    ],
    // 2.1. ATRIBUTO: "usuario" con acción: "ADD"
    [
        "usuario", "usuario", "input", 9, "Validar longitud minima de nombre de usuario en ADD", "min_size", "ADD", "usuario_min_size_ko",
        "El nombre de usuario es demasiado corto. Debe tener una longitud mínima de 5 caracteres alfabéticos."
    ],
    [
        "usuario", "usuario", "input", 10, "Validar longitud maxima de nombre de usuario en ADD", "max_size", "ADD", "usuario_max_size_ko",
        "El nombre de usuario supera el límite máximo permitido. No puede exceder de 45 caracteres."
    ],
    [
        "usuario", "usuario", "input", 11, "Validar formato alfabetico sin ñ ni acentos en ADD", "format", "ADD", "usuario_format_ko",
        "El nombre de usuario debe contener únicamente caracteres alfabéticos, sin 'ñ' ni acentos."
    ],
    [
        "usuario", "usuario", "input", 12, "Validar nombre de usuario valido en ADD", "valid", "ADD", true,
        "El nombre de usuario cumple con todas las restricciones de longitud y formato."
    ],
    // 2.2. ATRIBUTO: "usuario" con acción: "EDIT"
    [
        "usuario", "usuario", "input", 13, "Validar longitud minima de nombre de usuario en EDIT", "min_size", "EDIT", "usuario_min_size_ko",
        "Error al modificar el usuario: el nuevo nombre debe tener al menos 5 caracteres alfabéticos."
    ],
    [
        "usuario", "usuario", "input", 14, "Validar longitud maxima de nombre de usuario en EDIT", "max_size", "EDIT", "usuario_max_size_ko",
        "Error al modificar el usuario: el nombre sobrepasa la longitud máxima de 45 caracteres."
    ],
    [
        "usuario", "usuario", "input", 15, "Validar formato alfabetico estricto en EDIT", "format", "EDIT", "usuario_format_ko",
        "Error al modificar el usuario: no se permiten caracteres numéricos, acentos, 'ñ' ni símbolos especiales."
    ],
    [
        "usuario", "usuario", "input", 16, "Validar nombre de usuario valido en EDIT", "valid", "EDIT", true,
        "La modificación del nombre de usuario se ha validado satisfactoriamente."
    ],
    // 2.3. ATRIBUTO: "usuario" con acción: "SEARCH"
    [
        "usuario", "usuario", "input", 17, "Validar longitud maxima de busqueda por usuario en SEARCH", "max_size", "SEARCH", "usuario_max_size_ko",
        "El criterio de búsqueda para el nombre de usuario supera el límite máximo permitido de 45 caracteres."
    ],
    [
        "usuario", "usuario", "input", 18, "Validar formato permitido en busqueda de usuario en SEARCH", "format", "SEARCH", "usuario_format_ko",
        "El criterio de búsqueda contiene caracteres no válidos. Solo se admiten letras simples sin acentos ni 'ñ'."
    ],
    [
        "usuario", "usuario", "input", 19, "Validar busqueda de usuario correcta en SEARCH", "valid", "SEARCH", true,
        "Criterio de búsqueda para el usuario validado correctamente."
    ],
    // 3.1. ATRIBUTO: "contrasena" con acción: "ADD"
    [
        "usuario", "contrasena", "input", 20, "Validar longitud minima de contrasena en ADD", "min_size", "ADD", "contrasena_min_size_ko",
        "La contraseña es demasiado corta. Por seguridad, se exige un mínimo estricto de 8 caracteres."
    ],
    [
        "usuario", "contrasena", "input", 21, "Validar longitud maxima de contrasena en ADD", "max_size", "ADD", "contrasena_max_size_ko",
        "La contraseña sobrepasa el límite de capacidad permitido. No puede superar los 45 caracteres."
    ],
    [
        "usuario", "contrasena", "input", 22, "Validar formato alfabetico estricto sin números ni ñ ni acentos en ADD", "format", "ADD", "contrasena_format_ko",
        "La contraseña solo puede contener caracteres alfabéticos, sin 'ñ' ni acentos."
    ],
    [
        "usuario", "contrasena", "input", 23, "Validar contrasena valida en ADD", "valid", "ADD", true,
        "La contraseña introducida satisface plenamente todas las políticas de formato y longitud."
    ],
    // 3.2. ATRIBUTO: "contrasena" con acción: "EDIT"
    [
        "usuario", "contrasena", "input", 24, "Validar longitud minima de contrasena en EDIT", "min_size", "EDIT", "contrasena_min_size_ko",
        "Error al actualizar contraseña: el nuevo valor debe tener al menos 8 caracteres alfabéticos."
    ],
    [
        "usuario", "contrasena", "input", 25, "Validar longitud maxima de contrasena en EDIT", "max_size", "EDIT", "contrasena_max_size_ko",
        "Error al actualizar contraseña: el valor excede el máximo permitido de 45 caracteres."
    ],
    [
        "usuario", "contrasena", "input", 26, "Validar formato alfabetico de contrasena en EDIT", "format", "EDIT", "contrasena_format_ko",
        "Error al actualizar contraseña: se detectaron caracteres no permitidos (solo letras simples sin acentos ni 'ñ' ni números)."
    ],
    [
        "usuario", "contrasena", "input", 27, "Validar contrasena correcta en EDIT", "valid", "EDIT", true,
        "La nueva contraseña ha sido validada y aceptada con éxito."
    ],
    // 4.1. ATRIBUTO: "id_rol" con acción: "ADD"
    [
        "usuario", "id_rol", "select", 28, "Validar longitud minima de id_rol en ADD", "min_size", "ADD", "id_rol_min_size_ko",
        "El identificador del rol debe contener al menos 1 dígito numérico."
    ],
    [
        "usuario", "id_rol", "select", 29, "Validar longitud maxima de digitos para id_rol en ADD", "max_size", "ADD", "id_rol_max_size_ko",
        "El identificador del rol supera los 11 dígitos numéricos permitidos."
    ],
    [
        "usuario", "id_rol", "select", 30, "Validar formato numerico exclusivo para id_rol en ADD", "format", "ADD", "id_rol_format_ko",
        "El identificador de rol solo puede componerse exclusivamente de dígitos numéricos enteros."
    ],
    [
        "usuario", "id_rol", "select", 31, "Validar rol seleccionado correcto en ADD", "valid", "ADD", true,
        "El rol seleccionado para el usuario ha sido validado correctamente."
    ],
    // 4.2. ATRIBUTO: "id_rol" con acción: "EDIT"
    [
        "usuario", "id_rol", "select", 32, "Validar longitud mínima de id_rol en EDIT", "min_size", "EDIT", "id_rol_min_size_ko",
        "Error al cambiar el rol: debe seleccionar un rol válido (mínimo 1 dígito numérico)."
    ],
    [
        "usuario", "id_rol", "select", 33, "Validar longitud máxima de dígitos para id_rol en EDIT", "max_size", "EDIT", "id_rol_max_size_ko",
        "Error al cambiar el rol: el identificador del rol supera los 11 dígitos numéricos permitidos."
    ],
    [
        "usuario", "id_rol", "select", 34, "Validar formato numerico para id_rol en EDIT", "format", "EDIT", "id_rol_format_ko",
        "Error al cambiar el rol: el valor seleccionado debe ser un identificador numérico válido."
    ],
    [
        "usuario", "id_rol", "select", 35, "Validar rol correcto en EDIT", "valid", "EDIT", true,
        "El nuevo rol asignado al usuario es válido."
    ],
 
    // 4.3. ATRIBUTO: "id_rol" con acción: "SEARCH"
     [
        "usuario", "id_rol", "select", 36, "Validar longitud máxima del filtro por id_rol en SEARCH", "max_size", "SEARCH", "id_rol_max_size_ko",
        "El filtro de búsqueda por rol no puede superar los 11 dígitos numéricos."
    ],
    [
        "usuario", "id_rol", "select", 37, "Validar formato de filtro por id_rol en SEARCH", "format", "SEARCH", "id_rol_format_ko",
        "El filtro de búsqueda por rol únicamente permite valores numéricos enteros."
    ],
    [
        "usuario", "id_rol", "select", 38, "Validar busqueda por id_rol correcta en SEARCH", "valid", "SEARCH", true,
        "Filtro de búsqueda por rol aplicado con éxito."
    ]
];
 
// [entidad, campo, num_def_test, num_prueba, accion, objeto_valores, resultado_esperado]
var usuario_pruebas = [
    // 1.1. ATRIBUTO: "dni" con acción: "ADD"
    ["usuario", "dni", 1, 1, "ADD", { "dni": "1234567" }, "dni_min_size_ko"],
    ["usuario", "dni", 2, 2, "ADD", { "dni": "1234567890" }, "dni_max_size_ko"],
    ["usuario", "dni", 3, 3, "ADD", { "dni": "12345678-" }, "dni_format_ko"],
    ["usuario", "dni", 3, 4, "ADD", { "dni": "ABCDEFGHJ" }, "dni_format_ko"],
    ["usuario", "dni", 4, 5, "ADD", { "dni": "53618492Z" }, "dni_personalized_ko"],
    ["usuario", "dni", 5, 6, "ADD", { "dni": "53618492H" }, true],

    // 1.2. ATRIBUTO: "dni" con acción: "SEARCH"
    ["usuario", "dni", 6, 7, "SEARCH", { "dni": "1234567890" }, "dni_max_size_ko"],
    ["usuario", "dni", 7, 8, "SEARCH", { "dni": "53618492%" }, "dni_format_ko"],
    ["usuario", "dni", 8, 9, "SEARCH", { "dni": "53618492H" }, true],

    // 2.1. ATRIBUTO: "usuario" con acción: "ADD"
    ["usuario", "usuario", 9, 10, "ADD", { "usuario": "user" }, "usuario_min_size_ko"],
    ["usuario", "usuario", 10, 11, "ADD", { "usuario": "a".repeat(46) }, "usuario_max_size_ko"],
    ["usuario", "usuario", 11, 12, "ADD", { "usuario": "usüario" }, "usuario_format_ko"],
    ["usuario", "usuario", 11, 13, "ADD", { "usuario": "usuario123" }, "usuario_format_ko"],
    ["usuario", "usuario", 11, 14, "ADD", { "usuario": "pepe_admin" }, "usuario_format_ko"],
    ["usuario", "usuario", 12, 15, "ADD", { "usuario": "gestorPrincipal" }, true],

    // 2.2. ATRIBUTO: "usuario" con acción: "EDIT"
    ["usuario", "usuario", 13, 16, "EDIT", { "usuario": "adm" }, "usuario_min_size_ko"],
    ["usuario", "usuario", 14, 17, "EDIT", { "usuario": "a".repeat(46) }, "usuario_max_size_ko"],
    ["usuario", "usuario", 15, 18, "EDIT", { "usuario": "adminÑ" }, "usuario_format_ko"],
    ["usuario", "usuario", 16, 19, "EDIT", { "usuario": "operadorTurno" }, true],

    // 2.3. ATRIBUTO: "usuario" con acción: "SEARCH"
    ["usuario", "usuario", 17, 20, "SEARCH", { "usuario": "a".repeat(46) }, "usuario_max_size_ko"],
    ["usuario", "usuario", 18, 21, "SEARCH", { "usuario": "admin$" }, "usuario_format_ko"],
    ["usuario", "usuario", 18, 22, "SEARCH", { "usuario": "admin123" }, "usuario_format_ko"],
    ["usuario", "usuario", 19, 23, "SEARCH", { "usuario": "admin" }, true],

    // 3.1. ATRIBUTO: "contrasena" con acción: "ADD"
    ["usuario", "contrasena", 20, 24, "ADD", { "contrasena": "abcdefg" }, "contrasena_min_size_ko"],
    ["usuario", "contrasena", 21, 25, "ADD", { "contrasena": "a".repeat(46) }, "contrasena_max_size_ko"],
    ["usuario", "contrasena", 22, 26, "ADD", { "contrasena": "claveSegura123" }, "contrasena_format_ko"],
    ["usuario", "contrasena", 22, 27, "ADD", { "contrasena": "contraseñaValida" }, "contrasena_format_ko"],
    ["usuario", "contrasena", 23, 28, "ADD", { "contrasena": "superPasswordSegura" }, true],

    // 3.2. ATRIBUTO: "contrasena" con acción: "EDIT"
    ["usuario", "contrasena", 24, 29, "EDIT", { "contrasena": "corta" }, "contrasena_min_size_ko"],
    ["usuario", "contrasena", 25, 30, "EDIT", { "contrasena": "a".repeat(46) }, "contrasena_max_size_ko"],
    ["usuario", "contrasena", 26, 31, "EDIT", { "contrasena": "clave_con_guion" }, "contrasena_format_ko"],
    ["usuario", "contrasena", 27, 32, "EDIT", { "contrasena": "claveModificadaCorrecta" }, true],

    // 4.1. ATRIBUTO: "id_rol" con acción: "ADD"
    ["usuario", "id_rol", 28, 33, "ADD", { "id_rol": "" }, "id_rol_min_size_ko"],
    ["usuario", "id_rol", 29, 34, "ADD", { "id_rol": "123456789012" }, "id_rol_max_size_ko"],
    ["usuario", "id_rol", 30, 35, "ADD", { "id_rol": "rol_uno" }, "id_rol_format_ko"],
    ["usuario", "id_rol", 31, 36, "ADD", { "id_rol": "1" }, true],

    // 4.2. ATRIBUTO: "id_rol" con acción: "EDIT"
    ["usuario", "id_rol", 32, 37, "EDIT", { "id_rol": "" }, "id_rol_min_size_ko"],
    ["usuario", "id_rol", 33, 38, "EDIT", { "id_rol": "123456789012" }, "id_rol_max_size_ko"],
    ["usuario", "id_rol", 34, 39, "EDIT", { "id_rol": "abc" }, "id_rol_format_ko"],
    ["usuario", "id_rol", 35, 40, "EDIT", { "id_rol": "2" }, true],

    // 4.3. ATRIBUTO: "id_rol" con acción: "SEARCH"
    ["usuario", "id_rol", 36, 41, "SEARCH", { "id_rol": "123456789012" }, "id_rol_max_size_ko"],
    ["usuario", "id_rol", 37, 42, "SEARCH", { "id_rol": "1a" }, "id_rol_format_ko"],
    ["usuario", "id_rol", 37, 43, "SEARCH", { "id_rol": "rol" }, "id_rol_format_ko"],
    ["usuario", "id_rol", 38, 44, "SEARCH", { "id_rol": "1" }, true]
];