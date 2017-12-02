;['exp', 'collector', 'jogger'].forEach(function(stat) {
  document.getElementById(stat + '-file').onchange = function () {
    var reader = new FileReader()

    reader.onload = function (e) {
      // get loaded data and render thumbnail.
      console.log(this.id)
      document.getElementById(stat + '-img').src = e.target.result
    }

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0])
})
