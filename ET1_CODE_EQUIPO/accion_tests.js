/* -----------------------------------------------------------------------------
   ENTIDAD: accion
   -----------------------------------------------------------------------------
   ESTRUCTURA:
 
   ["entidad", "campo", "tipo", "nº test", "descripción_Test", "metodo", "acción",
       "Resultado Esperado", "mensaje"]
----------------------------------------------------------------------------- */
 
/* -----------------------------------------------------------------------------
   DECISIONES DE DISEÑO Y ACLARACIONES (entidad accion)
   -----------------------------------------------------------------------------
   Requisitos del enunciado: id_accion numérico (min 1, max 11); nombre_accion
   alfabético con ñ (min 5, max 48); descrip_accion alfabético con ñ, espacio y
   signos de puntuación (min 5, max 200).
 
   Criterios comunes (decisiones propias, el enunciado no los especifica):
   1. ñ y acentos: se admiten en todos los campos de texto de esta entidad,
      salvo que el enunciado diga expresamente "sin" (aquí no lo dice en ninguno).
      Motivo: comodidad del usuario (Interfaces de Usuario); nombres y
      descripciones se escriben en español natural.
   2. Conjunto de caracteres "alfabético" que aceptados en caso de no indicarse lo
      contrario: A-Z a-z, ñ Ñ, áéíóúÁÉÍÓÚ y üÜ.
   3. Espacios: NO se admiten en los nombres (el enunciado solo los lista en las
      descripciones). Dígitos: no se admiten en ningún campo de texto.
   4. Puntuación admitida en las descripciones (puntuación española):
      . , ; : ¿ ? ¡ ! ( ) [ ] - " ' …
      No se admiten otros símbolos (% & # @ $ < >): las pruebas format_ko de las
      descripciones los usan.
   5. Cada prueba format_ko incumple UN solo criterio (un dígito, un símbolo o un
      espacio), para que el resultado esperado no tenga dos causas posibles.
   6. Tests y pruebas de id_* en ADD: se mantienen aunque el id sea autoincremental
      porque la entrega los exige.
   7. Los valores "a".repeat(n) comprueban los límites exactos de tamaño.
----------------------------------------------------------------------------- */
 
