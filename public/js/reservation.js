// async function newFormHandler(event) {
//     event.preventDefault();

//     const reservation = document.querySelector('input[name="reservation"]').value;
//     const room = document.querySelector('textarea[name="room"]').value;

//     const response = await fetch(`/api/reservation`, {
//       method: 'POST',
//       body: JSON.stringify({
//         reservation,
//         room
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
// }
  
// document.querySelector('.new-reservation-form').addEventListener('submit', newFormHandler);

function empty() {
    var room = $("#room").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var checkin = $("#checkin").val();
    var checkout = $("#checkout").val();
    var validate = true;
    if (!email) {
      $("#email-validate").show();
      validate = false;
    }
    else if (email) {
      $("#email-validate").hide();
    }
    if (!firstname) {
      $("#firstname-validate").show();
      validate = false;
    }
    else if (firstname) {
      $("#firstname-validate").hide();
    }
    if (!lastname) {
      $("#lastname-validate").show();
      validate = false;
    }
    else if (lastname) {
      $("#lastname-validate").hide();
    }
    if (!phone) {
      $("#phone-validate").show();
      validate = false;
    }
    else if (phone) {
      $("#phone-validate").hide();
    }
    if (!checkin) {
      $("#checkin-validate").show();
      validate = false;
    }
    else if (checkin) {
      $("#checkin-validate").hide();
    }
    if (!checkout) {
      $("#checkout-validate").show();
      validate = false;
    }
    else if (checkout) {
      $("#checkout-validate").hide();
    }
    if (!room) {
      $("#room-validate").show();
      validate = false;
    }
    else if (room) {
      $("#room-validate").hide();
    }
    return validate;
  }