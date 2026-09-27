# BRB Monitor

An Express and SQLite monitoring API built for a Discord world-buff notification bot.

> **Status:** Historical project. This repository is preserved as an example of the monitoring and reporting layer that supported the bot; it is not a turnkey application today.

## Purpose

BRB Monitor exposed operational data from the bot's SQLite database so a separate dashboard could show whether the service was healthy and how it was being used.

The API includes routes for:

- Current world-buff timers.
- Errors grouped by day.
- Notifications and users grouped by day.
- World-buff requests grouped by day.
- Open requests grouped by location.

## How it worked

```text
Discord bot -> SQLite database -> Express API -> monitoring dashboard
```

The Express application lives in `brbmon/api`. Each route runs a focused SQLite query and returns data formatted for the dashboard, including chart-ready labels and values.

## Technology

- Node.js and Express
- SQLite
- Jade templates
- REST-style JSON endpoints

## Repository limitations

- The original dashboard client is not included in this snapshot.
- The API expects the original bot database schema and a locally configured database path.
- The dependencies are from the project's original development period and should be upgraded before reuse.

This repository is best read as a historical backend and monitoring example rather than deployed as a current service.
