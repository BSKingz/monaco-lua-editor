# getgc

Returns a table with all collectible values that aren't dead (meaning they are referenced by active scripts).

By default, it excludes tables; you can use `includeTables` to also get tables.

```lua
function getgc(include_tables: boolean?): { { any } | (...any) -> (...any) | userdata }
```

## Parameters

* `include_tables?` - Whether the output table should also include tables

***

## Examples

```lua
local DummyTable = {}
local function DummyFunction() end
task.wait(0.05) -- Step a bit

for GarbageIndex, GarbageValue in pairs(getgc()) do
    if GarbageValue == DummyFunction then
        print(`Found function: {DummyFunction}`)
    elseif GarbageValue == DummyTable then
        print(`Found table?: {DummyTable}`) -- This shouldn't print
    end
end
```

```lua
local DummyTable = {}
local function DummyFunction() end
task.wait(0.05) -- Step a bit

for GarbageIndex, GarbageValue in pairs(getgc(true)) do
    if GarbageValue == DummyFunction then
        print(`Found function: {DummyFunction}`) -- Both should print
    elseif GarbageValue == DummyTable then
        print(`Found table: {DummyTable}`) -- Both should print
    end
end
```
