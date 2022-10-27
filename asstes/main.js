let array = ['1.mp4', 'Beauty-of-Nature.mp4', '2.mp4'];

function playVideo(id){
    console.log(array[id]);
    let positionOfContent = document.getElementById('streamVideo');
     positionOfContent.src = './asstes/video/'+array[id];

}
