const materials = [ 'Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
function string(){
    var Mlength = [];
    for(i=0;i<=materials.length;i++){
        // console.log(materials[0])
        z=(materials[i].length)
        Mlength.push(z)
        document.getElementById("string").innerHTML=("materials Length : "+ [Mlength])
        }
        
}


var matlen = materials.map(material => material.length);
console.log(matlen);
string()