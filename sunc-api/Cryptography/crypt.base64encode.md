# crypt.base64encode

Encodes a string with Base64 encoding.

```lua
function crypt.base64encode(data: string): string
```

## Parameters

* `data` - The data to encode.

***

## Example

```lua
print(crypt.base64encode("DummyString\0\2")) -- Output: RHVtbXlTdHJpbmcAAg==
```
