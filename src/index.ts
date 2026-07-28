import { ShardingManager } from 'discord.js';
import { join } from 'path';
import 'dotenv/config';
import chalk from 'chalk';
import gradient from 'gradient-string';

console.clear();
const themeGradient = gradient('#FF00D9', '#00E7FF', '#AD00FF');

const ascii = `
    ███████╗███████╗██████╗  ██████╗ ██╗  ██╗
    ██╔════╝██╔════╝██╔══██╗██╔═══██╗╚██╗██╔╝
    █████╗  █████╗  ██████╔╝██║   ██║ ╚███╔╝ 
    ██╔══╝  ██╔══╝  ██╔══██╗██║   ██║ ██╔██╗ 
    ██║     ███████╗██║  ██║╚██████╔╝██╔╝ ██╗
    ╚═╝     ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝
`;

console.log(themeGradient.multiline(ascii));
console.log(chalk.gray('    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
console.log(chalk.gray(`    [SYSTEM] Initializing FeroX Sharding Manager...`));

const manager = new ShardingManager(join(__dirname, 'bot.ts'), {
  token: process.env.BOT_TOKEN,
  execArgv: ['-r', 'ts-node/register'] 
});

manager.on('shardCreate', shard => {
  const shardPrefix = themeGradient(`[SHARD #${shard.id}]`);
  console.log(`${shardPrefix} ${chalk.cyan('Launched successfully.')}`);

    shard.on('ready', () => {
    console.log(`${shardPrefix} ${chalk.greenBright('Operational and ready!')}`);
  });

  shard.on('disconnect', () => {
    console.log(`${shardPrefix} ${chalk.red('Disconnected from gateway.')}`);
  });

  shard.on('reconnecting', () => {
    console.log(`${shardPrefix} ${chalk.yellow('Attempting to reconnect...')}`);
  });
});

manager.spawn({ timeout: -1 }).catch(error => {
  console.error(chalk.red('[SHARDING ERROR]'), error);
});

