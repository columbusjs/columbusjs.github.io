window.onload = function() {

  // The capitalize function capitalizes a string - something easily done in css,
  // but in this case we need to do it before we camelize namesthat contain Mc, Mac, and O'
  // These name prefixes must be followed by a space in the categories list for each post. 

  String.prototype.capitalize = function(all) {
    if (all) {
       return this.split(' ').map(function(e){return e.capitalize();}).join(' ');    
    } else {
         return this.charAt(0).toUpperCase() + this.slice(1);
    } 
  }

  //Remove spaces from last names containing Mc, Mac and O' that need to be camel-case
  
  try {
   var names = document.getElementsByClassName('speaker-name');
    var len = names.length;

    for (var i = 0; i < len; i++) {

      var name = names[i].innerHTML;
      name = name.capitalize(true);
      
      if (name.indexOf('Mc') > 0) {
        names[i].innerHTML = name.replace('Mc ', 'Mc');
        continue;

      } else if (name.indexOf('Mac') > 0) {
        names[i].innerHTML = name.replace('Mac ', 'Mac');
        continue;

      } else if (name.indexOf('O\'') > 0) {
        names[i].innerHTML = name.replace('O\' ' , 'O\'');
        continue;
      }
    }
  } catch(e) {
    console.log(e);
  };

};
