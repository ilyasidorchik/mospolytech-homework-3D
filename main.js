document.addEventListener('DOMContentLoaded', () => {
    const toggleSoundElem = document.querySelector('#soundToggle')
    toggleSoundElem.addEventListener('click', () => {
        const status = +toggleSoundElem.getAttribute('isSoundActive')
        if (!status) {
            toggleSoundElem.setAttribute('isSoundActive', '1')
            toggleSoundElem.components.sound.playSound()
        } else {
            toggleSoundElem.setAttribute('isSoundActive', '0')
            toggleSoundElem.components.sound.pauseSound()
        }
    })

    const colorRandom = document.querySelector('#colorRandom')
    colorRandom.addEventListener('click', () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        colorRandom.setAttribute('color', color)
    })
})