function x(){
    const q = document.getElementById('testid'); //where i want to see the result
    q.innerHTML = Date();
    q.style.background = 'lightgreen';
    q.style.color = 'white';
} 

function xy(){
    const q = document.getElementById('fname'); //where i want to see the
    q.value = q.value.toUpperCase();

}

function op(){
    const q = document.getElementById('sltid').value;
    document.getElementById('opr').innerHTML = q;
}