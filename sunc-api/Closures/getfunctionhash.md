# getfunctionhash

Returns a Hex represented SHA384 hash of the provided function's re-built bytecode

```lua
function getfunctionhash(function_to_hash): string
```

***

## Example

```lua
local function isSHA384Hex(hash)
    if #hash ~= 96 then
        return false
    end
    if not hash:match("^[0-9a-fA-F]+$") then
        return false
    end
    return true
end

local DummyFunction0 = function() end
local DummyFunction1 = function(...) end
local DummyFunction2 = function() end

print(isSHA384Hex(getfunctionhash(DummyFunction0))) -- Output: true
print(getfunctionhash(DummyFunction0) == getfunctionhash(DummyFunction1)) -- Output: false
print(getfunctionhash(DummyFunction0) == getfunctionhash(DummyFunction2)) -- Output: true
```
