# crypt.base64decode

Decodes a Base64 string into its original form.

```lua
function crypt.base64decode(data: string): string
```

## Parameters

* `data` - The data to decode.

***

## Example

```lua
local bytecode = game:HttpGet("https://rubis-api.numelon.com/v2/scrap/zuxQZuM9Tnl5MRbo/raw")
writefile("sound.mp3", crypt.base64decode(bytecode)) -- This file should be a valid and working mp3 file.
```
