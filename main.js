function generateBadge() {
    const fullName = document.getElementById('fullName').value;
    const githubUsername = document.getElementById('githubUsername').value;
    const uploadPhoto = document.getElementById('uploadPhoto').files[0];

    document.getElementById('badgeName').innerText = fullName;
    document.getElementById('badgeGithub').innerText = githubUsername;

    if (uploadPhoto) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePhoto').src = e.target.result;
        }
        reader.readAsDataURL(uploadPhoto);
    }

    return html2canvas(document.getElementById('badgeCard'));
}

function downloadBadge(canvas) {
    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = img;
    link.download = 'badge.png';

    const imgElement = document.createElement('img');
    imgElement.src = img;
    document.body.appendChild(imgElement);

    setTimeout(function() {
        link.click();
    }, 1000);
}

generateBadge().then(downloadBadge);
