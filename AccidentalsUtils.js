/*
	A collection of functions and constants about accidentals.
	Copyright (C) 2024 Alessandro Culatti

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

const VERSION = "1.0.0-alpha";

const ACCIDENTAL_DATA = {
	"NONE":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP2":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT2":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP3":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT3":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -50,
	},
	"FLAT_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -150,
	},
	"NATURAL_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 50,
	},
	"NATURAL_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -50,
	},
	"SHARP_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 150,
	},
	"SHARP_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 50,
	},
	"SHARP2_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 250,
	},
	"SHARP2_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 150,
	},
	"FLAT2_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -150,
	},
	"FLAT2_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -250,
	},
	"ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -50,
	},
	"ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 50,
	},
	"MIRRORED_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -50,
	},
	"MIRRORED_FLAT2":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -150,
	},
	"SHARP_SLASH":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 50,
	},
	"SHARP_SLASH4":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 150,
	},
	"FLAT_SLASH2":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_SLASH":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_SLASH3":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_SLASH2":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_ONE_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_ONE_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_ONE_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_ONE_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_ONE_ARROW_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_ONE_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_ONE_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_ONE_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_ONE_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_ONE_ARROW_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_TWO_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_TWO_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_TWO_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_TWO_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_TWO_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_TWO_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_TWO_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_TWO_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_TWO_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_TWO_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_THREE_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_THREE_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_THREE_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_THREE_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_THREE_ARROWS_DOWN":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_THREE_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_THREE_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_THREE_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_THREE_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_THREE_ARROWS_UP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"LOWER_ONE_SEPTIMAL_COMMA":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"RAISE_ONE_SEPTIMAL_COMMA":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"LOWER_TWO_SEPTIMAL_COMMAS":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"RAISE_TWO_SEPTIMAL_COMMAS":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"LOWER_ONE_UNDECIMAL_QUARTERTONE":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"RAISE_ONE_UNDECIMAL_QUARTERTONE":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"LOWER_ONE_TRIDECIMAL_QUARTERTONE":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"RAISE_ONE_TRIDECIMAL_QUARTERTONE":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_FLAT_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"NATURAL_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SHARP_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"DOUBLE_SHARP_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"QUARTER_FLAT_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"QUARTER_SHARP_EQUAL_TEMPERED":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"FLAT_17":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -6.8,
	},
	"SHARP_17":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 6.8,
	},
	"FLAT_19":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -3.4,
	},
	"SHARP_19":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 3.4,
	},
	"FLAT_23":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -16.5,
	},
	"SHARP_23":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 16.5,
	},
	"FLAT_31":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -1.7,
	},
	"SHARP_31":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 1.7,
	},
	"FLAT_53":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -10.9,
	},
	"SHARP_53":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 10.9,
	},
	"SORI":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 33,
	},
	"KORON":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -67,
	},
	"TEN_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -167,
	},
	"TEN_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 167,
	},
	"ELEVEN_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -183,
	},
	"ELEVEN_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 183,
	},
	"ONE_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -17,
	},
	"ONE_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 17,
	},
	"TWO_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -33,
	},
	"TWO_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 33,
	},
	"THREE_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -50,
	},
	"THREE_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 50,
	},
	"FOUR_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -67,
	},
	"FOUR_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 67,
	},
	"FIVE_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -83,
	},
	"FIVE_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 83,
	},
	"SIX_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SIX_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 0,
	},
	"SEVEN_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -116,
	},
	"SEVEN_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 116,
	},
	"EIGHT_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -133,
	},
	"EIGHT_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 133,
	},
	"NINE_TWELFTH_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -150,
	},
	"NINE_TWELFTH_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 150,
	},
	"SAGITTAL_5V7KD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -5.8,
	},
	"SAGITTAL_5V7KU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 5.8,
	},
	"SAGITTAL_5CD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -21.5,
	},
	"SAGITTAL_5CU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 21.5,
	},
	"SAGITTAL_7CD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -27.3,
	},
	"SAGITTAL_7CU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 27.3,
	},
	"SAGITTAL_25SDD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -43.0,
	},
	"SAGITTAL_25SDU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 43.0,
	},
	"SAGITTAL_35MDD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -48.8,
	},
	"SAGITTAL_35MDU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 48.8,
	},
	"SAGITTAL_11MDD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -53.3,
	},
	"SAGITTAL_11MDU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 53.3,
	},
	"SAGITTAL_11LDD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -60.4,
	},
	"SAGITTAL_11LDU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 60.4,
	},
	"SAGITTAL_35LDD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -64.9,
	},
	"SAGITTAL_35LDU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 64.9,
	},
	"SAGITTAL_FLAT25SU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -70.7,
	},
	"SAGITTAL_SHARP25SD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 70.7,
	},
	"SAGITTAL_FLAT7CU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -86.4,
	},
	"SAGITTAL_SHARP7CD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 86.4,
	},
	"SAGITTAL_SHARP5CD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -92.2,
	},
	"SAGITTAL_SHARP5V7KD":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 92.2,
	},
	"SAGITTAL_FLAT5CU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -107.9,
	},
	"SAGITTAL_FLAT5V7KU":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 107.9,
	},
	"SAGITTAL_FLAT":
	{
		"TPC": false,
		"DEFAULT_OFFSET": -113.7,
	},
	"SAGITTAL_SHARP":
	{
		"TPC": false,
		"DEFAULT_OFFSET": 113.7,
	},
};
