# isrenderobj

Returns whether `object` is a valid Drawing object.

```lua
function isrenderobj(object: any): boolean
```

## Parameters

* `object` - The object to determine.

***

## Example

```lua
print(isrenderobj(Drawing.new("Square"))) -- Output: true
print(isrenderobj(game)) -- Output: false
```
