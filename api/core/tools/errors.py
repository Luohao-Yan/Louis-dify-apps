class ToolProviderNotFoundError(ValueError):
    pass

class ToolNotFoundError(ValueError):
    pass

class ToolParamterValidationError(ValueError):
    pass

class ToolProviderCredentialValidationError(ValueError):
    pass

class ToolNotSupportedError(ValueError):
    pass

class ToolInvokeError(ValueError):
    pass

class ToolApiSchemaError(ValueError):
    pass