async function asynkFunk() {
    const url = `https://api.github.com/gists/public`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        let  user = 'login: ' + data[0].owner.login +" id:" + data[0].node_id;
        alert(user);
    } catch (error) {
        console.log(error);
    }
}

 function but() {
     let button = document.getElementById('button');
     button.addEventListener('click', asynkFunk)
 }
but();







// await load-users.onclick = () => {
//     for ( let key in data) {
//         console.log(key + data[key]);   // data[0].owner.login + data[0].node_id
//     }













