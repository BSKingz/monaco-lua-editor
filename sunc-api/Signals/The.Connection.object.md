# The Connection object

{% hint style="info" %}
The retrieved connection object will only have the listed methods and fields, since it's a custom object
{% endhint %}

A new `Connection`object represents an active link to a signal's callback. These are returned by [`getconnections`](https://penguins-organization-2.gitbook.io/sunc-docs/signals/getconnections) and allow inspection and manipulation over connections / signals.

***

### Fields

{% hint style="info" %}
If the connection originates from a foreign Lua state or is a C-level connection, `Function` and `Thread`  will be `nil`  and their `ForeignState` property will be `true` . This is due to neither `Function`nor `Thread`existing in the current Luau VM.
{% endhint %}

<table><thead><tr><th>Field</th><th width="250">Type</th><th>Description</th></tr></thead><tbody><tr><td><code>Enabled</code></td><td><code>boolean</code></td><td>Whether the connection is currently active and will respond to events.</td></tr><tr><td><code>ForeignState</code></td><td><code>boolean</code></td><td><code>true</code>  if the connection was made from a foreign Lua state (e.g CoreScript)</td></tr><tr><td><code>LuaConnection</code></td><td><code>boolean</code></td><td><code>true</code>  if the connection was created from Luau, not C or foreign code.</td></tr><tr><td><code>Function</code></td><td><code>(...any) -> (...any)?</code></td><td>The bound function, or <code>nil</code>  in foreign or non-Luau contexts.</td></tr><tr><td><code>Thread</code></td><td><code>thread?</code></td><td>The thread that created the connection, or <code>nil</code>  in foreign or non-Luau contexts</td></tr></tbody></table>

***

### Methods

<table><thead><tr><th width="335">Method Signature</th><th>Description</th></tr></thead><tbody><tr><td><mark style="color:red;"><code>Connection</code></mark><code>:</code><mark style="color:purple;"><code>Fire</code></mark><code>(...: any): ()</code></td><td>Fires the connected function with the given arguments.</td></tr><tr><td><mark style="color:red;"><code>Connection</code></mark><code>:</code><mark style="color:purple;"><code>Defer</code></mark><code>(...: any): ()</code></td><td>Defers execution using <a href="https://create.roblox.com/docs/reference/engine/libraries/task#defer">task.defer</a></td></tr><tr><td><mark style="color:red;"><code>Connection</code></mark><code>:</code><mark style="color:purple;"><code>Disconnect</code></mark><code>(): ()</code></td><td>Disconnects the connection from the signal.</td></tr><tr><td><mark style="color:red;"><code>Connections</code></mark><code>:</code><mark style="color:purple;"><code>Disable</code></mark><code>(): ()</code></td><td>Prevents the connection from receiving events.</td></tr><tr><td><mark style="color:red;"><code>Connection</code></mark><code>:</code><mark style="color:purple;"><code>Enable</code></mark><code>(): ()</code></td><td>Re-enables a previously disabled connection.</td></tr></tbody></table>
