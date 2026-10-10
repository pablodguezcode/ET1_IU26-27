/*ESTRUCTURA:

    ["entidad", "campo", "tipo", "nº test", "descripción_Test", "metodo", "acción",  
        "Resultado Esperado", "mensaje"],

*/

var persona_def_tests = [

    //Campo: dni

        //Acción: ADD

            ["persona", "dni", "input", 1, "Validar tamaño mínimo (9 caracteres) del dni en ADD", "min_size", "ADD",
        "dni_min_size_ko", "El DNI es demasiado corto: debe tener 9 caracteres"],

            ["persona", "dni", "input", 2, "Validar tamaño máximo (9 caracteres) del dni en ADD", "max_size", "ADD",
        "dni_max_size_ko", "El DNI es demasiado largo: debe tener 9 caracteres"],

            ["persona", "dni", "input", 3, "Validar formato (8 dígitos y una letra) del dni en ADD", "format", "ADD",
        "dni_format_ko", "El formato del DNI no es válido: deben ser 8 dígitos seguidos de una letra mayúscula"],

            ["persona", "dni", "input", 4, "Validar que la letra del dni es correcta en ADD ", "personalized", "ADD",
        "dni_personalized_ko", "La letra del DNI no es correcta"],

            ["persona", "dni", "input", 5, "Validar dni correcto en ADD", "valid", "ADD",
        true, "DNI correcto"],

        //Acción: EDIT

            ["persona", "dni", "input", 6, "Validar tamaño mínimo (9 caracteres) del dni en EDIT", "min_size", "EDIT",
        "dni_min_size_ko", "El DNI es demasiado corto: debe tener 9 caracteres"],

            ["persona", "dni", "input", 7, "Validar tamaño máximo (9 caracteres) del dni en EDIT", "max_size", "EDIT",
        "dni_max_size_ko", "El DNI es demasiado largo: debe tener 9 caracteres"],

            ["persona", "dni", "input", 8, "Validar formato (8 dígitos y una letra) del dni en EDIT", "format", "EDIT",
        "dni_format_ko", "El formato del DNI no es válido: deben ser 8 dígitos seguidos de una letra mayúscula"],

            ["persona", "dni", "input", 9, "Validar que la letra del dni es correcta en EDIT ", "personalized", "EDIT",
        "dni_personalized_ko", "La letra del DNI no es correcta"],

            ["persona", "dni", "input", 10, "Validar dni correcto en EDIT", "valid", "EDIT",
        true, "DNI correcto"],

        //Acción: SEARCH
            
            ["persona", "dni", "input", 11, "Validar tamaño máximo (9 caracteres) del dni en SEARCH", "max_size", "SEARCH",
        "dni_max_size_ko", "El DNI es demasiado largo: no puede superar los 9 caracteres"],

            ["persona", "dni", "input", 12, "Validar formato (solo dígitos y letras) del dni en SEARCH", "format", "SEARCH",
        "dni_format_ko", "El formato del DNI no es válido: solo se permiten dígitos y letras"],

            ["persona", "dni", "input", 13, "Validar dni correcto en SEARCH", "valid", "SEARCH",
        true, "DNI correcto"],

    //Campo: nombre_persona

        //Acción: ADD

            ["persona", "nombre_persona", "input", 14, "Validar tamaño mínimo (2 caracteres) del nombre en ADD", "min_size", "ADD",
        "nombre_persona_min_size_ko", "El nombre es demasiado corto: debe tener al menos 2 caracteres"],

            ["persona", "nombre_persona", "input", 15, "Validar tamaño máximo (45 caracteres) del nombre en ADD", "max_size", "ADD",
        "nombre_persona_max_size_ko", "El nombre es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "nombre_persona", "input", 16, "Validar formato del nombre en ADD", "format", "ADD",
        "nombre_persona_format_ko", "El nombre contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "nombre_persona", "input", 17, "Validar nombre correcto en ADD", "valid", "ADD",
        true, "Nombre correcto"],

        //Acción: EDIT

            ["persona", "nombre_persona", "input", 18, "Validar tamaño mínimo (2 caracteres) del nombre en EDIT", "min_size", "EDIT",
        "nombre_persona_min_size_ko", "El nombre es demasiado corto: debe tener al menos 2 caracteres"],

            ["persona", "nombre_persona", "input", 19, "Validar tamaño máximo (45 caracteres) del nombre en EDIT", "max_size", "EDIT",
        "nombre_persona_max_size_ko", "El nombre es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "nombre_persona", "input", 20, "Validar formato del nombre en EDIT", "format", "EDIT",
        "nombre_persona_format_ko", "El nombre contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "nombre_persona", "input", 21, "Validar nombre correcto en EDIT", "valid", "EDIT",
        true, "Nombre correcto"],
            
        //Acción: SEARCH

            ["persona", "nombre_persona", "input", 22, "Validar tamaño máximo (45 caracteres) del nombre en SEARCH", "max_size", "SEARCH",
        "nombre_persona_max_size_ko", "El nombre es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "nombre_persona", "input", 23, "Validar formato del nombre en SEARCH", "format", "SEARCH",
        "nombre_persona_format_ko", "El nombre contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "nombre_persona", "input", 24, "Validar nombre correcto en SEARCH", "valid", "SEARCH",
        true, "Nombre correcto"],

    //Campo: apellidos_persona

        //Acción: ADD

            ["persona", "apellidos_persona", "input", 25, "Validar tamaño mínimo (3 caracteres) de los apellidos en ADD", "min_size", "ADD",
        "apellidos_persona_min_size_ko", "Los apellidos son demasiado cortos: deben tener al menos 3 caracteres"],

            ["persona", "apellidos_persona", "input", 26, "Validar tamaño máximo (100 caracteres) de los apellidos en ADD", "max_size", "ADD",
        "apellidos_persona_max_size_ko", "Los apellidos son demasiado largos: no pueden superar los 100 caracteres"],

            ["persona", "apellidos_persona", "input", 27, "Validar formato de los apellidos en ADD", "format", "ADD",
        "apellidos_persona_format_ko", "Los apellidos contienen caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "apellidos_persona", "input", 28, "Validar apellidos correctos en ADD", "valid", "ADD",
        true, "Apellidos correctos"],

        //Acción: EDIT

            ["persona", "apellidos_persona", "input", 29, "Validar tamaño mínimo (3 caracteres) de los apellidos en EDIT", "min_size", "EDIT",
        "apellidos_persona_min_size_ko", "Los apellidos son demasiado cortos: deben tener al menos 3 caracteres"],

            ["persona", "apellidos_persona", "input", 30, "Validar tamaño máximo (100 caracteres) de los apellidos en EDIT", "max_size", "EDIT",
        "apellidos_persona_max_size_ko", "Los apellidos son demasiado largos: no pueden superar los 100 caracteres"],

            ["persona", "apellidos_persona", "input", 31, "Validar formato de los apellidos en EDIT", "format", "EDIT",
        "apellidos_persona_format_ko", "Los apellidos contienen caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "apellidos_persona", "input", 32, "Validar apellidos correctos en EDIT", "valid", "EDIT",
        true, "Apellidos correctos"],

        //Acción: SEARCH

            ["persona", "apellidos_persona", "input", 33, "Validar tamaño máximo (100 caracteres) de los apellidos en SEARCH", "max_size", "SEARCH",
        "apellidos_persona_max_size_ko", "Los apellidos son demasiado largos: no pueden superar los 100 caracteres"],

            ["persona", "apellidos_persona", "input", 34, "Validar formato de los apellidos en SEARCH", "format", "SEARCH",
        "apellidos_persona_format_ko", "Los apellidos contienen caracteres no válidos: solo se permiten letras (incluida ñ y acentos), puntos, guiones y espacios"],

            ["persona", "apellidos_persona", "input", 35, "Validar apellidos correctos en SEARCH", "valid", "SEARCH",
        true, "Apellidos correctos"],

    //Campo: fechaNacimiento_persona

        //Acción: ADD

            ["persona", "fechaNacimiento_persona", "input", 36, "Validar tamaño mínimo (8 caracteres) de la fecha de nacimiento en ADD", "min_size", "ADD",
        "fechaNacimiento_persona_min_size_ko", "La fecha de nacimiento es demasiado corta: debe tener 8 caracteres (dd/mm/aaaa) o (d/m/aaaa)"],

            ["persona", "fechaNacimiento_persona", "input", 37, "Validar tamaño máximo (10 caracteres) de la fecha de nacimiento en ADD", "max_size", "ADD",
        "fechaNacimiento_persona_max_size_ko", "La fecha de nacimiento es demasiado larga: debe tener 10 caracteres (dd/mm/aaaa)"],

            ["persona", "fechaNacimiento_persona", "input", 38, "Validar formato dd/mm/aaaa de la fecha de nacimiento en ADD", "format", "ADD",
        "fechaNacimiento_persona_format_ko", "El formato de la fecha de nacimiento no es válido: debe ser dd/mm/aaaa"],

            ["persona", "fechaNacimiento_persona", "input", 39, "Validar que la fecha de nacimiento existe en el calendario y no es posterior a la fecha actual en ADD", "personalized", "ADD",
        "fechaNacimiento_persona_personalized_ko", "La fecha de nacimiento no existe en el calendario"],

            ["persona", "fechaNacimiento_persona", "input", 40, "Validar fecha de nacimiento correcta en ADD", "valid", "ADD",
        true, "Fecha de nacimiento correcta"],

        //Acción: EDIT

            ["persona", "fechaNacimiento_persona", "input", 41, "Validar tamaño mínimo (8 caracteres) de la fecha de nacimiento en EDIT", "min_size", "EDIT",
        "fechaNacimiento_persona_min_size_ko", "La fecha de nacimiento es demasiado corta: debe tener 8 caracteres (dd/mm/aaaa) o (d/m/aaaa)"],

            ["persona", "fechaNacimiento_persona", "input", 42, "Validar tamaño máximo (10 caracteres) de la fecha de nacimiento en EDIT", "max_size", "EDIT",
        "fechaNacimiento_persona_max_size_ko", "La fecha de nacimiento es demasiado larga: debe tener 10 caracteres (dd/mm/aaaa)"],

            ["persona", "fechaNacimiento_persona", "input", 43, "Validar formato dd/mm/aaaa de la fecha de nacimiento en EDIT", "format", "EDIT",
        "fechaNacimiento_persona_format_ko", "El formato de la fecha de nacimiento no es válido: debe ser dd/mm/aaaa"],

            ["persona", "fechaNacimiento_persona", "input", 44, "Validar que la fecha de nacimiento existe en el calendario y no es posterior a la fecha actual en EDIT", "personalized", "EDIT",
        "fechaNacimiento_persona_personalized_ko", "La fecha de nacimiento no existe en el calendario"],

            ["persona", "fechaNacimiento_persona", "input", 45, "Validar fecha de nacimiento correcta en EDIT", "valid", "EDIT",
        true, "Fecha de nacimiento correcta"],
            
        //Acción: SEARCH

            ["persona", "fechaNacimiento_persona", "input", 46, "Validar tamaño máximo (10 caracteres) de la fecha de nacimiento en SEARCH", "max_size", "SEARCH",
        "fechaNacimiento_persona_max_size_ko", "La fecha de nacimiento es demasiado larga: no puede superar los 10 caracteres"],

            ["persona", "fechaNacimiento_persona", "input", 47, "Validar formato (solo dígitos y /) de la fecha de nacimiento en SEARCH", "format", "SEARCH",
        "fechaNacimiento_persona_format_ko", "El formato de la fecha de nacimiento no es válido: solo se permiten dígitos y /"],

            ["persona", "fechaNacimiento_persona", "input", 48, "Validar fecha de nacimiento correcta en SEARCH", "valid", "SEARCH",
        true, "Fecha de nacimiento correcta"],

    //Campo: direccion_persona

        //Acción: ADD

            ["persona", "direccion_persona", "input", 49, "Validar tamaño mínimo (10 caracteres) de la dirección en ADD", "min_size", "ADD",
        "direccion_persona_min_size_ko", "La dirección es demasiado corta: debe tener al menos 10 caracteres"],

            ["persona", "direccion_persona", "input", 50, "Validar tamaño máximo (200 caracteres) de la dirección en ADD", "max_size", "ADD",
        "direccion_persona_max_size_ko", "La dirección es demasiado larga: no puede superar los 200 caracteres"],

            ["persona", "direccion_persona", "input", 51, "Validar formato de la dirección en ADD", "format", "ADD",
        "direccion_persona_format_ko", "La dirección contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), números, puntos, guiones, punto y coma, espacios y /"],

            ["persona", "direccion_persona", "input", 52, "Validar dirección correcta en ADD", "valid", "ADD",
        true, "Dirección correcta"],

        //Acción: EDIT

            ["persona", "direccion_persona", "input", 53, "Validar tamaño mínimo (10 caracteres) de la dirección en EDIT", "min_size", "EDIT",
        "direccion_persona_min_size_ko", "La dirección es demasiado corta: debe tener al menos 10 caracteres"],

            ["persona", "direccion_persona", "input", 54, "Validar tamaño máximo (200 caracteres) de la dirección en EDIT", "max_size", "EDIT",
        "direccion_persona_max_size_ko", "La dirección es demasiado larga: no puede superar los 200 caracteres"],

            ["persona", "direccion_persona", "input", 55, "Validar formato de la dirección en EDIT", "format", "EDIT",
        "direccion_persona_format_ko", "La dirección contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), números, puntos, guiones, punto y coma, espacios y /"],

            ["persona", "direccion_persona", "input", 56, "Validar dirección correcta en EDIT", "valid", "EDIT",
        true, "Dirección correcta"],

        //Acción: SEARCH

            ["persona", "direccion_persona", "input", 57, "Validar tamaño máximo (200 caracteres) de la dirección en SEARCH", "max_size", "SEARCH",
        "direccion_persona_max_size_ko", "La dirección es demasiado larga: no puede superar los 200 caracteres"],

            ["persona", "direccion_persona", "input", 58, "Validar formato de la dirección en SEARCH", "format", "SEARCH",
        "direccion_persona_format_ko", "La dirección contiene caracteres no válidos: solo se permiten letras (incluida ñ y acentos), números, puntos, guiones, punto y coma, espacios y /"],

            ["persona", "direccion_persona", "input", 59, "Validar dirección correcta en SEARCH", "valid", "SEARCH",
        true, "Dirección correcta"],

    //Campo: telefono_persona

        //Acción: ADD

            ["persona", "telefono_persona", "input", 60, "Validar tamaño mínimo (9 caracteres) del teléfono en ADD", "min_size", "ADD",
        "telefono_persona_min_size_ko", "El teléfono es demasiado corto: debe tener 9 dígitos"],

            ["persona", "telefono_persona", "input", 61, "Validar tamaño máximo (9 caracteres) del teléfono en ADD", "max_size", "ADD",
        "telefono_persona_max_size_ko", "El teléfono es demasiado largo: debe tener 9 dígitos"],

            ["persona", "telefono_persona", "input", 62, "Validar formato (9 dígitos numéricos) del teléfono en ADD", "format", "ADD",
        "telefono_persona_format_ko", "El formato del teléfono no es válido: solo se permiten 9 dígitos numéricos"],

            ["persona", "telefono_persona", "input", 63, "Validar que el teléfono es español (empieza por 6, 7, 8 o 9) en ADD", "personalized", "ADD",
        "telefono_persona_personalized_ko", "El teléfono no es un número español válido: debe empezar por 6, 7, 8 o 9"],

            ["persona", "telefono_persona", "input", 64, "Validar teléfono correcto en ADD", "valid", "ADD",
        true, "Teléfono correcto"],

        //Acción: EDIT

            ["persona", "telefono_persona", "input", 65, "Validar tamaño mínimo (9 caracteres) del teléfono en EDIT", "min_size", "EDIT",
        "telefono_persona_min_size_ko", "El teléfono es demasiado corto: debe tener 9 dígitos"],

            ["persona", "telefono_persona", "input", 66, "Validar tamaño máximo (9 caracteres) del teléfono en EDIT", "max_size", "EDIT",
        "telefono_persona_max_size_ko", "El teléfono es demasiado largo: debe tener 9 dígitos"],

            ["persona", "telefono_persona", "input", 67, "Validar formato (9 dígitos numéricos) del teléfono en EDIT", "format", "EDIT",
        "telefono_persona_format_ko", "El formato del teléfono no es válido: solo se permiten 9 dígitos numéricos"],

            ["persona", "telefono_persona", "input", 68, "Validar que el teléfono es español (empieza por 6, 7, 8 o 9) en EDIT", "personalized", "EDIT",
        "telefono_persona_personalized_ko", "El teléfono no es un número español válido: debe empezar por 6, 7, 8 o 9"],

            ["persona", "telefono_persona", "input", 69, "Validar teléfono correcto en EDIT", "valid", "EDIT",
        true, "Teléfono correcto"],
            
        //Acción: SEARCH

            ["persona", "telefono_persona", "input", 70, "Validar tamaño máximo (9 caracteres) del teléfono en SEARCH", "max_size", "SEARCH",
        "telefono_persona_max_size_ko", "El teléfono es demasiado largo: no puede superar los 9 dígitos"],

            ["persona", "telefono_persona", "input", 71, "Validar formato (solo dígitos) del teléfono en SEARCH", "format", "SEARCH",
        "telefono_persona_format_ko", "El formato del teléfono no es válido: solo se permiten dígitos numéricos"],

            ["persona", "telefono_persona", "input", 72, "Validar teléfono correcto en SEARCH", "valid", "SEARCH",
        true, "Teléfono correcto"],

    //Campo: email_persona

        //Acción: ADD

            ["persona", "email_persona", "input", 73, "Validar tamaño máximo (45 caracteres) del email en ADD", "max_size", "ADD",
        "email_persona_max_size_ko", "El email es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "email_persona", "input", 74, "Validar formato del email en ADD", "format", "ADD",
        "email_persona_format_ko", "El formato del email no es válido: debe ser del tipo usuario@dominio.ext"],

            ["persona", "email_persona", "input", 75, "Validar email correcto en ADD", "valid", "ADD",
        true, "Email correcto"],

        //Acción: EDIT

            ["persona", "email_persona", "input", 76, "Validar tamaño máximo (45 caracteres) del email en EDIT", "max_size", "EDIT",
        "email_persona_max_size_ko", "El email es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "email_persona", "input", 77, "Validar formato del email en EDIT", "format", "EDIT",
        "email_persona_format_ko", "El formato del email no es válido: debe ser del tipo usuario@dominio.ext"],

            ["persona", "email_persona", "input", 78, "Validar email correcto en EDIT", "valid", "EDIT",
        true, "Email correcto"],

        //Acción: SEARCH

            ["persona", "email_persona", "input", 79, "Validar tamaño máximo (45 caracteres) del email en SEARCH", "max_size", "SEARCH",
        "email_persona_max_size_ko", "El email es demasiado largo: no puede superar los 45 caracteres"],

            ["persona", "email_persona", "input", 80, "Validar formato (solo letras, números, @, puntos, guiones y guiones bajos; no se exige estructura completa) del email en SEARCH", "format", "SEARCH",
        "email_persona_format_ko", "El email contiene caracteres no válidos: solo se permiten letras, números, @, puntos, guiones y guiones bajos"],

            ["persona", "email_persona", "input", 81, "Validar email correcto en SEARCH", "valid", "SEARCH",
        true, "Email correcto"],

    //Campo: foto_persona     //max_size_file , format_name_file.

        //Acción: ADD

            ["persona", "foto_persona", "file", 82, "Validar formato del nombre del fichero (alfabético y punto) a la vez de validar su tamaño maximo(15) y minimo(5) incluidas las extensiones en ADD", "format_name_file", "ADD",
        "foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "foto_persona", "file", 83, "Validar tipo de fichero (jpg o jpeg) en ADD", "type_file", "ADD",
        "foto_persona_type_file_ko", "El tipo de fichero no está permitido: solo se admite jpg o jpeg"],

            ["persona", "foto_persona", "file", 84, "Validar tamaño máximo del fichero (2 MB) en ADD", "max_size_file", "ADD",
        "foto_persona_max_size_file_ko", "El fichero es demasiado grande: no puede superar los 2 MB"],

            ["persona", "foto_persona", "file", 85, "Validar foto correcta en ADD", "valid", "ADD",
        true, "Foto correcta"],

        //Acción: EDIT

            ["persona", "foto_persona", "file", 86, "Validar formato del nombre del fichero (alfabético y punto) a la vez de validar su tamaño maximo(15) y minimo(5) incluidas las extensiones en EDIT", "format_name_file", "EDIT",
        "foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "foto_persona", "file", 87, "Validar tipo de fichero (jpg o jpeg) en EDIT", "type_file", "EDIT",
        "foto_persona_type_file_ko", "El tipo de fichero no está permitido: solo se admite jpg o jpeg"],

            ["persona", "foto_persona", "file", 88, "Validar tamaño máximo del fichero (2 MB) en EDIT", "max_size_file", "EDIT",
        "foto_persona_max_size_file_ko", "El fichero es demasiado grande: no puede superar los 2 MB"],

            ["persona", "foto_persona", "file", 89, "Validar foto correcta en EDIT o puede ser vacío", "valid", "EDIT",
        true, "Foto correcta"],

        //Acción: SEARCH

            ["persona", "foto_persona", "input", 90, "Validar tamaño máximo (15 caracteres) del nombre del fichero en SEARCH", "max_size", "SEARCH",
        "foto_persona_max_size_ko", "El nombre del fichero es demasiado largo: no puede superar los 15 caracteres extension incluida"],

            ["persona", "foto_persona", "input", 91, "Validar formato del nombre del fichero (alfabético y punto) en SEARCH", "format_name_file", "SEARCH",
        "foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "foto_persona", "input", 92, "Validar foto correcta en SEARCH", "valid", "SEARCH",
        true, "Foto correcta"],

    //Campo: nueva_foto_persona

        //Acción: ADD

            ["persona", "nueva_foto_persona", "file", 93, "Validar formato del nombre del fichero (alfabético y punto) a la vez de validar su tamaño maximo(15) y minimo(5) incluidas las extensiones en ADD", "format_name_file", "ADD",
        "nueva_foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "nueva_foto_persona", "file", 94, "Validar tipo de fichero (jpg o jpeg) en ADD", "type_file", "ADD",
        "nueva_foto_persona_type_file_ko", "El tipo de fichero no está permitido: solo se admite jpg o jpeg"],

            ["persona", "nueva_foto_persona", "file", 95, "Validar tamaño máximo del fichero (2 MB) en ADD", "max_size_file", "ADD",
        "nueva_foto_persona_max_size_file_ko", "El fichero es demasiado grande: no puede superar los 2 MB"],

            ["persona", "nueva_foto_persona", "file", 96, "Validar foto correcta en ADD", "valid", "ADD",
        true, "Foto correcta"],

        //Acción: EDIT

            ["persona", "nueva_foto_persona", "file", 97, "Validar formato del nombre del fichero (alfabético y punto) a la vez de validar su tamaño maximo(15) y minimo(5) incluidas las extensiones en EDIT", "format_name_file", "EDIT",
        "nueva_foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "nueva_foto_persona", "file", 98, "Validar tipo de fichero (jpg o jpeg) en EDIT", "type_file", "EDIT",
        "nueva_foto_persona_type_file_ko", "El tipo de fichero no está permitido: solo se admite jpg o jpeg"],

            ["persona", "nueva_foto_persona", "file", 99, "Validar tamaño máximo del fichero (2 MB) en EDIT", "max_size_file", "EDIT",
        "nueva_foto_persona_max_size_file_ko", "El fichero es demasiado grande: no puede superar los 2 MB"],

            ["persona", "nueva_foto_persona", "file", 100, "Validar foto correcta en EDIT o puede ser vacío", "valid", "EDIT",
        true, "Foto correcta"],

        //Acción: SEARCH

            ["persona", "nueva_foto_persona", "input", 101, "Validar tamaño máximo (15 caracteres) del nombre del fichero en SEARCH", "max_size", "SEARCH",
        "nueva_foto_persona_max_size_ko", "El nombre del fichero es demasiado largo: no puede superar los 15 caracteres extension incluida"],

            ["persona", "nueva_foto_persona", "input", 102, "Validar formato del nombre del fichero (alfabético y punto) en SEARCH", "format_name_file", "SEARCH",
        "nueva_foto_persona_format_name_file_ko", "El nombre del fichero no es válido: solo se permiten letras y punto"],

            ["persona", "nueva_foto_persona", "input", 103, "Validar foto correcta en SEARCH", "valid", "SEARCH",
        true, "Foto correcta"]

];

