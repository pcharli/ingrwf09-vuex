import Axios from 'axios'

const url = "https://ingrwf08-1d60c.firebaseio.com/personnel"

export default  {
    listing() {
        return Axios({
            url: `${url}.json`,
            method: "get"
        })
        .then((response) => {
            let usersArray = []
            //console.log(typeof(response.data))
           // console.log(response.data)
            //converion objet d'objets en array d'objets
            for(let property in response.data) {
              response.data[property].index = property
              usersArray.push(response.data[property])
            }
            return usersArray
        })
    },
    onePersonne(indexFirebase) { 
        return Axios({
            url: `${url}/${indexFirebase}.json`,
            method: "get"
        })
        .then((response) => {
            //console.log(response.data)
            response.data.index = indexFirebase
            return response.data
        })
    },
    changeStatut(index, statut) {
        return Axios({
            url: `${url}/${index}.json`,
            method: 'patch',
            data: {directeur:statut}
        })
        .then(response => response.data)
    },
    add(personne) {
        return Axios({
            url: `${url}.json`,
            method: 'post',
            data: personne
        })
        .then(response => response.data)
    },
    del(index) {
        return Axios({
            url: `${url}/${index}.json`,
            method: "delete"
        })
        .then(response => response.data)
    },
    edit(newDataPersonne) {
        return Axios({
            url: `${url}/${newDataPersonne.index}.json`,
            method: "patch",
            data: newDataPersonne
        })
        .then(response => response.data)
    }
}