# getscriptbytecode

{% hint style="info" %}
This function should return `nil` if the script has no bytecode. We encourage this behavior, as it's easier for people to check for `nil`, rather than each executor having its own output.
{% endhint %}

```lua
function getscriptbytecode(script: Script | LocalScript | ModuleScript): string | nil
```

## Parameters

* `script` - The `Script`, `LocalScript` or `ModuleScript` the bytecode would be obtained from.

***

## Example

```lua
local AnimateScriptBytecode = getscriptbytecode(game.Players.LocalPlayer.Character.Animate)
print(AnimateScriptBytecode) -- Returns a string with the bytecode.

print(getscriptbytecode(Instance.new("LocalScript"))) -- Output: nil
```
