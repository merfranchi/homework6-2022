var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay)
	video.loop = false;
	console.log("Looping is set to " + video.loop)
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate /= 0.90
	console.log("Playback rate is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is " + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true){
		video.muted = false
		console.log("Video Unmuted")
		this.innerHTML = "Mute"
	}
	else{
		video.muted = true
		console.log("Video Muted")
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current time is " + video.currentTime)
});

document.querySelector("#slider").addEventListener("change", function() {
    console.log("Volume Slider")
	video.volume = (this.value/100)
	console.log("Volume is changing to " + video.volume)
	document.querySelector("#volume").innerHTML = video.volume*100 + "%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Style");
	vd = document.querySelector("video")
	vd.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Style");
	vd = document.querySelector("video")
	vd.classList.remove("oldSchool")
});



