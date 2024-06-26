Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UNDEFINED_INJECT_ANNOTATION = exports.PRE_DESTROY_ERROR = exports.POST_CONSTRUCT_ERROR = exports.ON_DEACTIVATION_ERROR = exports.NULL_ARGUMENT = exports.NO_MORE_SNAPSHOTS_AVAILABLE = exports.NOT_REGISTERED = exports.MISSING_INJECT_ANNOTATION = exports.MISSING_INJECTABLE_ANNOTATION = exports.LAZY_IN_SYNC = exports.KEY_NOT_FOUND = exports.INVALID_TO_SELF_VALUE = exports.INVALID_MIDDLEWARE_RETURN = exports.INVALID_FUNCTION_BINDING = exports.INVALID_DECORATOR_OPERATION = exports.INVALID_BINDING_TYPE = exports.DUPLICATED_METADATA = exports.DUPLICATED_INJECTABLE_DECORATOR = exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = exports.CIRCULAR_DEPENDENCY_IN_FACTORY = exports.CIRCULAR_DEPENDENCY = exports.CANNOT_UNBIND = exports.ASYNC_UNBIND_REQUIRED = exports.ARGUMENTS_LENGTH_MISMATCH = exports.AMBIGUOUS_MATCH = void 0;

exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";

exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";

exports.NULL_ARGUMENT = "NULL argument";

exports.KEY_NOT_FOUND = "Key Not Found";

exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";

exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";

exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";

exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";

exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";

exports.UNDEFINED_INJECT_ANNOTATION = function(e) {
    return "@inject called with undefined this could mean that the class ".concat(e, " has a circular dependency problem. You can use a LazyServiceIdentifier to  overcome this limitation.");
};

exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";

exports.INVALID_BINDING_TYPE = "Invalid binding type:";

exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";

exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";

exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";

exports.LAZY_IN_SYNC = function(e) {
    return "You are attempting to construct '".concat(e, "' in a synchronous way\n but it has asynchronous dependencies.");
};

exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier";

exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";

exports.ARGUMENTS_LENGTH_MISMATCH = function() {
    return "The number of constructor arguments in the derived class ".concat(arguments.length <= 0 ? void 0 : arguments[0], " must be >= than the number of constructor arguments of its base class.");
};

exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.";

exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = 'Invalid Container option. Default scope must be a string ("singleton" or "transient").';

exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean";

exports.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean";

exports.ASYNC_UNBIND_REQUIRED = "Attempting to unbind dependency with asynchronous destruction (@preDestroy or onDeactivation)";

exports.POST_CONSTRUCT_ERROR = function(e, t) {
    return "@postConstruct error in class ".concat(e, ": ").concat(t);
};

exports.PRE_DESTROY_ERROR = function(e, t) {
    return "@preDestroy error in class ".concat(e, ": ").concat(t);
};

exports.ON_DEACTIVATION_ERROR = function(e, t) {
    return "onDeactivation() error in class ".concat(e, ": ").concat(t);
};

exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function(e, t) {
    return "It looks like there is a circular dependency in one of the '".concat(e, "' bindings. Please investigate bindings with service identifier '").concat(t, "'.");
};