/*ESTRUCTURA:

    ["entidad", "campo", "nº test", "nº prueba", "acción", {"atributo" : "valor"},
         "Resultado Esperado"],

*/

var persona_pruebas = [

    //Campo: dni

        //Acción: ADD

            ["persona", "dni", 1, 1, "ADD", {"dni": "1234567Z"}, "dni_min_size_ko"],
            ["persona", "dni", 1, 2, "ADD", {"dni": ""}, "dni_min_size_ko"],

            ["persona", "dni", 2, 3, "ADD", {"dni": "12345678ZZ"}, "dni_max_size_ko"],
            ["persona", "dni", 2, 4, "ADD", {"dni": "123456789012345"}, "dni_max_size_ko"],

            ["persona", "dni", 3, 5, "ADD", {"dni": "123456789"}, "dni_format_ko"],
            ["persona", "dni", 3, 6, "ADD", {"dni": "1234A678Z"}, "dni_format_ko"],
            ["persona", "dni", 3, 7, "ADD", {"dni": "ABCDEFGHI"}, "dni_format_ko"],

            ["persona", "dni", 4, 8, "ADD", {"dni": "12345678A"}, "dni_personalized_ko"],

            ["persona", "dni", 5, 9, "ADD", {"dni": "12345678Z"}, true],
            ["persona", "dni", 5, 10, "ADD", {"dni": "00000000T"}, true],
            ["persona", "dni", 5, 11, "ADD", {"dni": "11111111H"}, true],

        //Acción: EDIT

            ["persona", "dni", 6, 12, "EDIT", {"dni": "1234567Z"}, "dni_min_size_ko"],
            ["persona", "dni", 6, 13, "EDIT", {"dni": ""}, "dni_min_size_ko"],

            ["persona", "dni", 7, 14, "EDIT", {"dni": "12345678ZZ"}, "dni_max_size_ko"],

            ["persona", "dni", 8, 15, "EDIT", {"dni": "123456789"}, "dni_format_ko"],
            ["persona", "dni", 8, 16, "EDIT", {"dni": "1234A678Z"}, "dni_format_ko"],

            ["persona", "dni", 9, 17, "EDIT", {"dni": "12345678A"}, "dni_personalized_ko"],

            ["persona", "dni", 10, 18, "EDIT", {"dni": "12345678Z"}, true],
            ["persona", "dni", 10, 19, "EDIT", {"dni": "00000000T"}, true],

        //Acción: SEARCH

            ["persona", "dni", 11, 20, "SEARCH", {"dni": "12345678ZZ"}, "dni_max_size_ko"],

            ["persona", "dni", 12, 21, "SEARCH", {"dni": "1234@678Z"}, "dni_format_ko"],

            ["persona", "dni", 13, 22, "SEARCH", {"dni": "12345678Z"}, true],
            ["persona", "dni", 13, 23, "SEARCH", {"dni": "1234"}, true],
            ["persona", "dni", 13, 24, "SEARCH", {"dni": ""}, true],

    //Campo: nombre_persona

        //Acción: ADD

            ["persona", "nombre_persona", 14, 25, "ADD", {"nombre_persona": "A"}, "nombre_persona_min_size_ko"],
            ["persona", "nombre_persona", 14, 26, "ADD", {"nombre_persona": ""}, "nombre_persona_min_size_ko"],

            ["persona", "nombre_persona", 15, 27, "ADD", {"nombre_persona": "A".repeat(46)}, "nombre_persona_max_size_ko"],

            ["persona", "nombre_persona", 16, 28, "ADD", {"nombre_persona": "Ana123"}, "nombre_persona_format_ko"],
            ["persona", "nombre_persona", 16, 29, "ADD", {"nombre_persona": "Ana_María"}, "nombre_persona_format_ko"],

            ["persona", "nombre_persona", 17, 30, "ADD", {"nombre_persona": "Al"}, true],
            ["persona", "nombre_persona", 17, 31, "ADD", {"nombre_persona": "A".repeat(45)}, true],
            ["persona", "nombre_persona", 17, 32, "ADD", {"nombre_persona": "María-José"}, true],
            ["persona", "nombre_persona", 17, 33, "ADD", {"nombre_persona": "José Luis"}, true],
            ["persona", "nombre_persona", 17, 34, "ADD", {"nombre_persona": "Ana M."}, true],

        //Acción: EDIT

            ["persona", "nombre_persona", 18, 35, "EDIT", {"nombre_persona": "A"}, "nombre_persona_min_size_ko"],

            ["persona", "nombre_persona", 19, 36, "EDIT", {"nombre_persona": "A".repeat(46)}, "nombre_persona_max_size_ko"],

            ["persona", "nombre_persona", 20, 37, "EDIT", {"nombre_persona": "Ana123"}, "nombre_persona_format_ko"],

            ["persona", "nombre_persona", 21, 38, "EDIT", {"nombre_persona": "Al"}, true],
            ["persona", "nombre_persona", 21, 39, "EDIT", {"nombre_persona": "A".repeat(45)}, true],
            ["persona", "nombre_persona", 21, 40, "EDIT", {"nombre_persona": "María-José"}, true],
            ["persona", "nombre_persona", 21, 41, "EDIT", {"nombre_persona": "José Luis"}, true],

        //Acción: SEARCH

            ["persona", "nombre_persona", 22, 42, "SEARCH", {"nombre_persona": "A".repeat(46)}, "nombre_persona_max_size_ko"],

            ["persona", "nombre_persona", 23, 43, "SEARCH", {"nombre_persona": "Ana123"}, "nombre_persona_format_ko"],

            ["persona", "nombre_persona", 24, 44, "SEARCH", {"nombre_persona": "A".repeat(45)}, true],
            ["persona", "nombre_persona", 24, 45, "SEARCH", {"nombre_persona": "An"}, true],
            ["persona", "nombre_persona", 24, 46, "SEARCH", {"nombre_persona": "María"}, true],
            ["persona", "nombre_persona", 24, 47, "SEARCH", {"nombre_persona": ""}, true],

    //Campo: apellidos_persona

        //Acción: ADD

            ["persona", "apellidos_persona", 25, 48, "ADD", {"apellidos_persona": "Ru"}, "apellidos_persona_min_size_ko"],
            ["persona", "apellidos_persona", 25, 49, "ADD", {"apellidos_persona": ""}, "apellidos_persona_min_size_ko"],

            ["persona", "apellidos_persona", 26, 50, "ADD", {"apellidos_persona": "A".repeat(101)}, "apellidos_persona_max_size_ko"],

            ["persona", "apellidos_persona", 27, 51, "ADD", {"apellidos_persona": "Pérez 2"}, "apellidos_persona_format_ko"],

            ["persona", "apellidos_persona", 28, 52, "ADD", {"apellidos_persona": "Paz"}, true],
            ["persona", "apellidos_persona", 28, 53, "ADD", {"apellidos_persona": "A".repeat(100)}, true],
            ["persona", "apellidos_persona", 28, 54, "ADD", {"apellidos_persona": "Pérez-Núñez"}, true],
            ["persona", "apellidos_persona", 28, 55, "ADD", {"apellidos_persona": "García López"}, true],
            ["persona", "apellidos_persona", 28, 56, "ADD", {"apellidos_persona": "Da Silva Jr."}, true],

        //Acción: EDIT

            ["persona", "apellidos_persona", 29, 57, "EDIT", {"apellidos_persona": "Ru"}, "apellidos_persona_min_size_ko"],

            ["persona", "apellidos_persona", 30, 58, "EDIT", {"apellidos_persona": "A".repeat(101)}, "apellidos_persona_max_size_ko"],

            ["persona", "apellidos_persona", 31, 59, "EDIT", {"apellidos_persona": "Pérez 2"}, "apellidos_persona_format_ko"],

            ["persona", "apellidos_persona", 32, 60, "EDIT", {"apellidos_persona": "Paz"}, true],
            ["persona", "apellidos_persona", 32, 61, "EDIT", {"apellidos_persona": "A".repeat(100)}, true],
            ["persona", "apellidos_persona", 32, 62, "EDIT", {"apellidos_persona": "Pérez-Núñez"}, true],
            ["persona", "apellidos_persona", 32, 63, "EDIT", {"apellidos_persona": "García López"}, true],

        //Acción: SEARCH

            ["persona", "apellidos_persona", 33, 64, "SEARCH", {"apellidos_persona": "A".repeat(101)}, "apellidos_persona_max_size_ko"],

            ["persona", "apellidos_persona", 34, 65, "SEARCH", {"apellidos_persona": "Pérez 2"}, "apellidos_persona_format_ko"],

            ["persona", "apellidos_persona", 35, 66, "SEARCH", {"apellidos_persona": "A".repeat(100)}, true],
            ["persona", "apellidos_persona", 35, 67, "SEARCH", {"apellidos_persona": "Pé"}, true],
            ["persona", "apellidos_persona", 35, 68, "SEARCH", {"apellidos_persona": "García"}, true],
            ["persona", "apellidos_persona", 35, 69, "SEARCH", {"apellidos_persona": ""}, true],

    //Campo: fechaNacimiento_persona

        //Acción: ADD

            ["persona", "fechaNacimiento_persona", 36, 70, "ADD", {"fechaNacimiento_persona": "1/1/200"}, "fechaNacimiento_persona_min_size_ko"],
            ["persona", "fechaNacimiento_persona", 36, 71, "ADD", {"fechaNacimiento_persona": ""}, "fechaNacimiento_persona_min_size_ko"],

            ["persona", "fechaNacimiento_persona", 37, 72, "ADD", {"fechaNacimiento_persona": "15/01/20000"}, "fechaNacimiento_persona_max_size_ko"],

            ["persona", "fechaNacimiento_persona", 38, 73, "ADD", {"fechaNacimiento_persona": "2000-01-15"}, "fechaNacimiento_persona_format_ko"],
            ["persona", "fechaNacimiento_persona", 38, 74, "ADD", {"fechaNacimiento_persona": "15-01-2000"}, "fechaNacimiento_persona_format_ko"],

            ["persona", "fechaNacimiento_persona", 39, 75, "ADD", {"fechaNacimiento_persona": "30/02/2000"}, "fechaNacimiento_persona_personalized_ko"],
            ["persona", "fechaNacimiento_persona", 39, 76, "ADD", {"fechaNacimiento_persona": "31/04/2000"}, "fechaNacimiento_persona_personalized_ko"],

            ["persona", "fechaNacimiento_persona", 40, 77, "ADD", {"fechaNacimiento_persona": "getdate()+1"}, "fechaNacimiento_persona_personalized_ko"],

            ["persona", "fechaNacimiento_persona", 40, 78, "ADD", {"fechaNacimiento_persona": "1/1/2000"}, true],
            ["persona", "fechaNacimiento_persona", 40, 79, "ADD", {"fechaNacimiento_persona": "15/01/2000"}, true],
            ["persona", "fechaNacimiento_persona", 40, 80, "ADD", {"fechaNacimiento_persona": "29/02/2000"}, true],
            ["persona", "fechaNacimiento_persona", 40, 81, "ADD", {"fechaNacimiento_persona": "getdate()"}, true],
            ["persona", "fechaNacimiento_persona", 40, 82, "ADD", {"fechaNacimiento_persona": "getdate()-1"}, true],
            ["persona", "fechaNacimiento_persona", 40, 83, "ADD", {"fechaNacimiento_persona": "31/12/1999"}, true],

        //Acción: EDIT

            ["persona", "fechaNacimiento_persona", 41, 84, "EDIT", {"fechaNacimiento_persona": "1/1/200"}, "fechaNacimiento_persona_min_size_ko"],

            ["persona", "fechaNacimiento_persona", 42, 85, "EDIT", {"fechaNacimiento_persona": "15/01/20000"}, "fechaNacimiento_persona_max_size_ko"],

            ["persona", "fechaNacimiento_persona", 43, 86, "EDIT", {"fechaNacimiento_persona": "2000-01-15"}, "fechaNacimiento_persona_format_ko"],

            ["persona", "fechaNacimiento_persona", 44, 87, "EDIT", {"fechaNacimiento_persona": "30/02/2000"}, "fechaNacimiento_persona_personalized_ko"],

            ["persona", "fechaNacimiento_persona", 44, 88, "EDIT", {"fechaNacimiento_persona": "01/01/2100"}, "fechaNacimiento_persona_personalized_ko"],

            ["persona", "fechaNacimiento_persona", 45, 89, "EDIT", {"fechaNacimiento_persona": "1/1/2000"}, true],
            ["persona", "fechaNacimiento_persona", 45, 90, "EDIT", {"fechaNacimiento_persona": "15/01/2000"}, true],
            ["persona", "fechaNacimiento_persona", 45, 91, "EDIT", {"fechaNacimiento_persona": "29/02/2000"}, true],
            ["persona", "fechaNacimiento_persona", 45, 92, "EDIT", {"fechaNacimiento_persona": "getdate()"}, true],

        //Acción: SEARCH

            ["persona", "fechaNacimiento_persona", 46, 93, "SEARCH", {"fechaNacimiento_persona": "15/01/20000"}, "fechaNacimiento_persona_max_size_ko"],

            ["persona", "fechaNacimiento_persona", 47, 94, "SEARCH", {"fechaNacimiento_persona": "15-01-2000"}, "fechaNacimiento_persona_format_ko"],

            ["persona", "fechaNacimiento_persona", 48, 95, "SEARCH", {"fechaNacimiento_persona": "15/01/2000"}, true],
            ["persona", "fechaNacimiento_persona", 48, 96, "SEARCH", {"fechaNacimiento_persona": "15/01"}, true],
            ["persona", "fechaNacimiento_persona", 48, 97, "SEARCH", {"fechaNacimiento_persona": "2000"}, true],
            ["persona", "fechaNacimiento_persona", 48, 98, "SEARCH", {"fechaNacimiento_persona": ""}, true],

    //Campo: direccion_persona

        //Acción: ADD

            ["persona", "direccion_persona", 49, 99, "ADD", {"direccion_persona": "Calle 1"}, "direccion_persona_min_size_ko"],
            ["persona", "direccion_persona", 49, 100, "ADD", {"direccion_persona": ""}, "direccion_persona_min_size_ko"],

            ["persona", "direccion_persona", 50, 101, "ADD", {"direccion_persona": "C".repeat(201)}, "direccion_persona_max_size_ko"],

            ["persona", "direccion_persona", 51, 102, "ADD", {"direccion_persona": "Calle Mayor #5"}, "direccion_persona_format_ko"],
            ["persona", "direccion_persona", 51, 103, "ADD", {"direccion_persona": "Calle Mayor, 5"}, "direccion_persona_format_ko"],

            ["persona", "direccion_persona", 52, 104, "ADD", {"direccion_persona": "Calle May."}, true],
            ["persona", "direccion_persona", 52, 105, "ADD", {"direccion_persona": "C".repeat(200)}, true],
            ["persona", "direccion_persona", 52, 106, "ADD", {"direccion_persona": "Rúa do Vilar 12; 3/B"}, true],
            ["persona", "direccion_persona", 52, 107, "ADD", {"direccion_persona": "Avenida de Vigo 45/2-A"}, true],

        //Acción: EDIT

            ["persona", "direccion_persona", 53, 108, "EDIT", {"direccion_persona": "Calle 1"}, "direccion_persona_min_size_ko"],

            ["persona", "direccion_persona", 54, 109, "EDIT", {"direccion_persona": "C".repeat(201)}, "direccion_persona_max_size_ko"],

            ["persona", "direccion_persona", 55, 110, "EDIT", {"direccion_persona": "Calle Mayor #5"}, "direccion_persona_format_ko"],

            ["persona", "direccion_persona", 56, 111, "EDIT", {"direccion_persona": "Calle May."}, true],
            ["persona", "direccion_persona", 56, 112, "EDIT", {"direccion_persona": "C".repeat(200)}, true],
            ["persona", "direccion_persona", 56, 113, "EDIT", {"direccion_persona": "Rúa do Vilar 12; 3/B"}, true],

        //Acción: SEARCH

            ["persona", "direccion_persona", 57, 114, "SEARCH", {"direccion_persona": "C".repeat(201)}, "direccion_persona_max_size_ko"],

            ["persona", "direccion_persona", 58, 115, "SEARCH", {"direccion_persona": "Calle #5"}, "direccion_persona_format_ko"],

            ["persona", "direccion_persona", 59, 116, "SEARCH", {"direccion_persona": "C".repeat(200)}, true],
            ["persona", "direccion_persona", 59, 117, "SEARCH", {"direccion_persona": "Rúa do Vilar"}, true],
            ["persona", "direccion_persona", 59, 118, "SEARCH", {"direccion_persona": "Vigo"}, true],
            ["persona", "direccion_persona", 59, 119, "SEARCH", {"direccion_persona": ""}, true],

    //Campo: telefono_persona

        //Acción: ADD

            ["persona", "telefono_persona", 60, 120, "ADD", {"telefono_persona": "61234567"}, "telefono_persona_min_size_ko"],
            ["persona", "telefono_persona", 60, 121, "ADD", {"telefono_persona": ""}, "telefono_persona_min_size_ko"],

            ["persona", "telefono_persona", 61, 122, "ADD", {"telefono_persona": "6123456789"}, "telefono_persona_max_size_ko"],

            ["persona", "telefono_persona", 62, 123, "ADD", {"telefono_persona": "61234567A"}, "telefono_persona_format_ko"],
            ["persona", "telefono_persona", 62, 124, "ADD", {"telefono_persona": "6123-5678"}, "telefono_persona_format_ko"],

            ["persona", "telefono_persona", 63, 125, "ADD", {"telefono_persona": "512345678"}, "telefono_persona_personalized_ko"],
            ["persona", "telefono_persona", 63, 126, "ADD", {"telefono_persona": "112345678"}, "telefono_persona_personalized_ko"],

            ["persona", "telefono_persona", 64, 127, "ADD", {"telefono_persona": "612345678"}, true],
            ["persona", "telefono_persona", 64, 128, "ADD", {"telefono_persona": "912345678"}, true],
            ["persona", "telefono_persona", 64, 129, "ADD", {"telefono_persona": "789123456"}, true],

        //Acción: EDIT

            ["persona", "telefono_persona", 65, 130, "EDIT", {"telefono_persona": "61234567"}, "telefono_persona_min_size_ko"],

            ["persona", "telefono_persona", 66, 131, "EDIT", {"telefono_persona": "6123456789"}, "telefono_persona_max_size_ko"],

            ["persona", "telefono_persona", 67, 132, "EDIT", {"telefono_persona": "61234567A"}, "telefono_persona_format_ko"],

            ["persona", "telefono_persona", 68, 133, "EDIT", {"telefono_persona": "512345678"}, "telefono_persona_personalized_ko"],

            ["persona", "telefono_persona", 69, 134, "EDIT", {"telefono_persona": "612345678"}, true],
            ["persona", "telefono_persona", 69, 135, "EDIT", {"telefono_persona": "912345678"}, true],

        //Acción: SEARCH

            ["persona", "telefono_persona", 70, 136, "SEARCH", {"telefono_persona": "6123456789"}, "telefono_persona_max_size_ko"],

            ["persona", "telefono_persona", 71, 137, "SEARCH", {"telefono_persona": "61234567A"}, "telefono_persona_format_ko"],

            ["persona", "telefono_persona", 72, 138, "SEARCH", {"telefono_persona": "612345678"}, true],
            ["persona", "telefono_persona", 72, 139, "SEARCH", {"telefono_persona": "612"}, true],
            ["persona", "telefono_persona", 72, 140, "SEARCH", {"telefono_persona": ""}, true],

    //Campo: email_persona

        //Acción: ADD

            ["persona", "email_persona", 73, 141, "ADD", {"email_persona": "a".repeat(37) + "@mail.com"}, "email_persona_max_size_ko"],

            ["persona", "email_persona", 74, 142, "ADD", {"email_persona": "juanmail.com"}, "email_persona_format_ko"],
            ["persona", "email_persona", 74, 143, "ADD", {"email_persona": "juan@mail"}, "email_persona_format_ko"],
            ["persona", "email_persona", 74, 144, "ADD", {"email_persona": "juan@@mail.com"}, "email_persona_format_ko"],

            ["persona", "email_persona", 75, 145, "ADD", {"email_persona": "a".repeat(36) + "@mail.com"}, true],
            ["persona", "email_persona", 75, 146, "ADD", {"email_persona": "juan.perez@mail.com"}, true],
            ["persona", "email_persona", 75, 147, "ADD", {"email_persona": "ana_ruiz@correo.es"}, true],

        //Acción: EDIT

            ["persona", "email_persona", 76, 148, "EDIT", {"email_persona": "a".repeat(37) + "@mail.com"}, "email_persona_max_size_ko"],

            ["persona", "email_persona", 77, 149, "EDIT", {"email_persona": "juanmail.com"}, "email_persona_format_ko"],

            ["persona", "email_persona", 78, 150, "EDIT", {"email_persona": "a".repeat(36) + "@mail.com"}, true],
            ["persona", "email_persona", 78, 151, "EDIT", {"email_persona": "juan.perez@mail.com"}, true],

        //Acción: SEARCH

            ["persona", "email_persona", 79, 152, "SEARCH", {"email_persona": "a".repeat(37) + "@mail.com"}, "email_persona_max_size_ko"],

            ["persona", "email_persona", 80, 153, "SEARCH", {"email_persona": "juan#mail.com"}, "email_persona_format_ko"],

            ["persona", "email_persona", 81, 154, "SEARCH", {"email_persona": "a".repeat(36) + "@mail.com"}, true],
            ["persona", "email_persona", 81, 155, "SEARCH", {"email_persona": "juan@mail"}, true],
            ["persona", "email_persona", 81, 156, "SEARCH", {"email_persona": "juan.perez@mail.com"}, true],
            ["persona", "email_persona", 81, 157, "SEARCH", {"email_persona": ""}, true],

    //Campo: foto_persona

        //Acción: ADD

            ["persona", "foto_persona", 82, 158, "ADD", {"foto_persona": {"name": "", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],
            ["persona", "foto_persona", 82, 159, "ADD", {"foto_persona": {"name": "abcd", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 82, 160, "ADD", {"foto_persona": {"name": "a".repeat(12) + ".jpg", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 82, 161, "ADD", {"foto_persona": {"name": "mi foto.jpg", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],
            ["persona", "foto_persona", 82, 162, "ADD", {"foto_persona": {"name": "foto1.jpg", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 83, 163, "ADD", {"foto_persona": {"name": "foto.png", "type": "image/png", "size": 100000}}, "foto_persona_type_file_ko"],
            ["persona", "foto_persona", 83, 164, "ADD", {"foto_persona": {"name": "foto.pdf", "type": "application/pdf", "size": 100000}}, "foto_persona_type_file_ko"],

            ["persona", "foto_persona", 84, 165, "ADD", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097153}}, "foto_persona_max_size_file_ko"],
            ["persona", "foto_persona", 84, 166, "ADD", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 3000000}}, "foto_persona_max_size_file_ko"],

            ["persona", "foto_persona", 85, 167, "ADD", {"foto_persona": {"name": "a.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 85, 168, "ADD", {"foto_persona": {"name": "a".repeat(11) + ".jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 85, 169, "ADD", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 85, 170, "ADD", {"foto_persona": {"name": "foto.jpeg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 85, 171, "ADD", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097152}}, true],
            ["persona", "foto_persona", 85, 172, "ADD", {"foto_persona": {"name": "fotoperfil.jpeg", "type": "image/jpeg", "size": 500000}}, true],

        //Acción: EDIT

            ["persona", "foto_persona", 86, 173, "EDIT", {"foto_persona": {"name": "", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],
            ["persona", "foto_persona", 86, 174, "EDIT", {"foto_persona": {"name": "abcd", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 86, 175, "EDIT", {"foto_persona": {"name": "a".repeat(12) + ".jpg", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 86, 176, "EDIT", {"foto_persona": {"name": "mi foto.jpg", "type": "image/jpeg", "size": 100000}}, "foto_persona_format_name_file_ko"],

            ["persona", "foto_persona", 87, 177, "EDIT", {"foto_persona": {"name": "foto.png", "type": "image/png", "size": 100000}}, "foto_persona_type_file_ko"],

            ["persona", "foto_persona", 88, 178, "EDIT", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097153}}, "foto_persona_max_size_file_ko"],

            ["persona", "foto_persona", 89, 179, "EDIT", {"foto_persona": {"name": "a.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 89, 180, "EDIT", {"foto_persona": {"name": "a".repeat(11) + ".jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 89, 181, "EDIT", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 89, 182, "EDIT", {"foto_persona": {"name": "foto.jpeg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "foto_persona", 89, 183, "EDIT", {"foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097152}}, true],
            ["persona", "foto_persona", 89, 184, "EDIT", {"foto_persona": {} }, true],

        //Acción: SEARCH

            ["persona", "foto_persona", 90, 185, "SEARCH", {"foto_persona": "a".repeat(12) + ".jpg"}, "foto_persona_max_size_ko"],

            ["persona", "foto_persona", 91, 186, "SEARCH", {"foto_persona": "mi foto.jpg"}, "foto_persona_format_name_ko"],

            ["persona", "foto_persona", 92, 187, "SEARCH", {"foto_persona": "foto.jpg"}, true],
            ["persona", "foto_persona", 92, 188, "SEARCH", {"foto_persona": "foto"}, true],
            ["persona", "foto_persona", 92, 189, "SEARCH", {"foto_persona": ""}, true],

    //Campo: nueva_foto_persona

        //Acción: ADD

            ["persona", "nueva_foto_persona", 93, 190, "ADD", {"nueva_foto_persona": {"name": "", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],
            ["persona", "nueva_foto_persona", 93, 191, "ADD", {"nueva_foto_persona": {"name": "abcd", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 93, 192, "ADD", {"nueva_foto_persona": {"name": "a".repeat(12) + ".jpg", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 93, 193, "ADD", {"nueva_foto_persona": {"name": "mi foto.jpg", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],
            ["persona", "nueva_foto_persona", 93, 194, "ADD", {"nueva_foto_persona": {"name": "foto1.jpg", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 94, 195, "ADD", {"nueva_foto_persona": {"name": "foto.png", "type": "image/png", "size": 100000}}, "nueva_foto_persona_type_file_ko"],
            ["persona", "nueva_foto_persona", 94, 196, "ADD", {"nueva_foto_persona": {"name": "foto.pdf", "type": "application/pdf", "size": 100000}}, "nueva_foto_persona_type_file_ko"],

            ["persona", "nueva_foto_persona", 95, 197, "ADD", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097153}}, "nueva_foto_persona_max_size_file_ko"],
            ["persona", "nueva_foto_persona", 95, 198, "ADD", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 3000000}}, "nueva_foto_persona_max_size_file_ko"],

            ["persona", "nueva_foto_persona", 96, 199, "ADD", {"nueva_foto_persona": {"name": "a.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 96, 200, "ADD", {"nueva_foto_persona": {"name": "a".repeat(11) + ".jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 96, 201, "ADD", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 96, 202, "ADD", {"nueva_foto_persona": {"name": "foto.jpeg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 96, 203, "ADD", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097152}}, true],
            ["persona", "nueva_foto_persona", 96, 204, "ADD", {"nueva_foto_persona": {"name": "fotoperfil.jpeg", "type": "image/jpeg", "size": 500000}}, true],

        //Acción: EDIT

            ["persona", "nueva_foto_persona", 97, 205, "EDIT", {"nueva_foto_persona": {"name": "", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],
            ["persona", "nueva_foto_persona", 97, 206, "EDIT", {"nueva_foto_persona": {"name": "abcd", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 97, 207, "EDIT", {"nueva_foto_persona": {"name":"a".repeat(12) + ".jpg", "type": "image/jpeg","size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 97, 208, "EDIT", {"nueva_foto_persona": {"name": "mi foto.jpg", "type": "image/jpeg", "size": 100000}}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 98, 209, "EDIT", {"nueva_foto_persona": {"name": "foto.png", "type": "image/png", "size": 100000}}, "nueva_foto_persona_type_file_ko"],

            ["persona", "nueva_foto_persona", 99, 210, "EDIT", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097153}}, "nueva_foto_persona_max_size_file_ko"],

            ["persona", "nueva_foto_persona", 100, 211, "EDIT", {"nueva_foto_persona": {"name": "a.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 100, 212, "EDIT", {"nueva_foto_persona": {"name": "a".repeat(11) + ".jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 100, 213, "EDIT", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 100, 214, "EDIT", {"nueva_foto_persona": {"name": "foto.jpeg", "type": "image/jpeg", "size": 100000}}, true],
            ["persona", "nueva_foto_persona", 100, 215, "EDIT", {"nueva_foto_persona": {"name": "foto.jpg", "type": "image/jpeg", "size": 2097152}}, true],
            ["persona", "nueva_foto_persona", 100, 216, "EDIT", {"nueva_foto_persona": {} }, true],
        //Acción: SEARCH

            ["persona", "nueva_foto_persona", 101, 217, "SEARCH", {"nueva_foto_persona": "a".repeat(12) + ".jpg"}, "nueva_foto_persona_max_size_ko"],

            ["persona", "nueva_foto_persona", 102, 218, "SEARCH", {"nueva_foto_persona": "mi foto.jpg"}, "nueva_foto_persona_format_name_file_ko"],

            ["persona", "nueva_foto_persona", 103, 219, "SEARCH", {"nueva_foto_persona": "foto.jpg"}, true],
            ["persona", "nueva_foto_persona", 103, 220, "SEARCH", {"nueva_foto_persona": "foto"}, true],
            ["persona", "nueva_foto_persona", 103, 221, "SEARCH", {"nueva_foto_persona": ""}, true]

];