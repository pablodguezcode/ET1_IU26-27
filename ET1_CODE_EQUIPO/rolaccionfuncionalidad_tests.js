/* //-----------------//-----------------//-----------------//-----------------//
    ESTRUCTURA:

    ["entidad", "clase", "tipo", "nº test", "descripción_Test", "metodo", "acción",  
        "Resultado Esperado", "mensaje" ]

*/ //-----------------//-----------------//-----------------//-----------------//

var rolaccionfuncionalidad_def_tests = [

    //Acción: ADD

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 1, "Comprobar el tamaño mínimo",
        "min_size", "ADD", "id_funcionalidad_min_size_ko",
        "El tamaño de la funcionalidad es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 2, "Comprobar el tamaño máximo",
        "max_size", "ADD", "id_funcionalidad_max_size_ko",
        "El tamaño de la funcionalidad es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 3, "Comprobar si el formato es válido",
        "format", "ADD", "id_funcionalidad_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 4, "Estado de Éxito",
        "valid", "ADD", true, "Caso de Éxito"],
    
    //-----------------//-----------------/id_accion/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_accion", "select", 5, "Comprobar el tamaño mínimo",
        "min_size", "ADD", "id_accion_min_size_ko",
        "El tamaño de la accion es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_accion", "select", 6, "Comprobar el tamaño máximo",
        "max_size", "ADD", "id_accion_max_size_ko",
        "El tamaño de la accion es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_accion", "select", 7, "Comprobar si el formato es válido",
        "format", "ADD", "id_accion_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_accion", "select", 8, "Estado de Éxito",
        "valid", "ADD", true, "Caso de Éxito"],

    //-----------------//-----------------/id_rol/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_rol", "select", 9, "Comprobar el tamaño mínimo",
        "min_size", "ADD", "id_rol_min_size_ko",
        "El tamaño del rol es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_rol", "select", 10, "Comprobar el tamaño máximo",
        "max_size", "ADD", "id_rol_max_size_ko",
        "El tamaño del rol es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_rol", "select", 11, "Comprobar si el formato es válido",
        "format", "ADD", "id_rol_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_rol", "select", 12, "Estado de Éxito",
        "valid", "ADD", true, "Caso de Éxito"],

    //Acción: EDIT

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 13, "Comprobar el tamaño mínimo",
        "min_size", "EDIT", "id_funcionalidad_min_size_ko",
        "El tamaño de la funcionalidad es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 14, "Comprobar el tamaño máximo",
        "max_size", "EDIT", "id_funcionalidad_max_size_ko",
        "El tamaño de la funcionalidad es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 15, "Comprobar si el formato es válido",
        "format", "EDIT", "id_funcionalidad_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 16, "Estado de Éxito",
        "valid", "EDIT", true, "Caso de Éxito"],
    
    //-----------------//-----------------/id_accion/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_accion", "select", 17, "Comprobar el tamaño mínimo",
        "min_size", "EDIT", "id_accion_min_size_ko",
        "El tamaño de la accion es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_accion", "select", 18, "Comprobar el tamaño máximo",
        "max_size", "EDIT", "id_accion_max_size_ko",
        "El tamaño de la accion es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_accion", "select", 19, "Comprobar si el formato es válido",
        "format", "EDIT", "id_accion_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_accion", "select", 20, "Estado de Éxito",
        "valid", "EDIT", true, "Caso de Éxito"],

    //-----------------//-----------------/id_rol/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_rol", "select", 21, "Comprobar el tamaño mínimo",
        "min_size", "EDIT", "id_rol_min_size_ko",
        "El tamaño del rol es muy corto, intenta añadirle al menos 1 dígito"],

    ["rolaccionfuncionalidad", "id_rol", "select", 22, "Comprobar el tamaño máximo",
        "max_size", "EDIT", "id_rol_max_size_ko",
        "El tamaño del rol es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_rol", "select", 23, "Comprobar si el formato es válido",
        "format", "EDIT", "id_rol_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_rol", "select", 24, "Estado de Éxito",
        "valid", "EDIT", true, "Caso de Éxito"],

    //Acción: SEARCH

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 25, "Comprobar el tamaño máximo",
        "max_size", "SEARCH", "id_funcionalidad_max_size_ko",
        "El tamaño de la funcionalidad es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 26, "Comprobar si el formato es válido",
        "format", "SEARCH", "id_funcionalidad_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", "select", 27, "Estado de Éxito",
        "valid", "SEARCH", true, "Caso de Éxito"],
    
    //-----------------//-----------------/id_accion/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_accion", "select", 28, "Comprobar el tamaño máximo",
        "max_size", "SEARCH", "id_accion_max_size_ko",
        "El tamaño de la accion es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_accion", "select", 29, "Comprobar si el formato es válido",
        "format", "SEARCH", "id_accion_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_accion", "select", 30, "Estado de Éxito",
        "valid", "SEARCH", true, "Caso de Éxito"],

    //-----------------//-----------------/id_rol/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_rol", "select", 31, "Comprobar el tamaño máximo",
        "max_size", "SEARCH", "id_rol_max_size_ko",
        "El tamaño del rol es muy largo, solo estan permitidos hasta 11 dígitos"],

    ["rolaccionfuncionalidad", "id_rol", "select", 32, "Comprobar si el formato es válido",
        "format", "SEARCH", "id_rol_format_ko",
        "El formato seleccionado es inválido, solo está permitido el uso de dígitos"],
    
    ["rolaccionfuncionalidad", "id_rol", "select", 33, "Estado de Éxito",
        "valid", "SEARCH", true, "Caso de Éxito"]

];

