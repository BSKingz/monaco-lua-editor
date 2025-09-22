# debug.getprotos

Returns all the functions defined in the provided function.

```lua
function debug.getprotos(func: (...any) -> (...any) | number): { (...any) -> (...any) }
```

## Parameter

* `func` - The function to obtain the protos from.

***

## Example

```lua
local function DummyFunction0()
    local function DummyFunction1() end
    local function DummyFunction2() end
end

for IndexProto, ValueProto in pairs(debug.getprotos(DummyFunction0)) do
    print(IndexProto, debug.info(ValueProto, "n"))
end

-- Output:
-- DummyFunction1
-- DummyFunction2
```
