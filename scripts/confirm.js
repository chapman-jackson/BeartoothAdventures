
function getUrlInfo() {
    const currentUrl = window.location.href;
    console.log(currentUrl);

    // Splitting URL for data pieces
    const splitUrl = currentUrl.split('?');
    console.log(splitUrl);

    if (splitUrl.length > 1) {
        let formData = splitUrl[1].split('&');
        console.log(formData);

        function show(detail) {
            console.log(detail);
            let result = ''; 
            formData.forEach((element) => {
                console.log(element);
                if (element.startsWith(detail)) {
                    result = decodeURIComponent(element.split('=')[1]).replace(/\+/g, ' ');
                }
            });
            return result;
        }

        const displayForm = document.querySelector('#display-results');
        const displayTime = document.querySelector('#display-time');
        if (displayForm) {
            displayForm.innerHTML = `
                <p>Email: ${show('email')}</p>
                <p>Phone Number: ${show('phone')}</p>
                <p>End date for alerts: ${show('end-date')}</p>
            `;
        }
        if (displayTime) {
            displayTime.textContent = `You signed up for alerts on: ${show('timestamp')}`;
        }
    }
}

getUrlInfo();