/* //-----------------//-----------------//-----------------//-----------------//
    ESTRUCTURA:

    ["entidad", "clase", "tipo", "nº test", "descripción_Test", "metodo", "acción",  
        "Resultado Esperado", "mensaje" ]

*/ //-----------------//-----------------//-----------------//-----------------//

var funcionalidad_def_tests = [
    
    //Acción: ADD

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "id_funcionalidad", "input", 1, "Comprobar el tamaño mínimo", "min_size",
        "ADD", "id_funcionalidad_min_size_ko",
        "El tamaño del identificador es muy corto, escribe al menos un dígito"],

    ["funcionalidad", "id_funcionalidad", "input", 2, "Comprobar el tamaño máximo", "max_size",
        "ADD", "id_funcionalidad_max_size_ko",
        "El tamaño del identificador es muy largo, solo está permitido introducir 11 dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 3, "Comprobar si cumple el formato", "format",
        "ADD", "id_funcionalidad_format_ko",
        "El formato del identificador es inválido, solo puedes escribir dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 4, "Estado de éxito", "valid",
        "ADD", true, "Caso de Éxito"],
    
    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//
    ["funcionalidad", "nombre_funcionalidad", "input", 5, "Comprobar el tamaño mínimo", "min_size",
        "ADD", "nombre_funcionalidad_min_size_ko",
        "El tamaño del nombre es muy corto, intenta añadirle al menos 5 caracteres"],

    ["funcionalidad", "nombre_funcionalidad", "input", 6, "Comprobar el tamaño máximo", "max_size",
        "ADD", "nombre_funcionalidad_max_size_ko", 
        "El tamaño del nombre es muy largo, solo está permitido introducir 48 caracteres"],

    ["funcionalidad", "nombre_funcionalidad", "input", 7, "Comprobar si cumple el formato", "format",
        "ADD", "nombre_funcionalidad_format_ko", 
        "El formato del nombre es inválido, solo puedes escribir caracteres alfabéticos"],
    
    ["funcionalidad", "nombre_funcionalidad", "input", 8, "Estado de éxito", "valid",
        "ADD", true, "Caso de Éxito"],
    
    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", "textarea", 9, "Comprobar el tamaño mínimo", "min_size",
        "ADD", "descrip_funcionalidad_min_size_ko",
        "El tamaño de la descripción es muy corto, intenta añadirle al menos 5 caracteres"],

    ["funcionalidad", "descrip_funcionalidad", "textarea", 10, "Comprobar el tamaño máximo", "max_size",
        "ADD", "descrip_funcionalidad_max_size_ko", 
        "El tamaño de la descripción es muy largo, solo está permitido introducir 200 caracteres"],

    ["funcionalidad", "descrip_funcionalidad", "textarea", 11, "Comprobar si cumple el formato", "format",
        "ADD", "descrip_funcionalidad_format_ko", 
        "El formato de la descripción es inválido, solo puedes escribir caracteres alfabéticos, espacios y signos de puntuación"],
    
    ["funcionalidad", "descrip_funcionalidad", "textarea", 12, "Estado de éxito", "valid",
        "ADD", true, "Caso de Éxito"],

    //Acción: EDIT

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "id_funcionalidad", "input", 13, "Comprobar el tamaño mínimo", "min_size",
        "EDIT", "id_funcionalidad_min_size_ko",
        "El tamaño del identificador es muy corto, intenta añadirle al menos 1 caracter"],

    ["funcionalidad", "id_funcionalidad", "input", 14, "Comprobar el tamaño máximo", "max_size",
        "EDIT", "id_funcionalidad_max_size_ko",
        "El tamaño del identificador es muy largo, solo está permitido introducir 11 dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 15, "Comprobar si cumple el formato", "format",
        "EDIT", "id_funcionalidad_format_ko",
        "El formato del identificador es inválido, solo puedes escribir dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 16, "Estado de éxito", "valid",
        "EDIT", true, "Caso de Éxito"],

    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//
    
    ["funcionalidad", "nombre_funcionalidad", "input", 17, "Comprobar el tamaño mínimo", "min_size",
        "EDIT", "nombre_funcionalidad_min_size_ko",
        "El tamaño del nombre es muy corto, intenta añadirle al menos 5 caracteres"],

    ["funcionalidad", "nombre_funcionalidad", "input", 18, "Comprobar el tamaño máximo", "max_size",
        "EDIT", "nombre_funcionalidad_max_size_ko", 
        "El tamaño del nombre es muy largo, solo está permitido introducir 48 caracteres"],

    ["funcionalidad", "nombre_funcionalidad", "input", 19, "Comprobar si cumple el formato", "format",
        "EDIT", "nombre_funcionalidad_format_ko", 
        "El formato del nombre es inválido, solo puedes escribir caracteres alfabéticos"],
    
    ["funcionalidad", "nombre_funcionalidad", "input", 20, "Estado de éxito", "valid",
        "EDIT", true, "Caso de Éxito"],
    
    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", "textarea", 21, "Comprobar el tamaño mínimo", "min_size",
        "EDIT", "descrip_funcionalidad_min_size_ko",
        "El tamaño de la descripción es muy corto, intenta añadirle al menos 5 caracteres"],

    ["funcionalidad", "descrip_funcionalidad", "textarea", 22, "Comprobar el tamaño máximo", "max_size",
        "EDIT", "descrip_funcionalidad_max_size_ko", 
        "El tamaño de la descripción es muy largo, solo está permitido introducir 200 caracteres"],

    ["funcionalidad", "descrip_funcionalidad", "textarea", 23, "Comprobar si cumple el formato", "format",
        "EDIT", "descrip_funcionalidad_format_ko", 
        "El formato de la descripción es inválido, solo puedes escribir caracteres alfabéticos, espacios y signos de puntuación"],
    
    ["funcionalidad", "descrip_funcionalidad", "textarea", 24, "Estado de éxito", "valid",
        "EDIT", true, "Caso de Éxito"],

    //Acción: SEARCH

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "id_funcionalidad", "input", 25, "Comprobar el tamaño máximo", "max_size",
        "SEARCH", "id_funcionalidad_max_size_ko",
        "El tamaño del identificador es muy largo, solo está permitido introducir 11 dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 26, "Comprobar si cumple el formato", "format",
        "SEARCH", "id_funcionalidad_format_ko",
        "El formato del identificador es inválido, solo puedes escribir dígitos"],
    
    ["funcionalidad", "id_funcionalidad", "input", 27, "Estado de éxito", "valid",
        "SEARCH", true, "Caso de Éxito"],

    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "nombre_funcionalidad", "input", 28, "Comprobar el tamaño máximo", "max_size",
        "SEARCH", "nombre_funcionalidad_max_size_ko", 
        "El tamaño del nombre es muy largo, solo está permitido introducir 48 caracteres"],

    ["funcionalidad", "nombre_funcionalidad", "input", 29, "Comprobar si cumple el formato", "format",
        "SEARCH", "nombre_funcionalidad_format_ko", 
        "El formato del nombre es inválido, solo puedes escribir caracteres alfabéticos"],
    
    ["funcionalidad", "nombre_funcionalidad", "input", 30, "Estado de éxito", "valid",
        "SEARCH", true, "Caso de Éxito"],

    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", "textarea", 31, "Comprobar el tamaño máximo", "max_size",
        "SEARCH", "descrip_funcionalidad_max_size_ko", 
        "El tamaño de la descripción es muy largo, solo está permitido introducir 200 caracteres"],

    ["funcionalidad", "descrip_funcionalidad", "textarea", 32, "Comprobar si cumple el formato", "format",
        "SEARCH", "descrip_funcionalidad_format_ko", 
        "El formato de la descripción es inválido, solo puedes escribir caracteres alfabéticos, espacios y signos de puntuación"],
    
    ["funcionalidad", "descrip_funcionalidad", "textarea", 33, "Estado de éxito", "valid",
        "SEARCH", true, "Caso de Éxito"]
];

