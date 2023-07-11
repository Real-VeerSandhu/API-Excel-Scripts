// Call API with Token, error

async function main(): void {
    const apiUrl = 'https://firestore.googleapis.com/v1/projects/firestore-streamlit/databases/(default)/documents/posts/Apple';
    
    const staticToken = 'abc';
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${staticToken}`);
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: headers,
    };
    
    fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Handle the response data    
            console.log('Data: ')
            console.log(data);
        }).catch(error => {
            // Handle the error
            console.log('Error: ')
            console.log(error);
        });
    
    console.log('works...')
}

main();

