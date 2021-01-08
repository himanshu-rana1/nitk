const people = document.getElementById('people');

const getPeople = () => {
    fetch('http://localhost:9091/getAll').then(response => {
        return response.json();
    }).then(
        responseData => {
            for(let user of responseData){
                console.log(user.name + user.designation + user.profilePicture);
                let divFlex = document.createElement('div');
                divFlex.style = "width:175px";
                let img = document.createElement('img'); 
                img.src = 'data:image/jpeg;base64,'+ user.profilePicture;
                let designation = String(user.designation);
                console.log(designation);
                divFlex.appendChild(img);
                let p = document.createElement('p'); 
                p.innerText = String(user.name);
                divFlex.appendChild(p);
                let div = document.getElementById(designation);
                div.appendChild(divFlex);
            }
        }
    );
    people.removeEventListener('click', getPeople);
};
people.addEventListener('click', getPeople);