/* //-----------------//-----------------//-----------------//-----------------//
   ESTRUCTURA:
 
   ["entidad", "clase", "nº test", "nº prueba", "acción", {"atributo": "valor"},
        "Resultado Esperado"]

*/ //-----------------//-----------------//-----------------//-----------------//

var funcionalidad_pruebas = [
    //Acción: ADD

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["funcionalidad", "id_funcionalidad", 1, 1, "ADD", {"id_funcionalidad" : ""},
        "id_funcionalidad_min_size_ko"],

    ["funcionalidad", "id_funcionalidad", 2, 2, "ADD", {"id_funcionalidad" : "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["funcionalidad", "id_funcionalidad", 3, 3, "ADD", {"id_funcionalidad" : "id"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 3, 4, "ADD", {"id_funcionalidad" : "1.5"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 3, 5, "ADD", {"id_funcionalidad" : "-83"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 3, 6, "ADD", {"id_funcionalidad" : "46*"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 3, 7, "ADD", {"id_funcionalidad" : "uno"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 4, 8, "ADD", {"id_funcionalidad" : "1234"},
        true],

    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//  
    
    ["funcionalidad", "nombre_funcionalidad", 5, 9, "ADD", {"nombre_funcionalidad" : "fun"},
        "nombre_funcionalidad_min_size_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 6, 10, "ADD", {"nombre_funcionalidad" : "a".repeat(49)},
        "nombre_funcionalidad_max_size_ko"],

    ["funcionalidad", "nombre_funcionalidad", 7, 11, "ADD", {"nombre_funcionalidad" : "function1"},
        "nombre_funcionalidad_format_ko"],

    ["funcionalidad", "nombre_funcionalidad", 7, 12, "ADD", {"nombre_funcionalidad" : "function*"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 7, 13, "ADD", {"nombre_funcionalidad" : "function_"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 7, 14, "ADD", {"nombre_funcionalidad" : "function name"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 8, 15, "ADD", {"nombre_funcionalidad" : "function"},
        true],

    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", 9, 16, "ADD", {"descrip_funcionalidad": "cut"},
        "descrip_funcionalidad_min_size_ko"],

    ["funcionalidad", "descrip_funcionalidad", 10, 17, "ADD", {"descrip_funcionalidad": "a".repeat(201)},
        "descrip_funcionalidad_max_size_ko"],

    ["funcionalidad", "descrip_funcionalidad", 11, 18, "ADD", {"descrip_funcionalidad": "descripcion*"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 11, 19, "ADD", {"descrip_funcionalidad": "decripcion_"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 11, 20, "ADD", {"descrip_funcionalidad": "descripcion&"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 12, 21, "ADD", {"descrip_funcionalidad": "descripcion"},
        true],

    //Acción: EDIT

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["funcionalidad", "id_funcionalidad", 13, 22, "EDIT", {"id_funcionalidad" : ""},
        "id_funcionalidad_min_size_ko"],

    ["funcionalidad", "id_funcionalidad", 14, 23, "EDIT", {"id_funcionalidad" : "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["funcionalidad", "id_funcionalidad", 15, 24, "EDIT", {"id_funcionalidad" : "id"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 15, 25, "EDIT", {"id_funcionalidad" : "1.5"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 15, 26, "EDIT", {"id_funcionalidad" : "-83"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 15, 27, "EDIT", {"id_funcionalidad" : "46*"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 15, 28, "EDIT", {"id_funcionalidad" : "uno"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 16, 29, "EDIT", {"id_funcionalidad" : "1234"},
        true],

    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//  
    
    ["funcionalidad", "nombre_funcionalidad", 17, 30, "EDIT", {"nombre_funcionalidad" : "fun"},
        "nombre_funcionalidad_min_size_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 18, 31, "EDIT", {"nombre_funcionalidad" : "a".repeat(49)},
        "nombre_funcionalidad_max_size_ko"],

    ["funcionalidad", "nombre_funcionalidad", 19, 32, "EDIT", {"nombre_funcionalidad" : "function1"},
        "nombre_funcionalidad_format_ko"],

    ["funcionalidad", "nombre_funcionalidad", 19, 33, "EDIT", {"nombre_funcionalidad" : "function*"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 19, 34, "EDIT", {"nombre_funcionalidad" : "function_"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 19, 35, "EDIT", {"nombre_funcionalidad" : "function name"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 20, 36, "EDIT", {"nombre_funcionalidad" : "function"},
        true],

    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", 21, 37, "EDIT", {"descrip_funcionalidad": "cut"},
        "descrip_funcionalidad_min_size_ko"],

    ["funcionalidad", "descrip_funcionalidad", 22, 38, "EDIT", {"descrip_funcionalidad": "a".repeat(201)},
        "descrip_funcionalidad_max_size_ko"],

    ["funcionalidad", "descrip_funcionalidad", 23, 39, "EDIT", {"descrip_funcionalidad": "descripcion*"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 23, 40, "EDIT", {"descrip_funcionalidad": "decripcion_"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 23, 41, "EDIT", {"descrip_funcionalidad": "descripcion&"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 24, 42, "EDIT", {"descrip_funcionalidad": "descripcion"},
        true],

    //Acción: SEARCH

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "id_funcionalidad", 25, 43, "SEARCH", {"id_funcionalidad" : "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["funcionalidad", "id_funcionalidad", 26, 44, "SEARCH", {"id_funcionalidad" : "id"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 26, 45, "SEARCH", {"id_funcionalidad" : "1.5"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 26, 46, "SEARCH", {"id_funcionalidad" : "-83"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 26, 47, "SEARCH", {"id_funcionalidad" : "46*"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 26, 48, "SEARCH", {"id_funcionalidad" : "uno"},
        "id_funcionalidad_format_ko"],

    ["funcionalidad", "id_funcionalidad", 27, 49, "SEARCH", {"id_funcionalidad" : "1234"},
        true],

    //-----------------//-----------------/nombre_funcionalidad/-----------------//-----------------//  
    
    ["funcionalidad", "nombre_funcionalidad", 28, 50, "SEARCH", {"nombre_funcionalidad" : "a".repeat(49)},
        "nombre_funcionalidad_max_size_ko"],

    ["funcionalidad", "nombre_funcionalidad", 29, 51, "SEARCH", {"nombre_funcionalidad" : "function1"},
        "nombre_funcionalidad_format_ko"],

    ["funcionalidad", "nombre_funcionalidad", 29, 52, "SEARCH", {"nombre_funcionalidad" : "function*"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 29, 53, "SEARCH", {"nombre_funcionalidad" : "function_"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 29, 54, "SEARCH", {"nombre_funcionalidad" : "function name"},
        "nombre_funcionalidad_format_ko"],
    
    ["funcionalidad", "nombre_funcionalidad", 30, 55, "SEARCH", {"nombre_funcionalidad" : "function"},
        true],

    //-----------------//-----------------/descrip_funcionalidad/-----------------//-----------------//

    ["funcionalidad", "descrip_funcionalidad", 31, 56, "SEARCH", {"descrip_funcionalidad": "a".repeat(201)},
        "descrip_funcionalidad_max_size_ko"],

    ["funcionalidad", "descrip_funcionalidad", 32, 57, "SEARCH", {"descrip_funcionalidad": "descripcion*"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 32, 58, "SEARCH", {"descrip_funcionalidad": "decripcion_"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 32, 59, "SEARCH", {"descrip_funcionalidad": "descripcion&"},
        "descrip_funcionalidad_format_ko"],

    ["funcionalidad", "descrip_funcionalidad", 33, 60, "SEARCH", {"descrip_funcionalidad": "descripcion"},
        true]

];