const form = getElementById('formpinputs');
const url = 'https://script.google.com/macros/s/AKfycbzjI9VmmDKMukgAHp8yakhz_p_cW8EI_sUqEyWpVcAWySrzkEg/exec';

const $('#submitbutton').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})