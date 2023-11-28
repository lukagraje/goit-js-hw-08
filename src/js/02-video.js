import Player from "@vimeo/player";
import throttle from 'lodash.throttle';


const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);
function getCurrentTime(data) {
    const currentTime = data;
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
} 
        
player.on('timeupdate', throttle(getCurrentTime, 1000)); 

window.addEventListener('DOMContentLoaded', () => {
    try {
        const time = JSON.parse(localStorage.getItem('videoplayer-current-time')).seconds;
        player.setCurrentTime(time);  
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }    
});