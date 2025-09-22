# loadstring

Compiles the given string, and returns it runnable in a function. The environment must become `unsafe` after this function is called due to it allowing the modification of globals uncontrollably (see [setfenv](https://create.roblox.com/docs/reference/engine/globals/LuaGlobals#setfenv)/[getfenv](https://create.roblox.com/docs/reference/engine/globals/LuaGlobals#getfenv) documentation)

```lua
function loadstring<A...>(src: string, chunkname: string?): ((A...) -> any | nil, string?)
```

## Parameters

* `src` - The source to compile.
* `chunkname` - Name of the chunk.

***

## Examples

```lua
loadstring([[
    Placeholder = {"Example"}
]])()

print(Placeholder[1]) -- Output: Example
```

```lua
local Func, Err = loadstring("Example = ", "CustomName")

print(`{Func}, {Err}`) -- Output: nil, [string "CustomName"]:1: Expected identifier when parsing expression, got <eof>
```
