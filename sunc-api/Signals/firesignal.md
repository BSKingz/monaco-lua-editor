# firesignal

Fires a signal's Lua connections.

```lua
function firesignal(signal: RBXScriptSignal, ...: any?)
```

## Parameters

* `signal` - The signal to fire.
* `...?` - The wanted arguments to pass into the fired connections.

***

## Example

```lua
local part = Instance.new("Part")
part.ChildAdded:Connect(function(arg1)
    print(typeof(arg1))
end)

firesignal(part.ChildAdded) -- Output: nil
firesignal(part.ChildAdded, workspace) -- Output: Instance
```
