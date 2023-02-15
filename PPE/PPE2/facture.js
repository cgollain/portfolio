function ajouterLigne(){
    var newLi= document.getElementById("modeleLigne").cloneNode(true);
    var lastLi= document.getElementById("lastLigne");

    var pere= document.getElementById("table_inv").firstChild.nextSibling;
    pere.insertBefore(newLi,lastLi);

}
function suppimerLigne(){
    document.getElementById("table_inv").deleteRow(-1);
}

function remplir() {
    const tabDesc = ["PC Portable", "Bureau", "Ram 8 GO", "Clé USB 16 GO", "Souris", "Clavier", "Peluche Oui-Oui"];
  
    const champsDesc = document.querySelectorAll("#table_inv input[name='desc']");
  
    champsDesc.forEach(champDesc => {
      const indexAleatoire = Math.floor(Math.random() * tabDesc.length);
      const motAleatoire = tabDesc[indexAleatoire];
      champDesc.value = motAleatoire;
    });
  }
  
  function remplirNombres() {
    const remplirNombreInputs = document.getElementsByClassName("prix");
    const qteInputs = document.getElementsByClassName("qte");
    
    for (let i = 0; i < remplirNombreInputs.length; i++) {
      const randomNombre = Math.floor(Math.random() * 50) + 1;
      remplirNombreInputs[i].value = randomNombre;
    }
  
    for (let i = 0; i < qteInputs.length; i++) {
      const randomQte = Math.floor(Math.random() * 10) + 1;
      qteInputs[i].value = randomQte;
    }
  }
  
  function calculate(){
    var total = 0

    var listePrix = document.getElementsByClassName("prix");
    var listeQte = document.getElementsByClassName("qte");
    var listeTtl = document.getElementsByClassName("totalLigne");

    for (var i = 0; i< listePrix.length;i++) {
        listeTtl[i].value = parseInt(listeQte[i].value)*parseInt(listePrix[i].value);
        total = total + parseInt(listeTtl[i].value);
        document.getElementsByClassName("total").innerHTML = total; 
    }
}

