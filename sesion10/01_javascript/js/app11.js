/**
 * ESTRUCTURA REPETITIVA
 */
// forEach
// https://github.com/axios/axios

const htmlTabla = document.getElementById('tabla')
axios.get('https://reqres.in/api/users?page=2')
    .then(function(response){
        let resData = response.data.data

        let html = '';
        resData.forEach(function(item){
            html += `<tr>
                <td>${item.id}</td>
                <td>${item.first_name}</td>
                <td>${item.last_name}</td>
                <td>${item.email}</td>
                <td><img src="${item.avatar}" title="${item.first_name}" alt="${item.first_name}"></td>
            </tr>`
        });
        htmlTabla.innerHTML = html
    })
    .catch(function(err){
        console.log(err)
    })