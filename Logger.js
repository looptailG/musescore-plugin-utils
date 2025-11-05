/*
	QML component for writing log messages from a MuseScore plugin.
	Copyright (C) 2024 - 2025 Alessandro Culatti

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const VERSION = "2.0.0";

let loggerId = null;

const TRACE = 0;
const INFO = 1;
const WARNING = 2;
const ERROR = 3;
const FATAL = 4;
let logLevel = ERROR;
let logLevels = [
	"TRACE",
	"INFO",
	"WARNING",
	"ERROR",
	"FATAL",
];

let logMessages = "";
let separator = "\t";

/**
 * Initialise the logger with input ID, and optionally with the input log level.
 * Also initialise the log file path with the current date time.
 */
function initialise(id, level)
{
	loggerId = id;
	loggerId.source = Qt.resolvedUrl(".").toString().substring(8) + "logs/" + getFileDateTime() + "_log.txt";
	
	if (level !== undefined)
	{
		logLevel = level;
	}
}

/**
 * Log the input message with the specified log level, or INFO if no log level
 * was specified.
 */
function log(message, level = INFO)
{
	if (level >= logLevel)
	{
		logMessages += `${getRFC3339DateTime()}${separator}${logLevels[level]}${separator}${message}\n`;
	}
}

/**
 * Write the log messages to the log file.
 */
function writeLogs()
{
	if (logMessages)
	{
		loggerId.write(logMessages);
	}
}

/**
 * Return the current date time in a format compatible with file names.
 */
function getFileDateTime()
{
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = String(currentDate.getMonth() + 1).padStart(2, "0");
	var day = String(currentDate.getDate()).padStart(2, "0");
	var hours = String(currentDate.getHours()).padStart(2, "0");
	var minutes = String(currentDate.getMinutes()).padStart(2, "0");
	var seconds = String(currentDate.getSeconds()).padStart(2, "0");
	return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}`;
}

/**
 * Return the current date time in the RFC3339 format.
 */
function getRFC3339DateTime()
{
	var currentDate = new Date();
	var year = currentDate.getFullYear();
	var month = String(currentDate.getMonth() + 1).padStart(2, "0");
	var day = String(currentDate.getDate()).padStart(2, "0");
	var hours = String(currentDate.getHours()).padStart(2, "0");
	var minutes = String(currentDate.getMinutes()).padStart(2, "0");
	var seconds = String(currentDate.getSeconds()).padStart(2, "0");
	var milliseconds = String(currentDate.getMilliseconds()).padStart(3, "0");
	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}