var accion_def_tests = [
 
//Acción: ADD
 
    ["accion", "id_accion", "input", 1, "Comprobar tamaño mínimo", "min_size", "ADD", "id_accion_min_size_ko", "El identificador de la acción es obligatorio, introduzca por lo menos 1 dígito"],
 
    ["accion", "id_accion", "input", 2, "Comprobar tamaño máximo", "max_size", "ADD", "id_accion_max_size_ko", "El identificador de la acción es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["accion", "id_accion", "input", 3, "Comprobar si el formato del identificador es correcto", "format", "ADD", "id_accion_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["accion", "id_accion", "input", 4, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
    ["accion", "nombre_accion", "input", 5, "Comprobar tamaño mínimo", "min_size", "ADD", "nombre_accion_min_size_ko", "El nombre de la acción es corto, introduzca por lo menos 5 caracteres"],
 
    ["accion", "nombre_accion", "input", 6, "Comprobar tamaño máximo", "max_size", "ADD", "nombre_accion_max_size_ko", "El nombre de la acción es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["accion", "nombre_accion", "input", 7, "Comprobar si el formato del nombre de la acción es correcto", "format", "ADD", "nombre_accion_format_ko", "El formato del nombre de la acción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["accion", "nombre_accion", "input", 8, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
    ["accion", "descrip_accion", "textarea", 9, "Comprobar tamaño mínimo", "min_size", "ADD", "descrip_accion_min_size_ko", "La descripción de la acción es corta, introduzca por lo menos 5 caracteres"],
 
    ["accion", "descrip_accion", "textarea", 10, "Comprobar tamaño máximo", "max_size", "ADD", "descrip_accion_max_size_ko", "La descripción de la acción es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["accion", "descrip_accion", "textarea", 11, "Comprobar si el formato de la descripción es correcto", "format", "ADD", "descrip_accion_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["accion", "descrip_accion", "textarea", 12, "Valor correcto", "valid", "ADD", true, "Éxito"],
 
 
 
//Acción: EDIT
 
    ["accion", "id_accion", "input", 13, "Comprobar tamaño mínimo", "min_size", "EDIT", "id_accion_min_size_ko", "El identificador de la acción es obligatorio, introduzca por lo menos 1 dígito"],
 
    ["accion", "id_accion", "input", 14, "Comprobar tamaño máximo", "max_size", "EDIT", "id_accion_max_size_ko", "El identificador de la acción es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["accion", "id_accion", "input", 15, "Comprobar si el formato del identificador es correcto", "format", "EDIT", "id_accion_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["accion", "id_accion", "input", 16, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
    ["accion", "nombre_accion", "input", 17, "Comprobar tamaño mínimo", "min_size", "EDIT", "nombre_accion_min_size_ko", "El nombre de la acción es corto, introduzca por lo menos 5 caracteres"],
 
    ["accion", "nombre_accion", "input", 18, "Comprobar tamaño máximo", "max_size", "EDIT", "nombre_accion_max_size_ko", "El nombre de la acción es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["accion", "nombre_accion", "input", 19, "Comprobar si el formato del nombre de la acción es correcto", "format", "EDIT", "nombre_accion_format_ko", "El formato del nombre de la acción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["accion", "nombre_accion", "input", 20, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
    ["accion", "descrip_accion", "textarea", 21, "Comprobar tamaño mínimo", "min_size", "EDIT", "descrip_accion_min_size_ko", "La descripción de la acción es corta, introduzca por lo menos 5 caracteres"],
 
    ["accion", "descrip_accion", "textarea", 22, "Comprobar tamaño máximo", "max_size", "EDIT", "descrip_accion_max_size_ko", "La descripción de la acción es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["accion", "descrip_accion", "textarea", 23, "Comprobar si el formato de la descripción es correcto", "format", "EDIT", "descrip_accion_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["accion", "descrip_accion", "textarea", 24, "Valor correcto", "valid", "EDIT", true, "Éxito"],
 
 
 
//Acción: SEARCH
 
    ["accion", "id_accion", "input", 25, "Comprobar tamaño máximo", "max_size", "SEARCH", "id_accion_max_size_ko", "El identificador de la acción es demasiado largo, introduzca hasta 11 dígitos"],
 
    ["accion", "id_accion", "input", 26, "Comprobar si el formato del identificador es correcto", "format", "SEARCH", "id_accion_format_ko", "El formato del identificador es incorrecto. Solo se admiten dígitos numéricos, sin signos ni decimales"],
 
    ["accion", "id_accion", "input", 27, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
    ["accion", "nombre_accion", "input", 28, "Comprobar tamaño máximo", "max_size", "SEARCH", "nombre_accion_max_size_ko", "El nombre de la acción es demasiado largo, introduzca hasta 48 caracteres"],
 
    ["accion", "nombre_accion", "input", 29, "Comprobar si el formato del nombre de la acción es correcto", "format", "SEARCH", "nombre_accion_format_ko", "El formato del nombre de la acción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), sin espacios, números ni signos"],
 
    ["accion", "nombre_accion", "input", 30, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
    ["accion", "descrip_accion", "textarea", 31, "Comprobar tamaño máximo", "max_size", "SEARCH", "descrip_accion_max_size_ko", "La descripción de la acción es demasiado larga, introduzca hasta 200 caracteres"],
 
    ["accion", "descrip_accion", "textarea", 32, "Comprobar si el formato de la descripción es correcto", "format", "SEARCH", "descrip_accion_format_ko", "El formato de la descripción es incorrecto. Los caracteres admitidos son el alfabeto (con la ñ y acentos incluidos), espacios y signos de puntuación, sin números"],
 
    ["accion", "descrip_accion", "textarea", 33, "Valor correcto", "valid", "SEARCH", true, "Éxito"],
 
 
];
 
 
/* -----------------------------------------------------------------------------
   ESTRUCTURA:
 
   ["entidad", "campo", "nº test", "nº prueba", "acción", {"atributo": "valor"},
        "Resultado Esperado"]
----------------------------------------------------------------------------- */
 
var accion_pruebas = [
 
//Acción: ADD
 
    ["accion", "id_accion", 1, 1, "ADD", {"id_accion": ""}, "id_accion_min_size_ko"],
 
    ["accion", "id_accion", 2, 2, "ADD", {"id_accion": "123456789012"}, "id_accion_max_size_ko"],
 
    ["accion", "id_accion", 3, 3, "ADD", {"id_accion": "1a"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 3, 4, "ADD", {"id_accion": "-3"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 3, 5, "ADD", {"id_accion": "1.5"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 3, 6, "ADD", {"id_accion": "1 2"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 4, 7, "ADD", {"id_accion": "7"}, true],
 
    ["accion", "id_accion", 4, 8, "ADD", {"id_accion": "12345678901"}, true],
 
    ["accion", "nombre_accion", 5, 9, "ADD", {"nombre_accion": "alta"}, "nombre_accion_min_size_ko"],
 
    ["accion", "nombre_accion", 6, 10, "ADD", {"nombre_accion": "a".repeat(49)}, "nombre_accion_max_size_ko"],
 
    ["accion", "nombre_accion", 7, 11, "ADD", {"nombre_accion": "borrar1"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 7, 12, "ADD", {"nombre_accion": "borrar_"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 7, 13, "ADD", {"nombre_accion": "borrar registro"}, "nombre_accion_format_ko"], // criterio propio: espacios no admitidos en nombres
 
    ["accion", "nombre_accion", 8, 14, "ADD", {"nombre_accion": "añadir"}, true],
 
    ["accion", "nombre_accion", 8, 15, "ADD", {"nombre_accion": "creación"}, true], // criterio propio: acentos admitidos
 
    ["accion", "nombre_accion", 8, 16, "ADD", {"nombre_accion": "altas"}, true],
 
    ["accion", "nombre_accion", 8, 17, "ADD", {"nombre_accion": "a".repeat(48)}, true],
 
    ["accion", "descrip_accion", 9, 18, "ADD", {"descrip_accion": "Alta"}, "descrip_accion_min_size_ko"],
 
    ["accion", "descrip_accion", 10, 19, "ADD", {"descrip_accion": "a".repeat(201)}, "descrip_accion_max_size_ko"],
 
    ["accion", "descrip_accion", 11, 20, "ADD", {"descrip_accion": "Acción de alta en 2 pasos"}, "descrip_accion_format_ko"],
 
    ["accion", "descrip_accion", 11, 21, "ADD", {"descrip_accion": "Acción de alta segura %"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 11, 22, "ADD", {"descrip_accion": "Acción de alta $interna"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 12, 23, "ADD", {"descrip_accion": "Añade un nuevo registro en la base de datos, comprobando antes que no exista otro igual."}, true],
 
    ["accion", "descrip_accion", 12, 24, "ADD", {"descrip_accion": "Altas"}, true],
 
    ["accion", "descrip_accion", 12, 25, "ADD", {"descrip_accion": "Acción de alta: ¿añade un registro? ¡Sí!"}, true], // puntuación española (¿ ? ¡ !)
 
    ["accion", "descrip_accion", 12, 26, "ADD", {"descrip_accion": "a".repeat(200)}, true],
 
 
 
//Acción: EDIT
 
    ["accion", "id_accion", 13, 27, "EDIT", {"id_accion": ""}, "id_accion_min_size_ko"],
 
    ["accion", "id_accion", 14, 28, "EDIT", {"id_accion": "123456789012"}, "id_accion_max_size_ko"],
 
    ["accion", "id_accion", 15, 29, "EDIT", {"id_accion": "1a"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 15, 30, "EDIT", {"id_accion": "-3"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 15, 31, "EDIT", {"id_accion": "1.5"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 15, 32, "EDIT", {"id_accion": "1 2"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 16, 33, "EDIT", {"id_accion": "7"}, true],
 
    ["accion", "id_accion", 16, 34, "EDIT", {"id_accion": "12345678901"}, true],
 
    ["accion", "nombre_accion", 17, 35, "EDIT", {"nombre_accion": "leer"}, "nombre_accion_min_size_ko"],
 
    ["accion", "nombre_accion", 18, 36, "EDIT", {"nombre_accion": "a".repeat(49)}, "nombre_accion_max_size_ko"],
 
    ["accion", "nombre_accion", 19, 37, "EDIT", {"nombre_accion": "editar2"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 19, 38, "EDIT", {"nombre_accion": "editar-registro"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 19, 39, "EDIT", {"nombre_accion": "edición2"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 20, 40, "EDIT", {"nombre_accion": "modificar"}, true],
 
    ["accion", "nombre_accion", 20, 41, "EDIT", {"nombre_accion": "edición"}, true], // criterio propio: acentos admitidos
 
    ["accion", "nombre_accion", 20, 42, "EDIT", {"nombre_accion": "altas"}, true],
 
    ["accion", "nombre_accion", 20, 43, "EDIT", {"nombre_accion": "señalar"}, true],
 
    ["accion", "nombre_accion", 20, 44, "EDIT", {"nombre_accion": "a".repeat(48)}, true],
 
    ["accion", "descrip_accion", 21, 45, "EDIT", {"descrip_accion": "Edit"}, "descrip_accion_min_size_ko"],
 
    ["accion", "descrip_accion", 22, 46, "EDIT", {"descrip_accion": "a".repeat(201)}, "descrip_accion_max_size_ko"],
 
    ["accion", "descrip_accion", 23, 47, "EDIT", {"descrip_accion": "Modifica hasta 3 campos"}, "descrip_accion_format_ko"],
 
    ["accion", "descrip_accion", 23, 48, "EDIT", {"descrip_accion": "Modifica los campos & guarda"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 23, 49, "EDIT", {"descrip_accion": "Modifica la acción <total>"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 24, 50, "EDIT", {"descrip_accion": "Modifica los datos de un registro existente; requiere permisos de edición."}, true],
 
    ["accion", "descrip_accion", 24, 51, "EDIT", {"descrip_accion": "Edita"}, true],
 
    ["accion", "descrip_accion", 24, 52, "EDIT", {"descrip_accion": "Edita el diseño de un registro"}, true],
 
    ["accion", "descrip_accion", 24, 53, "EDIT", {"descrip_accion": "a".repeat(200)}, true],
 
 
 
//Acción: SEARCH
 
    ["accion", "id_accion", 25, 54, "SEARCH", {"id_accion": "123456789012"}, "id_accion_max_size_ko"],
 
    ["accion", "id_accion", 26, 55, "SEARCH", {"id_accion": "3b"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 26, 56, "SEARCH", {"id_accion": "+3"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 26, 57, "SEARCH", {"id_accion": "1 2"}, "id_accion_format_ko"],
 
    ["accion", "id_accion", 27, 58, "SEARCH", {"id_accion": "12"}, true],
 
    ["accion", "id_accion", 27, 59, "SEARCH", {"id_accion": ""}, true],
 
    ["accion", "id_accion", 27, 60, "SEARCH", {"id_accion": "12345678901"}, true],
 
    ["accion", "nombre_accion", 28, 61, "SEARCH", {"nombre_accion": "a".repeat(49)}, "nombre_accion_max_size_ko"],
 
    ["accion", "nombre_accion", 29, 62, "SEARCH", {"nombre_accion": "buscar3"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 29, 63, "SEARCH", {"nombre_accion": "buscar."}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 29, 64, "SEARCH", {"nombre_accion": "acción1"}, "nombre_accion_format_ko"],
 
    ["accion", "nombre_accion", 30, 65, "SEARCH", {"nombre_accion": "consultar"}, true],
 
    ["accion", "nombre_accion", 30, 66, "SEARCH", {"nombre_accion": "alt"}, true],
 
    ["accion", "nombre_accion", 30, 67, "SEARCH", {"nombre_accion": ""}, true],
 
    ["accion", "nombre_accion", 30, 68, "SEARCH", {"nombre_accion": "señalar"}, true],
 
    ["accion", "nombre_accion", 30, 69, "SEARCH", {"nombre_accion": "acción"}, true], // criterio propio: acentos admitidos
 
    ["accion", "nombre_accion", 30, 70, "SEARCH", {"nombre_accion": "a".repeat(48)}, true],
 
    ["accion", "descrip_accion", 31, 71, "SEARCH", {"descrip_accion": "a".repeat(201)}, "descrip_accion_max_size_ko"],
 
    ["accion", "descrip_accion", 32, 72, "SEARCH", {"descrip_accion": "Busca en 3 tablas"}, "descrip_accion_format_ko"],
 
    ["accion", "descrip_accion", 32, 73, "SEARCH", {"descrip_accion": "Busca con coincidencia %"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 32, 74, "SEARCH", {"descrip_accion": "Búsqueda $total"}, "descrip_accion_format_ko"], // símbolo fuera de la puntuación española admitida
 
    ["accion", "descrip_accion", 33, 75, "SEARCH", {"descrip_accion": "Busca registros por nombre o identificador."}, true],
 
    ["accion", "descrip_accion", 33, 76, "SEARCH", {"descrip_accion": "Busca reg"}, true],
 
    ["accion", "descrip_accion", 33, 77, "SEARCH", {"descrip_accion": "Búsqueda de registros"}, true],
 
    ["accion", "descrip_accion", 33, 78, "SEARCH", {"descrip_accion": "Busca el diseño"}, true],
 
    ["accion", "descrip_accion", 33, 79, "SEARCH", {"descrip_accion": ""}, true],
 
];