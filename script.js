<script type="text/javascript">
function toggle(id) {
    var element = document.getElementById(id);
    
   if (id.match(/a$/)) {
        var second_id = id.replace(/a/, 'b')
   } else {
       var second_id = id.replace(/b/, 'a')
   }
   
   var second_element = document.getElementById(second_id);
     
    if (element) {
        var display = element.style.display;

        if (display == "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
  
   if (second_element) {
       second_element.style.display = "none";
    }
}
</script>
