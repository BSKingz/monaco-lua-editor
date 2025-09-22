# getrunningscripts

Returns all the running scripts in the caller's global state, CoreScripts should be filtered by default.

```lua
function getrunningscripts(): { LocalScript | ModuleScript | Script }
```

***

## Example

```lua
local DummyScript = game.Players.LocalPlayer.Character.Animate
local DummyScript2 = Instance.new("LocalScript")

for _, ValueScript in pairs(getrunningscripts()) do
    if (ValueScript == DummyScript) then
        print(`Found the running script {DummyScript}`)
    elseif (ValueScript == DummyScript2) then
        print("Should never happen")
    end
end
```
