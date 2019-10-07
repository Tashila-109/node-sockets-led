const io = require('socket.io-client');
const five = require('johnny-five');
const { EtherPortClient } = require('etherport-client');
const config = require('./config');

module.exports = () => {
	'use strict';

	// Connect to the socket server
	const socket = io.connect(config.url);

	const board = new five.Board({
		port: new EtherPortClient({
			host: '192.168.8.100',
			port: 3030
		}),
		repl: false
	});

	const LED_PIN = 13;

	board.on('ready', () => {
		board.pinMode(LED_PIN, five.Pin.OUTPUT); // Set pin 13 for LED

		const pin = five.Pin(LED_PIN);

		// Turn LED on when event led:on is received
		socket.on('led:on', function() {
			pin.high();
		});

		// Turn LED off when event led:off is received
		socket.on('led:off', function() {
			pin.low();
		});
	});
};
