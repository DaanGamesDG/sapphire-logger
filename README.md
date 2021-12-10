<h1 align="left"><strong>@daangamesdg/sapphire-logger</strong></h1>

A personal logger I use for all my Sapphire Discord bot projects.

## Information

This is a copy from [@sapphire/plugin-logger](https://github.com/sapphiredev/plugins/tree/main/packages/logger) with minor changes to fit my personal needs.

## Installation

`@daangamesdg/sapphire-logger` depends on the following packages. Be sure to install these along with this package!

-   [`@sapphire/framework`](https://www.npmjs.com/package/@sapphire/framework)

You can use the following command to install this package, or replace `npm install` with your package manager of choice.

```sh
npm install @daangamesdg/sapphire-logger @sapphire/framework
```

---

## Usage

This registers the necessary options and methods in the Sapphire client to be able to use the log plugin.

```typescript
// Main bot file
// Be sure to register the plugin before instantiating the client.
import "@daangamesdg/sapphire-logger/register";
```

In order to use the Logger in any place other than a piece (commands, arguments, preconditions, etc.), you must first import the `container` property of `@sapphire/framework`. For pieces, you can simply use `this.container.logger` to access Logger methods.

```typescript
import { container } from "@sapphire/framework";

export class MyAwesomeService {
	public printAwesomeLog() {
		container.logger.info("log message");
	}
}
```

Here is an example ping command, demonstrating the use of `this.container.logger` from within a piece by omitting the explicit import.

```typescript
// ping command

import { Command } from "@sapphire/framework";
import type { Message } from "discord.js";

export class PingCommand extends Command {
	public constructor(context: Command.Context, options: Command.Options) {
		super(context, {
			...options,
			description: "ping pong"
		});
	}

	public async messageRun(message: Message) {
		this.container.logger.warn("warning message");
	}
}
```

## Types of logs

1. `trace`
1. `debug`
1. `info`
1. `warn`
1. `error`
1. `fatal`

> Example: `container.logger.debug('log debug message');`

## Author

🔷 **Sapphire**

-   Website: https://www.sapphirejs.dev/
-   Github: [@sapphiredev](https://github.com/sapphiredev)
-   Original code: [click here](https://github.com/sapphiredev/plugins/tree/main/packages/logger)

👤 **DaanGamesDG**

-   Website: https://daangamesdg.xyz/
-   Email: <daan@daangamesdg.xyz>
-   Twitter: [@DaanGamesDG](https://twitter.com/DaanGamesDG)
-   Github: [@DaanGamesDG](https://github.com/DaanGamesDG)

## Donate

This will always be open source project, even if I don't receive donations. But there are still people out there that want to donate, so if you do here is the link [PayPal](https://paypal.me/daangamesdg) or to [Ko-Fi](https://daangamesdg.xyz/kofi). Thanks in advance! I really appriciate it <3

## Lisence

Project is licensed under the © [**MIT License**](/LICENSE)

---
