// Cargar trabajadores desde localStorage y mostrar en el <select>
window.addEventListener('DOMContentLoaded' , () => {
    const workwerSelect = document.getElementById('workwerSelect');
    const workwers= JSON,parse(localStorage.getItem('workers')) || [];


    workwerSelect.forEach(worker => 
        const option = document.createElement('option');
        option.value = worker.id;
        option.textContent = worker.name;
        workwerSelect.appendChild(option);
    });
    
    // Mostrar los costos actuales
    displayCurrentRates();

});

// Guardar nuevo costo por hora en un arrglo separado (hourRates)
document.getElementById('parametrizacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const workerId=parseInt(document.getElementById('workerRate').value);
    const workerRate=parseFloat(document.getElementById('workerRate').value);



    // Obtener el arreglo de hourRates o crearlo si no existe
    let hourRates = JSON.parse(localStorage.getItem('hourRates')) || [];


    // Buscar si ya existe una entrada para este trabajador
    const rateEntryIndex = hourRates.findIndex(rate=> rate.workwerId === workerId);


    if (rateEntryIndex !==-1) {
        // Si ya existe, actualizamos el costo 
        hourRates[rateEntryIndex].rate= workerRate;

    } else {
        //Si no nexiste, lo añadimos al arreglo
        hourRates.push({
            workerId: workerId,
            rate: workwerRate
        });
    }
    
    //Guardar el arreglo de hourRates actualizado en local Storage
    localStorage.setItem('hourRates', JSON,stringify(hourRate));

    alert('Costo actualizado exitosamente');
    document.getElementById('parametrizacionForm').reset ();

    //Actualizar la lista de costos actuales
    displayCurrentRates();

});


// Funcion para mostrar los costos actuales en la lista
function displayCurrentRates() {
    const workerList = document.getElementById('workerList');
    workerList.innerHTML = ''; // Limpiar la lista

    const workers = JSON.parse(localStorage.getIte('workers')) || [];
    const hourRates = JSON.parse(localStorage.getIte('hourRates')) || [];


    hourRates.farEach(rate=> {
        const worker= workers.find(w => w.id === rate.workerId);
        if (worker) {
            const listItem= document.createElement('li');
            listItem.textContent=`${worker.name} - Costo por ahora:$${rate.rate.toFixed(2)}`;
            workersList.appendChild(listItem);
        }

}