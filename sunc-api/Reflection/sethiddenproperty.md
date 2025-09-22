# sethiddenproperty

{% hint style="warning" %}
Many executors may implement this function by using `setscriptable`, which is discouraged due to detection vectors and/or limitations coming with `setscriptable` itself.
{% endhint %}

Sets the hidden, non-scriptable property's value no matter its type, such as `BinaryString`, `SharedString` and `SystemAddress`. A boolean will also be returned, indicating if the property is hidden or not.

Avoids detections and errors that can happen by just using `setscriptable` to set the property

```lua
function sethiddenproperty(instance: Instance, property_name: string, property_value: any): boolean
```

## Parameters

* `instance` - The instance that contains the property.
* `property_name` - The name of the property to be assigned.
* `property_value` - The value to which the property should be set.

***

## Example

```lua
local part = Instance.new("Part")
print(gethiddenproperty(part, "DataCost")) -- Output: 20, true
sethiddenproperty(part, "DataCost", 100)
print(gethiddenproperty(part, "DataCost")) -- Output: 100, true
```
