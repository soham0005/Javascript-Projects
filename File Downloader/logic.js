var url=document.querySelector("#inputUrl");
var btn=document.getElementById("downloadBtn");

btn.addEventListener("click",e => {
    e.preventDefault();
    // console.log("Event Triggered");
    e.preventDefault();
    btn.innerText = "Downloading file...";
    fetchFile(url.value);
});

function fetchFile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempUrl = URL.createObjectURL(file);
        const aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        btn.innerText = "Download File";
        URL.revokeObjectURL(tempUrl);
        aTag.remove();
    }).catch(() => {
        alert("Failed to download file!");
        downloadBtn.innerText = "Download File";
    });
}