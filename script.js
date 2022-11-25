const videoElement = document.getElementById('video')
const button = document.getElementById('button')

//Prompt the user to select a media stream and pass to video element and plan

async function selectMediaStream () {  //we had to use async in order to use await
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoElement.srcObject = mediaStream
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch(error) {

    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.disabled = true
    //STart picture in picture
    await videoElement.requestPictureInPicture()
    //Reset the button
    button.disabled = false
})
selectMediaStream()