# identifyexecutor

Returns the name and version of the current executor, first string contains the executor's identifier and the second contains the version of the executor.

```lua
function identifyexecutor(): (string, string)
```

***

## Example

```lua
local ExecName, ExecVersion = identifyexecutor()
print(ExecName, ExecVersion) -- Output: "YourName 0.0.1"
```
