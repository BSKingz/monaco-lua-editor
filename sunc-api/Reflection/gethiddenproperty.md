# gethiddenproperty

{% hint style="warning" %}
Many executors may implement this function by using `setscriptable`, which is discouraged due to detection vectors and/or limitations coming with `setscriptable` itself.
{% endhint %}

Returns the hidden, non-scriptable properties value no matter its type, such as `BinaryString`, `SharedString` and `SystemAddress`. A boolean will also be returned, indicating if the property is hidden or not.

```lua
function gethiddenproperty(instance: Instance, property_name: string): (any, boolean)
```

## Parameters

* `instance` - The instance that contains the property.
* `property_name` - The name of the property to be read.

***

## Example

```lua
local part = Instance.new("Part")
print(gethiddenproperty(part, "Name")) -- Output: "Part", false
print(gethiddenproperty(part, "DataCost")) -- Output: 20, true
```
