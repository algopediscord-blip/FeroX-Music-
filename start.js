const { spawn, execSync } = require('child_process');
const fs = require('fs');

try {
    console.log('[SYSTEM] Syncing database schema...');
    execSync('npx prisma db push', { stdio: 'inherit' });
    console.log('[SYSTEM] Generating Prisma Client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    console.log('[SYSTEM] Compiling TypeScript to production JavaScript...');
    execSync('npx tsc', { stdio: 'inherit' });
} catch (error) {
    console.error('[SYSTEM WARNING] Pre-start build step encountered an error:', error);
}

const targetFile = fs.existsSync('./dist/index.js') ? './dist/index.js' : 'src/index.js';
console.log(`[SYSTEM] Starting bot with low-RAM optimization (${targetFile})...`);

const child = spawn('node', ['--max-old-space-size=256', targetFile], { stdio: 'inherit' });

child.on('exit', (code) => {
    process.exit(code);
});
