## Environment Testing

### Tested Working - Tuesday, June 1st, 2021 

#### Steps Recreating - Testing

- **WebStorm IDE index.html** `<script>//content//</script>`or a 
  simple HTTP server. Not HTTPS.
  
- **Non-CORS Mode** is set, meaning the http://localhost/example.zip file
  is downloaded locally for testing
  over a non HTTPS protocol, using instead over the **HTTP** protocol.
  Or, simply testing downloading a ./example.zip local zip file
  from the folder location in testing folder environment.

- The fetch mode object value is set to no-cors, simple HTTP testing is
  required. This will avoid any cross domain errors. Errors such as 0 byte .zip 
  file's being  downloaded or browser console errors such as:
  
    ``
    ERROR: No 'Access-Control-Allow-Origin'
    ``
   
    This error comes from downloading a **.zip** file from a non-HTTP URL
    over your testing server. Such as requesting the function by calling:

    ``
    download(`https://domain.com/example.zip`, `./output.zip`);
    ``

    Instead of just testing locally before production using HTTP or local disk, notice
    the fact the download URL begins with HTTPS.
  
   `{ mode: no-cors }`

    Test instead by calling the function to download locally over a **HTTP**
    protocol and or local file location example as such
    over the disk folder location as such:
  
    ``download(`./example.zip`, `output.zip`)``

So simply start a simple web server, download a sample .zip file, or create one. Move
the zip file to the folder path location of the index.html file
that is being served to make things simple. Then name the zip file as example.zip. 
Then simply all you do is within the script tags of a HTML file.

```js
function download(url, filename) {
    fetch(url, {
        mode: 'no-cors' // NO CORS
    }).then((transfer) => {
        return transfer.blob();                 // RETURN DATA TRANSFERED AS BLOB
    }).then((bytes) => {
        let elm = document.createElement('a');  // CREATE A LINK ELEMENT IN DOM
        elm.href = URL.createObjectURL(bytes);  // SET LINK ELEMENTS CONTENTS
        elm.setAttribute('download', filename); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
        elm.click()                             // TRIGGER ELEMENT TO DOWNLOAD
    }).catch((error) => {
        console.log(error);                     // OUTPUT ERRORS, SUCH AS CORS WHEN TESTING NON LOCALLY
    })
}

download('./example.zip', './output.zip');      // LOCAL DISK EXAMPLE
// download('http://domain.com/example.zip', 'downloaded.zip'); // HTTP NO-CORS EXAMPLE
// download('https://domanin.com/example.zip', 'download.zip'); // HTTPS CORS ON EXAMPLE
```

- Creates a DOM element automatically and triggers the download once the page loads,
  no need for creating download links or HTML elements. As
  this script will do this itself. And when in production you will change 
  the no-cors object settings in the script.
  
Read Up:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

    
  
  

