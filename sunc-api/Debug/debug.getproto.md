# debug.getproto

Returns the proto at the specified position. If third argument is true, instead returns a table which contains the active functions of the proto.

```lua
function debug.getproto(func: (...any) -> (...any) | number, index: number, activated: boolean?): (...any) -> (...any) | { (...any) -> (...any) } 
```

## Parameters

* `func` - The function to obtain the proto from.
* `index` - The position of the proto.
* `activated` - Whether to search the GC for the active function of the proto.

***

## Examples

```lua
local function DummyFunction()
    local function DummyProto1()
        print("Hello")
    end
    local function DummyProto2() 
        print("Hello2")
    end
end

debug.getproto(DummyFunction, 1)() -- Output: Hello
debug.getproto(DummyFunction, 2)() -- Output: Hello2
```

```lua
local function DummyFunction()
    local function DummyProto()
       return "hi"
    end
    return DummyProto
end

local RealProto = DummyFunction()
local RetrievedProto = debug.getproto(DummyFunction, 1, true)[1]

print(RealProto == RetrievedProto) -- Output: true
print(RetrievedProto()) -- Output: hilua
```
