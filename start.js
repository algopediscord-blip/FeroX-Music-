const { spawn, execSync } = require('child_process');

try {
    console.log('Syncing database schema (npx prisma db push)...');
    execSync('npx prisma db push', { stdio: 'inherit' });
    console.log('Generating Prisma Client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
} catch (error) {
    console.error('Failed to sync database:', error);
}

console.log('Starting bot via npm run start...');
const child = spawn('npm', ['run', 'start'], { stdio: 'inherit', shell: true });

child.on('exit', (code) => {
    process.exit(code);
});
