const { resource } = require("@adonisjs/framework/src/Route/Manager");

const ResourceNotExistException = use('App/Exceptions/ResourceNotExistException')

class AuthorizationService {
    verifyPermission(resource){
        if(!resource){
            throw new ResourceNotExistException();
        }
    }
}

module.exports = new AuthorizationService();