const Pulsar = require('pulsar-client');
const { insertResult } = require("./mongoClient");

const processDataItem = async (item) => {
    const { amount, transactionType, currencyCode, currencySymbol, account, accountName } = item;
    const itemToSave = {
        amount: amount * 1000,
        displayAmount: `${currencySymbol}${amount}`,
        transactionType,
        currencyCode,
        account: {
            accountId: account,
            accountName
        }
    };
    await insertResult(itemToSave);
};

(async () => {
    const client = new Pulsar.Client({
        serviceUrl: 'pulsar://localhost:6650',
    });

    const consumer = await client.subscribe({
        topic: 'persistent://public/default/my-topic',
        subscription: 'sub1',
        subscriptionType: 'Shared',
        ackTimeoutMs: 10000,
        listener: async (msg, msgConsumer) => {
            console.log();
            await processDataItem(JSON.parse(msg.getData().toString()));
            msgConsumer.acknowledge(msg);
        },
    });

    // await consumer.close();
    // await client.close();
})();