# getscripts

Returns all the scripts in the game, CoreScripts should be filtered by default.

```lua
function getscripts(): { Script | LocalScript | ModuleScript }
```

***

## Example

```lua
local DummyScript = Instance.new("LocalScript")

for _, ValueScript in pairs(getscripts()) do
    if (ValueScript == DummyScript) then
        print(`Found the script {DummyScript}`)
    end
end
```
