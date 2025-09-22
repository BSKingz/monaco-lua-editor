# getsenv

{% hint style="info" %}
This function will throw an error if the script isn't currently running. If the script is running but on a different Lua State (such as on an [Actor](https://create.roblox.com/docs/reference/engine/classes/Actor)), the function will return nil instead.
{% endhint %}

Returns the environment of the given script thread.

```lua
function getsenv(script: Script | LocalScript | ModuleScript): { [any]: any }
```

## Parameter

* `script` - The module/script the function gets the globals table of.

***

## Example

```lua
local ScriptEnv = getsenv(game.Players.LocalPlayer.Character.Animate)
print(ScriptEnv.onSwimming) -- Output: function 0x...

print(getsenv(Instance.new("LocalScript"))) -- Throws an error
```
