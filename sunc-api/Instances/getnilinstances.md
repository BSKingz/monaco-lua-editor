# getnilinstances

Returns a list of instances that have their parent property set to `nil`.

```lua
function getnilinstances(): { Instance }
```

***

## Example

```lua
local DummyPart = Instance.new("Part")
DummyPart.Parent = nil

for IndexNil, ValueNil in pairs(getnilinstances()) do
    if ValueNil == DummyPart then
        print(`Found the wanted nil instance: {DummyPart}`)
    end
end
```
