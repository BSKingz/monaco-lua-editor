# checkcaller

Determines whether the function was called from the executor's thread or not.

```lua
function checkcaller(): boolean
```

***

## Example

```lua
local FromCaller
local _; _ = hookmetamethod(game, "__namecall", function(...)
    if FromCaller ~= true then
        FromCaller = checkcaller()
    end
    return _(...)
end)

task.wait(0.09) -- Step a bit
hookmetamethod(game, "__namecall", _)

print(FromCaller) -- Output: false
print(checkcaller()) -- Output: true
```
