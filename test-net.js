import net from 'net';

const host = 'aws-0-sa-east-1.pooler.supabase.com';
const port = 6543;

console.log(`Testing socket connection to ${host}:${port}...`);

const socket = net.createConnection(port, host, () => {
    console.log('CONNECTED to host!');
    socket.end();
    process.exit(0);
});

socket.on('error', (err) => {
    console.error('CONNECTION FAILED:');
    console.error(err);
    process.exit(1);
});

setTimeout(() => {
    console.error('CONNECTION TIMED OUT');
    process.exit(1);
}, 5000);
