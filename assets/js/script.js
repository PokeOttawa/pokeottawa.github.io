/* Show preview image when user selects file for upload */
['exp', 'collector', 'jogger'].forEach(function(stat) {
  document.getElementById(stat + '-file').onchange = function () {
    var reader = new FileReader()

    reader.onload = function (e) {
      document.getElementById(stat + '-img').src = e.target.result
    }

    reader.readAsDataURL(this.files[0])
  }
})
