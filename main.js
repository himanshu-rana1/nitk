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


function myBtechCurriculum() {
    fetch('http://localhost:9091/resource/get/Btech/2019/Curriculum').then(response => {
        console.log(response);
        return response.blob();
    }).then(data => {
        console.log(data);
        const blob = new Blob([data], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Btech_2019_Curriculum.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
}

function myMtechCurriculum() {
    fetch('http://localhost:9091/resource/get/Mtech/2019/Curriculum').then(response => {
        console.log(response);
        return response.blob();
    }).then(data => {
        console.log(data);
        const blob = new Blob([data], {type: 'application/pdf'});
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Mtech_2019_Curriculum.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    });
}


