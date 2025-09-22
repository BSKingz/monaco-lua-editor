# getrenv

{% hint style="info" %}
Any changes to this environment shouldn't affect the executor; however it should affect game scripts.
{% endhint %}

Returns a table containing the Roblox environment.

```lua
function getrenv(): { any }
```

***

## Example

```lua
getrenv().game = nil -- game scripts won't be able to access game
getrenv().warn = "Hello"
print(type(warn)) -- Output: string
```
