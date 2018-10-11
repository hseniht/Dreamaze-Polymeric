$(document).ready(function() {
    $('#example').DataTable( {
        // "order": [[ 3, "desc" ]]
        responsive: true

    } );
} );


var ages = [12, 17, 8, 21, 14, 11];

console.log(ages);

console.log(ages.findIndex(cur  => cur >= 18));
console.log(ages.find(cur  => cur >= 18));
console.log("map");
console.log(ages.map((cur)=> cur + 1 ));
console.log(ages.map(function(cur){
  return cur + 1 ;
}));
