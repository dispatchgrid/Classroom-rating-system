function addLoader() {
    const loaderDiv = document.createElement('div');
    loaderDiv.className = 'loader';
    loaderDiv.id = 'loader';
    document.body.appendChild(loaderDiv);

    const style = document.createElement('style');
    style.innerHTML = `
        .loader {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background: 
                linear-gradient(90deg, white 33%,rgba(0, 255, 0) 50%, white 66%)
                #f2f2f2;
            background-size: 300% 100%;
            animation: l1 2s infinite linear;
        }
        @keyframes l1 {
            0% { background-position: right; }
            100% { background-position: left; }
        }
    `;
    document.head.appendChild(style);
}

function removeLoader() {
    const loaderDiv = document.getElementById('loader');
    if (loaderDiv) {
        loaderDiv.remove();
    }
}
