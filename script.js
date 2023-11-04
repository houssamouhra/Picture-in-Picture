const button = document.getElementById("button");
const videoElement = document.getElementById("video");

// Prompt to select a media steam, pass to video element, then play
const selectMediaStream = async function () {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log("oops, error here:", err);
  }
};

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

selectMediaStream();
