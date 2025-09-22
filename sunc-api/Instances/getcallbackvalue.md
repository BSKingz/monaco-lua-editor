# getcallbackvalue

Returns the function assigned to an object's callback property, which is otherwise inaccessible through standard indexing.

```lua
function getcallbackvalue(object: Instance, property: string): (...any) -> (...any)
```

## Parameters&#x20;

* `object` - The object to get the callback property from.
* `property` - The name of the callback property.

***

## Example

```lua
local DummyBindableFunction = Instance.new("BindableFunction")
local DummyRemoteFunction = Instance.new("RemoteFunction")

DummyBindableFunction.OnInvoke = function()
    print("Callback")
end

getcallbackvalue(DummyBindableFunction, "OnInvoke")() -- Output: Callback
getcallbackvalue(DummyRemoteFunction, "OnClientInvoke") -- Throws an error
```
