import { createApp, createRouter, defineEventHandler } from "h3";

const app = createApp();
const router = createRouter();
app.use(router);

router.get(
	"/",
	defineEventHandler(() => {
		return "Hello, world!";
	}),
);
