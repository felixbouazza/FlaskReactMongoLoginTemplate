from werkzeug.exceptions import HTTPException

class InternalServerError(HTTPException):
    pass

class SchemaValidationError(HTTPException):
    pass

class EmailAlreadyExistsError(HTTPException):
    pass

class UnauthorizedError(HTTPException):
    pass


errors = {
    "InternalServerError": {
        "message": "Something went wrong",
        "status": 500
    },
    "SchemaValidationError": {
         "message": "Request is missing required fields",
         "status": 400
     },
    "EmailAlreadyExistsError": {
        "message": "Un utilisateur existe déjà pour cette email",
        "status": 400
    },
    "UnauthorizedError": {
        "message": "Email ou Mot de passe invalide",
        "status": 401
    }
}