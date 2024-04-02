import { TestMessage } from '@mjpowersjr/cicd-test-sdk'

const message = TestMessage.create({
    fieldOne: 'one',
    fieldTwo: 'two',
    fieldThree: 'three'
});

const buffer = TestMessage.encode(message).finish();

const decodedMessage = TestMessage.decode(buffer);

console.log({
    message,
    buffer,
    decodedMessage
});
