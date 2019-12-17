async function userUploadAddOption() {
    const url = `https://api.github.com/gists/public`;
    try {
        const response = await fetch(url);
        let data = await response.json();

        for (let value of Object.values(data)) {
            let user = 'LOGIN:' + value.owner.login + " ID :" + value.node_id;

            let newOption = new Option(user);
            select.append(newOption);
        }
    }
     catch (error) {
        console.log(error);
    }
}

 function buttonOnclick() {
     let button = document.getElementById('button');
     button.addEventListener('click', userUploadAddOption)
 }
buttonOnclick();





















