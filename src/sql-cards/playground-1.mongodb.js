/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('ricardo-prueba');

db.cards.find();
db.cards.insertMany([
  {
    number: '1111222233334444',
    firstName: 'Alice',
    lastName: 'Smith',
    expirationDate: '06/25',
    cvv: '123',
    cardType: 'MasterCard',
    issueDate: '01/22',
    billingAddress: '123 Oak St, Townsville',
  },
  {
    number: '5555666677778888',
    firstName: 'Bob',
    lastName: 'Johnson',
    expirationDate: '09/24',
    cvv: '456',
    cardType: 'Visa',
    issueDate: '03/21',
    billingAddress: '456 Maple Ave, Citytown',
  },
  {
    number: '9999888877776666',
    firstName: 'Charlie',
    lastName: 'Brown',
    expirationDate: '12/23',
    cvv: '789',
    cardType: 'Amex',
    issueDate: '07/20',
    billingAddress: '789 Pine St, Villagetown',
  },
  {
    number: '7777666655554444',
    firstName: 'Eva',
    lastName: 'Davis',
    expirationDate: '08/22',
    cvv: '345',
    cardType: 'Visa',
    issueDate: '10/18',
    billingAddress: '345 Elm St, Hamlet',
  },
  {
    number: '1111222233334444',
    firstName: 'Alice',
    lastName: 'Smith',
    expirationDate: '06/25',
    cvv: '123',
    cardType: 'MasterCard',
    issueDate: '01/22',
    billingAddress: '123 Oak St, Townsville',
  },
  {
    number: '2222333344445555',
    firstName: 'Bob',
    lastName: 'Johnson',
    expirationDate: '08/23',
    cvv: '456',
    cardType: 'Visa',
    issueDate: '04/21',
    billingAddress: '456 Maple Ave, Cityville',
  },
  {
    number: '3333444455556666',
    firstName: 'Charlie',
    lastName: 'Davis',
    expirationDate: '02/24',
    cvv: '789',
    cardType: 'American Express',
    issueDate: '10/20',
    billingAddress: '789 Pine Ln, Villagetown',
  },
  {
    number: '4444555566667777',
    firstName: 'David',
    lastName: 'Taylor',
    expirationDate: '12/22',
    cvv: '234',
    cardType: 'Discover',
    issueDate: '06/21',
    billingAddress: '987 Cedar Rd, Hamletsville',
  },
]);
