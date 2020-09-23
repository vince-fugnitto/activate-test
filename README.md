# Activate-Test

## Description

The extension verifies the `workspaceContains` activation event.
The extension activates if an `editorconfig` file is present in the workspace:

```json
"activationEvents": [
	"workspaceContains:**/.editorconfig"
],
```
