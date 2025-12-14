// Base de datos de preguntas para fiestas
const preguntas = {
    verdad: [
        { text: "¿Cuál es tu mayor secreto que nunca le has contado a nadie?", category: "Verdad o Reto" },
        { text: "¿Alguna vez has mentido para salir de una cita?", category: "Verdad o Reto" },
        { text: "¿Cuál es la cosa más vergonzosa que te ha pasado en público?", category: "Verdad o Reto" },
        { text: "¿A quién en esta sala te gustaría besar?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu mayor miedo?", category: "Verdad o Reto" },
        { text: "¿Alguna vez has hecho trampa en un examen?", category: "Verdad o Reto" },
        { text: "¿Cuál es la mentira más grande que has dicho?", category: "Verdad o Reto" },
        { text: "¿Has estado enamorado/a de alguien en secreto?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu hábito más extraño?", category: "Verdad o Reto" },
        { text: "¿Alguna vez has espiado a alguien en redes sociales?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu mayor arrepentimiento?", category: "Verdad o Reto" },
        { text: "¿Has llorado viendo una película? ¿Cuál?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu crush de famoso/a?", category: "Verdad o Reto" },
        { text: "¿Alguna vez te has enamorado de un amigo/a?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu mayor inseguridad?", category: "Verdad o Reto" },
        { text: "¿Has fingido que te gusta algo para impresionar a alguien?", category: "Verdad o Reto" },
        { text: "¿Cuál es el peor regalo que has recibido?", category: "Verdad o Reto" },
        { text: "¿Alguna vez has culpado a alguien más por algo que hiciste?", category: "Verdad o Reto" },
        { text: "¿Cuál es tu canción culposa favorita?", category: "Verdad o Reto" },
        { text: "¿Has ghosteado a alguien? ¿Por qué?", category: "Verdad o Reto" }
    ],
    conocimiento: [
        { text: "¿Quién es conocido como el Rey del Pop?", category: "Conocimiento" },
        { text: "¿En qué año llegó el ser humano a la Luna?", category: "Conocimiento" },
        { text: "¿Cuál es la capital de Australia?", category: "Conocimiento" },
        { text: "¿Quién escribió 'Cien años de soledad'?", category: "Conocimiento" },
        { text: "¿Cuántos huesos tiene el cuerpo humano adulto?", category: "Conocimiento" },
        { text: "¿Cuál es el planeta más grande del sistema solar?", category: "Conocimiento" },
        { text: "¿En qué país se originó el sushi?", category: "Conocimiento" },
        { text: "¿Quién pintó la Mona Lisa?", category: "Conocimiento" },
        { text: "¿Cuál es el río más largo del mundo?", category: "Conocimiento" },
        { text: "¿Cuántos continentes hay en la Tierra?", category: "Conocimiento" },
        { text: "¿Quién fue el primer presidente de Estados Unidos?", category: "Conocimiento" },
        { text: "¿Cuál es el metal más valioso del mundo?", category: "Conocimiento" },
        { text: "¿En qué año cayó el Muro de Berlín?", category: "Conocimiento" },
        { text: "¿Cuál es el océano más grande?", category: "Conocimiento" },
        { text: "¿Quién desarrolló la teoría de la relatividad?", category: "Conocimiento" },
        { text: "¿Cuántos lados tiene un hexágono?", category: "Conocimiento" },
        { text: "¿Cuál es la montaña más alta del mundo?", category: "Conocimiento" },
        { text: "¿En qué continente está Egipto?", category: "Conocimiento" },
        { text: "¿Cuál es el idioma más hablado en el mundo?", category: "Conocimiento" },
        { text: "¿Quién escribió Romeo y Julieta?", category: "Conocimiento" }
    ],
    divertidas: [
        { text: "Si fueras un animal, ¿cuál serías y por qué?", category: "Divertidas" },
        { text: "¿Cuál es tu baile más vergonzoso?", category: "Divertidas" },
        { text: "Si pudieras tener un superpoder inútil, ¿cuál sería?", category: "Divertidas" },
        { text: "¿Qué harías si te quedaras atrapado en un ascensor con tu ex?", category: "Divertidas" },
        { text: "¿Cuál es tu comida favorita para comer a escondidas?", category: "Divertidas" },
        { text: "Si pudieras ser invisible por un día, ¿qué harías?", category: "Divertidas" },
        { text: "¿Cuál es tu peor foto de perfil que has tenido?", category: "Divertidas" },
        { text: "¿Qué emoji te representa mejor?", category: "Divertidas" },
        { text: "Si fueras un tipo de pizza, ¿cuál serías?", category: "Divertidas" },
        { text: "¿Cuál es tu excusa más creativa para llegar tarde?", category: "Divertidas" },
        { text: "Si pudieras vivir en una serie de TV, ¿cuál sería?", category: "Divertidas" },
        { text: "¿Qué harías con un millón de dólares en 24 horas?", category: "Divertidas" },
        { text: "¿Cuál es tu talento secreto más raro?", category: "Divertidas" },
        { text: "Si pudieras cambiar tu nombre, ¿cuál elegirías?", category: "Divertidas" },
        { text: "¿Cuál es la cosa más extraña que has comido?", category: "Divertidas" },
        { text: "Si pudieras hablar con un objeto, ¿cuál sería?", category: "Divertidas" },
        { text: "¿Qué personaje de caricatura te representa mejor?", category: "Divertidas" },
        { text: "¿Cuál es tu chiste más malo?", category: "Divertidas" },
        { text: "Si pudieras eliminar un color del mundo, ¿cuál sería?", category: "Divertidas" },
        { text: "¿Qué harías si ganaras la lotería mañana?", category: "Divertidas" }
    ],
    profundas: [
        { text: "¿Cuál es el momento que más ha cambiado tu vida?", category: "Profundas" },
        { text: "¿Qué es lo que más valoras en una amistad?", category: "Profundas" },
        { text: "¿Cuál es tu mayor sueño en la vida?", category: "Profundas" },
        { text: "¿Qué consejo le darías a tu yo de hace 5 años?", category: "Profundas" },
        { text: "¿Qué significa el éxito para ti?", category: "Profundas" },
        { text: "¿Cuál es tu mayor lección de vida hasta ahora?", category: "Profundas" },
        { text: "¿Qué es lo que te da más miedo del futuro?", category: "Profundas" },
        { text: "¿Cuál es tu definición de felicidad?", category: "Profundas" },
        { text: "¿Qué es lo que más te hace sentir vivo/a?", category: "Profundas" },
        { text: "¿Cuál ha sido tu mayor reto personal?", category: "Profundas" },
        { text: "¿Qué cambiarías de tu pasado si pudieras?", category: "Profundas" },
        { text: "¿Cuál es tu mayor motivación en la vida?", category: "Profundas" },
        { text: "¿Qué es algo que siempre quisiste aprender pero no has hecho?", category: "Profundas" },
        { text: "¿Cuál es el mejor consejo que te han dado?", category: "Profundas" },
        { text: "¿Qué es lo que más te gusta de ti mismo/a?", category: "Profundas" },
        { text: "¿Cuál es tu mayor logro del que estás orgulloso/a?", category: "Profundas" },
        { text: "¿Qué te hace sentir más agradecido/a?", category: "Profundas" },
        { text: "¿Cuál es tu filosofía de vida?", category: "Profundas" },
        { text: "¿Qué legado te gustaría dejar en el mundo?", category: "Profundas" },
        { text: "¿Cuál es la cosa más importante que has aprendido sobre el amor?", category: "Profundas" }
    ],
    hipoteticas: [
        { text: "¿Qué harías si supieras que el mundo se acaba en 24 horas?", category: "Hipotéticas" },
        { text: "Si pudieras viajar en el tiempo, ¿irías al pasado o al futuro?", category: "Hipotéticas" },
        { text: "Si pudieras ser famoso/a por algo, ¿qué sería?", category: "Hipotéticas" },
        { text: "¿Preferirías poder volar o ser invisible?", category: "Hipotéticas" },
        { text: "Si pudieras cenar con cualquier persona viva o muerta, ¿quién sería?", category: "Hipotéticas" },
        { text: "¿Elegirías vivir 1000 años en el pasado o 1000 años en el futuro?", category: "Hipotéticas" },
        { text: "Si pudieras leer mentes, ¿lo harías?", category: "Hipotéticas" },
        { text: "¿Preferirías ser muy inteligente o muy atractivo/a?", category: "Hipotéticas" },
        { text: "Si pudieras vivir en cualquier país, ¿cuál sería?", category: "Hipotéticas" },
        { text: "¿Qué harías si encontraras un millón de dólares en la calle?", category: "Hipotéticas" },
        { text: "Si pudieras tener una conversación de 30 minutos con tu yo del futuro, ¿qué preguntarías?", category: "Hipotéticas" },
        { text: "¿Preferirías perder todos tus recuerdos o nunca poder crear nuevos?", category: "Hipotéticas" },
        { text: "Si pudieras eliminar un problema mundial, ¿cuál sería?", category: "Hipotéticas" },
        { text: "¿Vivirías en Marte si te lo ofrecieran?", category: "Hipotéticas" },
        { text: "Si pudieras hablar con animales, ¿qué animal elegirías?", category: "Hipotéticas" },
        { text: "¿Preferirías ser el/la más inteligente o el/la más rico/a del mundo?", category: "Hipotéticas" },
        { text: "Si pudieras cambiar una ley, ¿cuál sería?", category: "Hipotéticas" },
        { text: "¿Aceptarías 10 millones pero nunca podrías usar internet otra vez?", category: "Hipotéticas" },
        { text: "Si pudieras revivir un día de tu vida, ¿cuál sería?", category: "Hipotéticas" },
        { text: "¿Preferirías saber cuándo o cómo vas a morir?", category: "Hipotéticas" }
    ]
};

// Función para obtener una pregunta aleatoria
function getRandomQuestion(category) {
    let questionPool = [];
    
    if (category === 'todas') {
        // Combinar todas las categorías
        Object.values(preguntas).forEach(categoryQuestions => {
            questionPool = questionPool.concat(categoryQuestions);
        });
    } else {
        questionPool = preguntas[category] || [];
    }
    
    if (questionPool.length === 0) {
        return {
            text: "No hay preguntas disponibles para esta categoría",
            category: "Error"
        };
    }
    
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    return questionPool[randomIndex];
}
