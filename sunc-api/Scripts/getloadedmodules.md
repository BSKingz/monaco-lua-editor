# getloadedmodules

Returns all the loaded modules in the caller's global state, CoreScripts should be filtered by default.

```lua
function getloadedmodules(): { ModuleScript }
```

***

## Example

```lua
local DummyModule = Instance.new("ModuleScript")
local DummyModule2 = Instance.new("ModuleScript")

pcall(require, DummyModule)

for _, ValueModule in pairs(getloadedmodules()) do
    if ValueModule == DummyModule then
        print(`Found the loaded {DummyModule}`)
    elseif ValueModule == DummyModule2 then
        print("Should never happen")
    end
end
```
