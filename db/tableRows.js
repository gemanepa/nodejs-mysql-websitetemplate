
function addRows(database) {
    const sql = "INSERT INTO productos (nombre, descripcion, precio, imagen) VALUES ?";
    const rows = [
      [
        'Game Of Thrones Temporada 1 Blue-ray',
        'El juego empieza. Ganas o mueres Juego de Tronos, basado en la novela de de George R. R. Martin transcurre en una tierra de fantasía habitada por ambiciosos hombres y mujeres, algunos honorables y otros de mala reputación, tal como en nuestro mundo real. En los Siete Reinos de Westeros, quien controla el Trono de Hierro goza de un poder increíble, y la serie se centra en el auge y caída de varias familias que codician ese poder a toda costa. Una historia de duplicidad y traición, nobleza y honor, conquista y triunfo. Una compleja urdimbre entre reyes, herederos, bastardos, guerreros, alianzas y fuerzas sobrenaturales.',
        1.090,
        'public/images/got-season-one.webp'
      ],
      [
        'Game Of Thrones Temporada 2 Blue-ray',
        'En la segunda temporada de la épica serie original de HBO Game of Thrones, '+
        'reyes de todos los lugares del continente ficticio de Westeros luchan por el Trono de Hierro.'+
        ' A medida que el invierno se acerca, el cruel y joven Joffrey ocupa el Trono en Kings Landing'+
        ', asesorado por su insidiosa madre Cersei y su tío Tyrion, quien ha sido nombrado la nueva Mano del Rey.'+
        ' Pero el poder que mantienen los Lannister se ve amenazado en varios frentes,'+
        ' con dos Baretheon proclamados reyes y Robb Stark luchando como el Rey del Norte'+
        '. Mientras tanto, un nuevo líder está surgiendo entre los salvajes del norte del Muro, '+
        'sumando nuevos peligros para Jon Snow y la Guardia Nocturna, mientras Daenerys Targaryen busca reforzar su reducido poder en el Este con sus dragones recién nacidos. '+
        'Con rivalidades y acuerdos, rencores y alianzas, la Segunda Temporada es un emocionante viaje a través de un maravilloso e inolvidable paisaje. ',
        1.120,
        'public/images/got-season-two.webp'
      ],
      [
        'Game Of Thrones Temporada 3 Blue-ray',
        'En la tercera temporada de la exitosa serie dramática de HBO® Game of Thrones, los Lannister apenas se aferran al trono después de un salvaje ataque naval de Stannis Baratheon, mientras las agitaciones en el norte amenazan con alterar el equilibrio total del poder. Robb Stark, el Rey del Norte, se enfrenta a una gran desgracia frente a sus esfuerzos por ampliar sus victorias sobre los Lannister, mientras que más allá del Muro, Mance Rayder y su enorme ejército de salvajes continúan una inexorable marcha hacia el sur. Al otro lado del Estrecho Mar, Daenerys Targaryen -reunida con sus tres dragones- intenta levantar un ejército que navegue con ella desde Essos, con la esperanza de reclamar finalmente el Trono de Hierro.',
        1.190,
        'public/images/got-season-three.webp'
      ],
      [
        'Game Of Thrones Temporada 4 Blue-ray',
        'La historia se desarrolla en un mundo ficticio de carácter medieval donde hay Siete Reinos. '+
        'Hay tres líneas argumentales principales: la crónica de la guerra civil dinástica por el control de Poniente entre varias familias nobles que aspiran al Trono de Hierro, la creciente amenaza de los Otros, seres desconocidos que viven al otro lado de un inmenso muro de hielo que protege el Norte de Poniente, y el viaje de Daenerys Targaryen, la hija exiliada del rey que fue asesinado en una guerra civil anterior, y que pretende regresar a Poniente para reclamar sus derechos. Tras un largo verano de varios años, el temible invierno se acerca a los Siete Reinos. Lord Eddard "Ned" Stark, señor de Invernalia, deja sus dominios para ir a la corte de su amigo, el rey Robert Baratheon en Desembarco del Rey, la capital de los Siete Reinos. Stark se convierte en la Mano del Rey e intenta desentrañar una maraña de intrigas que pondrá en peligro su vida y la de todos los suyos. Mientras tanto diversas facciones conspiran con un solo objetivo: apoderarse del trono.',
        1.210,
        'public/images/got-season-four.webp'
      ],
      [
        'Game Of Thrones Temporada 5 Blue-ray',
        'En el Castillo Negro, Jon Snow batalla por equilibrar las demandas de la Guardia de la Noche con aquellas del recién llegado Stannis Baratheon, quien dice ser el legítimo Rey de Westeros. Mientras tanto, Cersei lucha por mantener el poder en Desembarco del Rey lidiando con los Tyrell y el surgimiento de un grupo religioso liderado por el enigmático Gorrión Supremo, mientras Jaime se embarca en una misión secreta',
        1.160,
        'public/images/got-season-five.webp'
      ],
      [
        'Game Of Thrones Temporada 6 Blue-ray',
        'Después de los impactantes sucesos del final de la quinta temporada -entre ellos el sangriento destino de Jon Snow a manos de los amotinados del Castillo Negro, el roce con la muerte que tuvo Daenerys en la arena de batalla de Meereen y la humillación pública de Cersei por las calles en el Desembarco del Rey-, sobrevivientes de todas partes de Westeros (Poniente) y Essos (Oriente) se reagrupan a fin de seguir adelante, inexorablemente, hacia sus destinos inciertos',
        1.235,
        'public/images/got-season-six.webp'
      ],
      [
        'Game Of Thrones Temporada 7 Blue-ray',
        'Durante siete emocionantes episodios, la penúltima Temporada 7 se enfoca en la convergencia de ejércitos y de actitudes que se han tramado por años. Al inicio de la temporada, Daenerys Targaryen (en compañía de su ejército de Inmaculados y alentada por sus aliados Dothraki/Hijos del Hierro y su letal trío de dragones)'+
        'finalmente ha zarpado hacia Westeros con Tyrion Lannister, recién designado como su Mano. Jon Snow parece haber consolidado su poder en el Norte luego de su espectacular victoria sobre Ramsay Bolton y el regreso de Winterfell al control de los Stark. En Kings Landing, Cersei Lannister, despojada de sus herederos, logró tomar el Trono de Hierro. Pero mientras ésta y otras facciones se encaminan hacia nuevas alianzas o (lo más probable) violentos conflictos, el frío espectro de otro peligro apocalíptico -en la forma de un ejército de Caminantes Blancos resucitados- amenaza con desestabilizar el status quo y eliminar el resultado de estas insignificantes y meramente humanas rivalidades.',
        1.312,
        'public/images/got-season-seven.webp'
      ],
      [
        'Game Of Thrones Temporada 8 Blue-ray',
        'Después de que el Muro cayese a manos del Rey de la Noche y uno de los dragones de Daenerys fuese revivido como si de un caminante blanco se tratase, todos deben unir sus fuerzas para luchar contra un enemigo en común. Sin embargo, Cersei tiene otros planes totalmente diferentes que involucran a la Compañía Dorada y a Euron Greyjoy.',
        1.350,
        'public/images/got-season-eight.webp'
      ],
    ];
    database.query(sql, [rows], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
}


module.exports.addRows = addRows

