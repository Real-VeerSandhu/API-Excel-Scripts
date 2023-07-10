const apiUrl = 'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/YOUR_COLLECTION_NAME';const staticToken = '<STATIC_TOKEN>';
const headers = new Headers();
headers.append('Authorization', `Bearer ${staticToken}`);
const requestOptions: RequestInit = {
  method: 'GET',
  headers: headers,
};
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Handle the response data    console.log(data);
  })  .catch(error => {
    // Handle the error
    console.error(error);
  });
 

