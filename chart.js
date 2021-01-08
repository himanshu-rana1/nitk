let placement = document.getElementById('placementData');
const getPlacementData = () => {
  getBtechStats();
  getMtechStats();  
  placement.removeEventListener('click', getPlacementData);
};
placement.addEventListener('click' , getPlacementData);


function getBtechStats(){
    let adm = [];
    let placed = [];
    fetch('http://localhost:9091/btech/getPlacementData').then(response => {
        return response.json();
    }).then(responseData => {
        for(stat of responseData){
            adm.push(parseInt(String(stat.totalStudents)));
            placed.push(parseInt(String(stat.totalPlacements)));
        }
        console.log(adm);
        console.log(placed);
        let ctx1 = document.getElementById('myChart1');
        let myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['2015-16', '2016-17', '2017-18', '2018-19', '2019-20'],
                datasets: [{
                    label: 'Admissions',
                    data: adm,
                    backgroundColor: '#26B99A',
                    borderColor: 'rgba(255,201,134)',
                    borderWidth: 1
                },
                {
                    label: 'Placed',
                    data: placed,
                    backgroundColor: '#03586A',
                    borderColor: 'rgba(134,201,255)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
}

function getMtechStats(){
    let adm = [];
    let placed =[];
    fetch('http://localhost:9091/mtech/getPlacementData').then(response => {
        return response.json();
    }).then(responseData => {
        for(stat of responseData){
            adm.push(parseInt(String(stat.totalStudents)));
            placed.push(parseInt(String(stat.totalPlacements)));
        }
        console.log(adm);
        console.log(placed);
        let ctx2 = document.getElementById('myChart2');
        let myChart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: ['2015-16', '2016-17', '2017-18', '2018-19', '2019-20'],
                datasets: [{
                    label: 'Admissions',
                    data: adm,
                    backgroundColor: '#26B99A',
                    borderColor: 'rgba(255,201,134)',
                    borderWidth: 1
                },
                {
                    label: 'Placed',
                    data: placed,
                    backgroundColor: '#03586A',
                    borderColor: 'rgba(134,201,255)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    });
}