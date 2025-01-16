// Función para reproducir el audio
function playAudio(imgElement) {
    // Obtiene el atributo data-audio de la imagen
    const audioSrc = imgElement.getAttribute("data-audio");

    // Crea un nuevo elemento de audio si no existe
    let audioPlayer = imgElement.audioPlayer;
    if (!audioPlayer) {
        audioPlayer = new Audio(`../audios/${audioSrc}`);
        imgElement.audioPlayer = audioPlayer; // Asocia el reproductor con la imagen
    }

    // Reproduce el audio
    audioPlayer.play().catch(err => console.error("Error al reproducir el audio:", err));
}

// Función para pausar y reiniciar el audio
function pauseAudio(imgElement) {
    const audioPlayer = imgElement.audioPlayer;
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Reinicia el audio
    }
}
