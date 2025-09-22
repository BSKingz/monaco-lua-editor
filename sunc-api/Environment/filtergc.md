# filtergc

Similar to `getgc`, will return Lua values that are being referenced and match the specified criteria.

```lua
function filtergc(filter_type: "function" | "table", filter_options: FunctionFilterOptions | TableFilterOptions, return_one: boolean?): (...any) -> (...any) | { [any]: any } | { (...any) -> (...any) | { [any]: any } }
```

***

## Table filter options:

| Key             | Description                                                                                                        | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| `Keys`          | If not empty, also include tables with keys corresponding to all values in this table.                             | `nil`   |
| `Values`        | If not empty, also include tables with values corresponding to all values in this table.                           | `nil`   |
| `KeyValuePairs` | If not empty, also include tables with keys/value pairs corresponding to all values in this table.                 | `nil`   |
| `Metatable`     | If not empty, also include tables with the metatable passed.                                                       | `nil`   |
| `Hash`          | <p>Filters by the hash of the function. </p><p>(See <a href="../closures/getfunctionhash">getfunctionhash</a>)</p> | `nil`   |

## Function filter options:

| Key              | Description                                                                              | Default |
| ---------------- | ---------------------------------------------------------------------------------------- | ------- |
| `Name`           | If not empty, also include functions with this name.                                     | `nil`   |
| `IgnoreExecutor` | If true, also exclude functions made in the executor.                                    | `true`  |
| `Hash`           | If not empty, also include functions with the specified hash of their bytecode.          | `nil`   |
| `Constants`      | If not empty, also include functions with constants that match all values in this table. | `nil`   |
| `Upvalues`       | If not empty, also include functions with upvalues that match all values in this table.  | `nil`   |

***

## Parameters

* `filter_type` - Specifies the type of Lua value to search for.
* `filter_options` - Criteria used to filter the search results based on the specified type.
* `return_one?` - A boolean that returns only the first match when true; otherwise, all matches are returned.

{% hint style="warning" %}
Executing these examples multiple times in a short period of time may result in false negatives.
{% endhint %}

***

## Examples - Function

Usage of `Name` and `return_one?` set to `false` (default option):

```lua
local function DummyFunction() 
end

local Retrieved = filtergc("function", {
    Name = "DummyFunction", 
    IgnoreExecutor = false
})

print(typeof(Retrieved)) -- Output: table
print(Retrieved[1] == DummyFunction) -- Output: true
```

Usage of `Name` and `return_one?` set to `true`:

```lua
local function DummyFunction() 
end

local Retrieved = filtergc("function", {
    Name = "DummyFunction", 
    IgnoreExecutor = false
}, true)

print(typeof(Retrieved)) -- Output: function
print(Retrieved == DummyFunction) -- Output: true
```

***

## Usage of options parameter

Usage of `Hash`:

```lua
local function DummyFunction() 
    return "Hello" 
end

local DummyFunctionHash = getfunctionhash(DummyFunction)

local Retrieved = filtergc("function", {
    Hash = DummyFunctionHash, -- A C Closure will automatically fail this filter because it's impossible to rebuild the bytecode of a C Closure
    IgnoreExecutor = false
}, true)

print(getfunctionhash(Retrieved) == DummyFunctionHash) -- Output: true
print(Retrieved == DummyFunction) -- Output: true
```

Usage of `Constants` and `Upvalues`:

```lua
local Upvalue = 5

local function DummyFunction() 
    Upvalue += 1
    print(game.Players.LocalPlayer)
end

local Retrieved = filtergc("function", { 
    Constants = { "print", "game", "Players", "LocalPlayer", 1 }, -- A C Closure will automatically fail this filter because a C Closure does not have Constants
    Upvalues = { 5 },
    IgnoreExecutor = false
}, true)

print(Retrieved == DummyFunction) -- Output: true
```

***

## Examples - Table

Usage of `Keys` and `Values`:

<pre class="language-lua"><code class="lang-lua">local DummyTable = { ["DummyKey"] = "" }

local Retrieved = filtergc("table", {
    Keys = { "DummyKey" },
}, true)

<strong>print(Retrieved == DummyTable) -- Output: true
</strong></code></pre>

Usage of `KeyValuePairs`:

```lua
local DummyTable = { ["DummyKey"] = "DummyValue" }

local Retrieved = filtergc("table", {
    KeyValuePairs = { ["DummyKey"] = "DummyValue" },
}, true)

print(Retrieved == DummyTable) -- Output: true
```

Usage of `Metatable`:

```lua
local DummyTable = setmetatable( {}, { __index = getgenv() } )

local Retrieved = filtergc("table", { 
    Metatable = getmetatable(DummyTable) 
}, true)

print(Retrieved == DummyTable) -- Output: true
```
