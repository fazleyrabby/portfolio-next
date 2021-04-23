
// const scriptURL = 'https://script.google.com/macros/s/AKfycbzc4vquFjDATdVQs27akZ7SzN0RZZDWyyi7071A/exec';
// const email__err = document.getElementById("email__err");
// const form = document.forms['google-sheet'];
// const submit = document.getElementById("submit");

// const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const email = document.querySelector('.email');

// email.addEventListener('input', emailErr);

// function emailErr(email) {
//     if (email.target.value != '') {
//         const e = email.target.value;
//         if (e.match(re)) {
//             submit.style.pointerEvents = 'all';
//             email__err.textContent = '';
//             email__err.style.padding= 0;
//         }
//         else{
//             email__err.textContent = 'Your Email is Invalid!!';
//             submit.style.pointerEvents = 'none';
//             email__err.style.padding= '5px';
//         }
//     }else{
//         email__err.innerHTML = '';
//         email__err.style.padding= 0;
//     }
// }


// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const submittedMail = formData.get('email');
//     if (submittedMail.match(re)) {
//         fetch(scriptURL, { 
//             method: 'POST', 
//             body: formData,
//             mode: "no-cors"
//             }).then(response => 
//                 Swal.fire({
//                     title: "Success!", 
//                     text: "Message Send successfully"
//                 }).then((
//                 result => {
//                     form.reset();
//                 }
//             ))
//             )
//             .catch(error => console.error('Error!', error.message))
//     }else{
//         Swal.fire({title: "Error!", text: "Your email is Invalid or Empty"});
//     }


// })