/* //-----------------//-----------------//-----------------//-----------------//
   ESTRUCTURA:
 
   ["entidad", "clase", "nº test", "nº prueba", "acción", {"atributo": "valor"},
        "Resultado Esperado"]

*/ //-----------------//-----------------//-----------------//-----------------//

var rolaccionfuncionalidad_pruebas = [

    //Acción: ADD

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_funcionalidad", 1, 1, "ADD", {"id_funcionalidad": ""},
        "id_funcionalidad_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 2, 2, "ADD", {"id_funcionalidad": "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 3, 3, "ADD", {"id_funcionalidad": "id"},
        "id_funcionalidad_format_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 3, 4, "ADD", {"id_funcionalidad": "****"},
        "id_funcionalidad_format_ko"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 4, 5, "ADD", {"id_funcionalidad": "11"},
        true],

    //-----------------//-----------------/id_accion/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_accion", 5, 6, "ADD", {"id_accion": ""},
        "id_accion_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_accion", 6, 7, "ADD", {"id_accion": "111111111111"},
        "id_accion_max_size_ko"],

    ["rolaccionfuncionalidad", "id_accion", 7, 8, "ADD", {"id_accion": "id"},
        "id_accion_format_ko"],

    ["rolaccionfuncionalidad", "id_accion", 7, 9, "ADD", {"id_accion": "****"},
        "id_accion_format_ko"],
    
    ["rolaccionfuncionalidad", "id_accion", 8, 10, "ADD", {"id_accion": "11"},
        true],

    //-----------------//-----------------/id_rol/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_rol", 9, 11, "ADD", {"id_rol": ""},
        "id_rol_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_rol", 10, 12, "ADD", {"id_rol": "111111111111"},
        "id_rol_max_size_ko"],

    ["rolaccionfuncionalidad", "id_rol", 11, 13, "ADD", {"id_rol": "id"},
        "id_rol_format_ko"],

    ["rolaccionfuncionalidad", "id_rol", 11, 14, "ADD", {"id_rol": "****"},
        "id_rol_format_ko"],
    
    ["rolaccionfuncionalidad", "id_rol", 12, 15, "ADD", {"id_rol": "11"},
        true],

    //Acción: EDIT

    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_funcionalidad", 13, 16, "EDIT", {"id_funcionalidad": ""},
        "id_funcionalidad_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 14, 17, "EDIT", {"id_funcionalidad": "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 15, 18, "EDIT", {"id_funcionalidad": "id"},
        "id_funcionalidad_format_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 15, 19, "EDIT", {"id_funcionalidad": "****"},
        "id_funcionalidad_format_ko"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 16, 20, "EDIT", {"id_funcionalidad": "11"},
        true],

    //-----------------//-----------------/id_accion/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_accion", 17, 21, "EDIT", {"id_accion": ""},
        "id_accion_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_accion", 18, 22, "EDIT", {"id_accion": "111111111111"},
        "id_accion_max_size_ko"],

    ["rolaccionfuncionalidad", "id_accion", 19, 23, "EDIT", {"id_accion": "id"},
        "id_accion_format_ko"],

    ["rolaccionfuncionalidad", "id_accion", 19, 24, "EDIT", {"id_accion": "****"},
        "id_accion_format_ko"],
    
    ["rolaccionfuncionalidad", "id_accion", 20, 25, "EDIT", {"id_accion": "11"},
        true],

    //-----------------//-----------------/id_rol/-----------------//-----------------//

    ["rolaccionfuncionalidad", "id_rol", 21, 26, "EDIT", {"id_rol": ""},
        "id_rol_min_size_ko"],
    
    ["rolaccionfuncionalidad", "id_rol", 22, 27, "EDIT", {"id_rol": "111111111111"},
        "id_rol_max_size_ko"],

    ["rolaccionfuncionalidad", "id_rol", 23, 28, "EDIT", {"id_rol": "id"},
        "id_rol_format_ko"],

    ["rolaccionfuncionalidad", "id_rol", 23, 29, "EDIT", {"id_rol": "****"},
        "id_rol_format_ko"],
    
    ["rolaccionfuncionalidad", "id_rol", 24, 30, "EDIT", {"id_rol": "11"},
        true],

    //Acción: SEARCH
      
    //-----------------//-----------------/id_funcionalidad/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 25, 31, "SEARCH", {"id_funcionalidad": "111111111111"},
        "id_funcionalidad_max_size_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 26, 32, "SEARCH", {"id_funcionalidad": "id"},
        "id_funcionalidad_format_ko"],

    ["rolaccionfuncionalidad", "id_funcionalidad", 26, 33, "SEARCH", {"id_funcionalidad": "****"},
        "id_funcionalidad_format_ko"],
    
    ["rolaccionfuncionalidad", "id_funcionalidad", 27, 34, "SEARCH", {"id_funcionalidad": "11"},
        true],

    //-----------------//-----------------/id_accion/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_accion", 28, 35, "SEARCH", {"id_accion": "111111111111"},
        "id_accion_max_size_ko"],

    ["rolaccionfuncionalidad", "id_accion", 29, 36, "SEARCH", {"id_accion": "id"},
        "id_accion_format_ko"],

    ["rolaccionfuncionalidad", "id_accion", 29, 37, "SEARCH", {"id_accion": "****"},
        "id_accion_format_ko"],
    
    ["rolaccionfuncionalidad", "id_accion", 30, 38, "SEARCH", {"id_accion": "11"},
        true],

    //-----------------//-----------------/id_rol/-----------------//-----------------//
    
    ["rolaccionfuncionalidad", "id_rol", 31, 39, "SEARCH", {"id_rol": "111111111111"},
        "id_rol_max_size_ko"],

    ["rolaccionfuncionalidad", "id_rol", 32, 40, "SEARCH", {"id_rol": "id"},
        "id_rol_format_ko"],

    ["rolaccionfuncionalidad", "id_rol", 32, 41, "SEARCH", {"id_rol": "****"},
        "id_rol_format_ko"],
    
    ["rolaccionfuncionalidad", "id_rol", 33, 42, "SEARCH", {"id_rol": "11"},
        true]

];