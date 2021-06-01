    /*
     * @Author Raymond Pittman
     * @Github: https://github.com/raymondpittman
     * LOCAL DISK EXAMPLE
     */
    function download(url, filename) {
        fetch(url, {
            mode: 'no-cors' /* Alternative Mode {mode:'cors'} */
        }).then((transfer) => {
            return transfer.blob(); // Return data as blob
        }).then((bytes) => {
            let elm = document.createElement('a'); // Create element link
            elm.href = URL.createObjectURL(bytes); // Set link to contents reference to a .zip
            elm.setAttribute('download', filename); // Set to download attribute
            elm.click() // Trigger
        }).catch((error) => {
            console.log(error); // Log Errors
        })
    }

    /* @PARAM EXAMPLE CALL LOCAL DISK DOWNLOAD -> LOCAL DISK  */
    download('./example.zip', './output.zip');
