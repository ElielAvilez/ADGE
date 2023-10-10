#include <stdio.h>
#include <mysql.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

_Bool longitudCadena_init(UDF_INIT *initid, UDF_ARGS *args, char *message) 
{
    if (args -> arg_count != 1 || args -> arg_type[0] != STRING_RESULT) {
         strcpy (message, "indique una cadena");
         return 1;
    }

 return 0;
}

int longitudCadena(UDF_INIT *initid,UDF_ARGS *args, char *is_null, char *error) 
{
    char *primero = (char*)args -> args[0];
    
    int longitud = 0;

    while(*primero != '\0')
    {
        longitud ++;
        primero ++;
    }

    return longitud;
}

void longitudCadena_deinit(UDF_INIT *initid)
{


}

