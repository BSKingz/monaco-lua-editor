# getinstances

{% hint style="info" %}
**getinstances** should be able to return instances outside of `game`.
{% endhint %}

Returns a list of all instances referenced by the client.

```lua
function getinstances(): { Instance }
```

***

## Example

```lua
local DummyPart = Instance.new("Part")

for IndexInstance, ValueInstance in pairs(getinstances()) do
    if ValueInstance == DummyPart then
        print(`Found the wanted nil instance: {DummyPart}`)
    end
end
```
