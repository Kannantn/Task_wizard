//Wizard Init

$("#wizard").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "none",
    titleTemplate: '#title#',
    onStepChanging: function (event, currentIndex, newIndex) {
        console.log(currentIndex);
        console.log(newIndex);
        if (currentIndex == 2) {
            console.log('skills tab next click event');
        }
        return true;
    },
    onFinished: function (event, currentIndex) {
        alert('Form submitted successfully');
    }
});



