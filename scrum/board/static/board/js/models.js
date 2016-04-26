(function ($, Backbone, _, app){
    var Session = Backbone.Model.extends({
        defaults: {
            token: null
        },
        intialize: function(options) {
            this.options = options;
            this.load();
            
        },
        load: function() {
            var token = localStorage.apiToken;
            if (token) {
                this.set('token', token);
            }
        },
        save: function() {
            this.set('token', token);
            if (token === null) {
                localStorage.removeItem('apiToken');
            } else {
                localStorage.apiToken = token;
            }
        },
        delete: function() {
            this.save(null);
        },
        authenticated: function() {
            return this.get('token') !== null;
        },
        _setupAuth: function (settings, orginalOptions, xhr) {
            if (this.authenticated()) {
                xhr.setRequestHeader(
                    'Authorization',
                    'Token' + this.get('token')
                );
            }    
        }    
    });
    
    app.session = new Session();
    
    
})(jQuery, Backbone, _, app);