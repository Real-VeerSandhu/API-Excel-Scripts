// Get firestore data, PLAIN API CALL

function main(workbook: ExcelScript.Workbook) {
    // Your code here
    let sheet = workbook.getActiveWorksheet();
}

function callFirestoreAPI() {
    const url = 'https://firestore.googleapis.com/v1/projects/firestore-streamlit/databases/(default)/documents/posts/Apple';

    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, false);

    httpRequest.send();

    if (httpRequest.status === 200) {
        console.log('http:', httpRequest.responseText);
    } else {
        console.log('Error:', httpRequest.status);
    }
}

callFirestoreAPI();
