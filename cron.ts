export function applyCron() {
  Deno.cron("execute every minute", "* * * * *", () => {
    console.log("Hello World!!");
  });
}
