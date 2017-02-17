define(['knockout', 'text!./contact-form.html'], function(ko, templateMarkup) {

    function ContactForm(params) {
        var self = this;

        self.title = ko.observable('');
        self.titleValid = ko.computed(function(){
          return self.title().length > 0 ? 'input-valid' : 'input-invalid';
        });

        self.text = ko.observable('');
        self.textValid = ko.computed(function(){
          return self.text().length > 0 ? 'input-valid' : 'input-invalid';
        });

        self.email = ko.observable('');

        self.formValid = ko.computed(function(){
          var formValid = false;
          if(self.title().length > 0 && self.text().length > 0){
            formValid = true;
          }
          return formValid;
        });

        self.sendForm = function() {
            console.log(self.title())
            console.log(self.text())
            console.log(self.email())
            alert('Formular sent')
        }
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    ContactForm.prototype.dispose = function() {};

    return {
        viewModel: ContactForm,
        template: templateMarkup
    };

});
