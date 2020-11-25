const Pulsar = require('pulsar-client');
const { generateFakeItems } = require("./generator");

(async () => {
    const client = new Pulsar.Client({
        serviceUrl: 'pulsar://localhost:6650',
    });

    const producer = await client.createProducer({
        topic: 'my-topic',
    });

    const fakeItems = generateFakeItems(100);
    const promises = fakeItems.map((item) => {
        return producer.send({ data: Buffer.from(JSON.stringify(item)) });
    });
    await Promise.all(promises);

    await producer.close();
    await client.close();
})();

