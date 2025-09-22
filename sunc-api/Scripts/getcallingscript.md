# getcallingscript

Returns the script that's running the current Luau code. This function only returns `nil` for executor threads, if a game thread sets their `script` global to `nil`, it must still return the correct `script`.

```lua
function getcallingscript(): LocalScript | ModuleScript | Script | nil
```

***

## Example

```lua
local Old; Old = hookmetamethod(game, "__index", function(t, k)
    if not checkcaller() then
        local callingScript = getcallingscript() -- Should return a foreign script

        warn("__index called from script:", callingScript:GetFullName())

        hookmetamethod(game, "__index", old)
        return old(t, k)
    end
end)

print(getcallingscript().Name)
```
