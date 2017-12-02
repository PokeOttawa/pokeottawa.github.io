---
layout: default
title: Registration Form
permalink: /form
---

## {{ page.title }}

<form>

 <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
<br />
 <label for="level">Level:</label>
  <input type="number" id="level" name="level" />
<br />
 <label for="exp">EXP:</label>
  <input type="number" id="exp" name="exp" />
<br />
  <input type="radio" id="ValorTeam" name="team" value="Valor" />
    <label for="ValorTeam">Valor</label>

  <input type="radio" id="InstinctTeam" name="team" value="Instinct" />
    <label for="InstinctTeam">Instinct</label>

  <input type="radio" id="MysticTeam" name="team" value="Mystic" />
    <label for="MysticTeam">Mystic</label>
<br />

  <input type="file" id="file1" />
   <img id="image1" />
  <button type="submit" value="Submit">Submit</button>
    
</form>

Thank you.

<script>
 document.getElementById("file1").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("image1").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};
</script>
