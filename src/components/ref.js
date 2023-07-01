const handleSubmit=(event)=>{
    event.preventDefault();
    const data = {
        name : event.target.name.value,
        email : event.target.email.value,
        project : event.target.project.value,
        msg : event.target.msg.value,
    };
    firebase.database().ref('messages').push(data);
}
