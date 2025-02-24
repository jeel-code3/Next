//This is the new js file carrying all external js scripts to improve readablity
function display(){
    document.write('<input id="element"> <br><br> <button onclick=' + 'location.reload();' + '>Refresh Page</button>') 
    let element = document.getElementById('element').value;
     //I wonder why its not working==========//
 }
 //let vijotis = ['Jackie', 'Nickoh', 'Jesse', 'Yusta', 'Vicky', 'Franco', 'Adrian'];
 console.log(vijotis.length + ' members of the Vijoti Club');
 console.log('Who are')
 for (let i=0; i<vijotis.length; i++){
     console.log(vijotis[i] + ', ');
 }
 console.log(vijotis[6]);