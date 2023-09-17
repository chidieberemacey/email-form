function sendEmail(){
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "username",
    //     Password : "password",
    //     To : 'winnonstopg@gmail.com',
    //     From : document.getElementById('email').value,
    //     Subject : "New Contact Form Enquiry",
    //     Body : "Name: " + document.getElementById('name').value
    //         + "<br> Email: " + document.getElementById('email').value
    //         + "<br> Phone No: " + document.getElementById('phone').value
    //         + "<br> Message: " + document.getElementById('message').value
    // }).then(
    //   message => alert("Message Sent Successfully")
    // );

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}










