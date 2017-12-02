---
layout: default
title: Registration Form
permalink: /form
---

## {{ page.title }}

{% include form-opening.html %}

<div id="username-wrapper">
 <label for="username">Username:</label>
  <input type="text" id="username" name="username" />
</div>
 
<div id="level-wrapper">
 <label for="level">Level:</label>
  <input type="number" id="level" name="level" />
</div>
 
<div id="team-wrapper">
  <input type="radio" id="ValorTeam" name="team" value="Valor" />
    <label for="ValorTeam">Valor</label>

  <input type="radio" id="InstinctTeam" name="team" value="Instinct" />
    <label for="InstinctTeam">Instinct</label>

  <input type="radio" id="MysticTeam" name="team" value="Mystic" />
    <label for="MysticTeam">Mystic</label>
</div>
 
 <div id="exp-wrapper">
 <h3>Total XP</h3>
  <input type="file" id="exp-file" />
   <img id="exp-img" />
 <br />
   <label for="exp">EXP:</label>
    <input type="number" id="exp-num" name="exp" />
 </div>
 
<div id="collector-wrapper">
 <h3>Collector Badge</h3>
  <input type="file" id="collector-file" />
   <img id="collector-img" />
 <br />
   <label for="collector">Collector Number:</label>
    <input type="number" id="collector-num" name="collector" />
 </div>
 
 <div id="jogger-wrapper">
 <h3>Jogger Badge</h3>
  <input type="file" id="jogger-file" />
   <img id="jogger-img" />
 <br />
   <label for="jogger">Jogger Badge:</label>
    <input type="number" id="jogger-num" name="jogger" />
 </div>
  
  <input type="submit" value="Submit" />
    
</form>

<script rel="text/javascript" src="{{ 'assets/js/script.js' | relative_url }}"></script>
