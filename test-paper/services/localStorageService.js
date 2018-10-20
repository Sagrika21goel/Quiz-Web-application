app.factory('localStorageService', function(){
    return{
        getItem: function(key, callback){
            if(localStorage.getItem(key)!=null){
                callback(JSON.parse(localStorage.getItem(key)));
            }
        },

        setItem: function(key, item){
            localStorage.setItem(key, item);
        },

        clear: function(){
            localStorage.clear();
        }
    }
});