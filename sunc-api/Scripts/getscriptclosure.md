# getscriptclosure

Creates a new closure (function) from the module/script's bytecode. The game does not use the function you will get, as it's usually used to retrieve constants.

```lua
function getscriptclosure(script: Script | LocalScript | ModuleScript): (...any) -> (...any) | nil
```

## Parameter

* `script` - The script instance to get its closure.

***

## Example

```lua
local AnimateScript = game.Players.LocalPlayer.Character.Animate
print(getscriptclosure(AnimateScript)) -- Output: function 0x...

print(getscriptclosure(Instance.new("LocalScript"))) -- Output: nil
```
