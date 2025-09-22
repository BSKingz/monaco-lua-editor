# loadfile

Generates a chunk from the file at the given path, using the global environment. Returns the chunk or nil with an error message.

```lua
function loadfile(path: string): ()
```

## Parameter

* `path` - Path to the file.

***

## Examples

```lua
writefile("file6.lua", "return 10 + ...")
local Func, Err = loadfile("file5.lua")
print(Func(1), Err) -- Output: 11, nil
```

```lua
writefile("file6.lua", "retrn 10  ...")
local Func, Err = loadfile("file5.lua")

if Func == nil and string.find(Err, "expected assignment or a function call") then
    print("Caught the error") -- Output: Caught the error
end
```
