/*
	A collection of functions and constants for iterating over a score.
	Copyright (C) 2024 - 2026 Alessandro Culatti

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

const VERSION = "1.1.0";

function iterate(curScore, actions, logger)
{
	let voicesFilter = actions.voicesFilter || null;
	let onStaffStart = actions.onStaffStart || null;
	let onNewMeasure = actions.onNewMeasure || null;
	let onClef = actions.onClef || null;
	let onKeySignature = actions.onKeySignature || null;
	let onTimeSignature = actions.onTimeSignature || null;
	let onAnnotation = actions.onAnnotation || null;
	let staffTextOnCurrentStaffOnly = (actions.staffTextOnCurrentStaffOnly !== undefined)
		? actions.staffTextOnCurrentStaffOnly : true;
	let onChord = actions.onChord || null;
	let onNote = actions.onNote || null;
	let onBarLine = actions.onBarLine || null;

	curScore.startCmd();
	let cursor = curScore.newCursor();

	// Calculate the portion of the score to iterate on.
	let startStaff;
	let endStaff;
	let startTick;
	let endTick;
	cursor.rewind(Cursor.SELECTION_START);
	if (!cursor.segment)
	{
		logger.log("Iterating on the entire score.");
		startStaff = 0;
		endStaff = curScore.nstaves - 1;
		startTick = 0;
		endTick = curScore.lastSegment.tick;
	}
	else
	{
		logger.log("Iterating only on the current selection.");
		startStaff = cursor.staffIdx;
		startTick = cursor.tick;
		cursor.rewind(Cursor.SELECTION_END);
		endStaff = cursor.staffIdx;
		if (cursor.tick == 0)
		{
			// If the selection includes the last note of the score, .rewind()
			// overflows and goes back to tick 0.  In this case, set the end
			// tick manually to the last tick of the score.
			endTick = curScore.lastSegment.tick;
		}
		else
		{
			endTick = cursor.tick;
		}
		logger.trace("Iterating only on ticks: " + startTick + " - " + endTick);
		logger.trace("Iterating only on staffs: " + startStaff + " - " + endStaff);
	}

	// Iterate on the score.
	for (let staff = startStaff; staff <= endStaff; staff++)
	{
		for (let voice = 0; voice < 4; voice++)
		{
			if (voicesFilter)
			{
				if (!voicesFilter.includes(voice))
				{
					logger.trace("Skipping voice: " + voice);
					continue;
				}
			}

			logger.log("Staff: " + staff + "; Voice: " + voice);

			cursor.voice = voice;
			cursor.staffIdx = staff;
			cursor.filter = Segment.All;

			if (onStaffStart)
			{
				onStaffStart();
			}

			if (startTick === 0)
			{
				// This is necessary in case nothing is selected before running
				// the plugin, in which case SELECTION_START is not initialised.
				cursor.rewind(Cursor.SCORE_START);
			}
			else
			{
				cursor.rewind(Cursor.SELECTION_START);
			}

			// Loop on the elements of the current staff.
			while (cursor.segment && (cursor.tick <= endTick))
			{
				if (onNewMeasure)
				{
					if (cursor.segment.tick === cursor.measure.firstSegment.tick)
					{
						onNewMeasure();
					}
				}

				if (onClef)
				{
					if (cursor.element && (cursor.element.type === Element.CLEF))
					{
						onClef(cursor.element);
					}
				}

				if (onKeySignature)
				{
					if (cursor.element && (cursor.element.type === Element.KEYSIG))
					{
						onKeySignature(cursor.element);
					}
				}

				if (onTimeSignature)
				{
					if (cursor.element && (cursor.element.type === Element.TIMESIG))
					{
						onTimeSignature(cursor.element);
					}
				}

				if (onAnnotation)
				{
					for (let i = 0; i < cursor.segment.annotations.length; i++)
					{
						let annotation = cursor.segment.annotations[i];
						if (staffTextOnCurrentStaffOnly && (annotation.type === Element.STAFF_TEXT))
						{
							// Call onAnnotation() only if the staff text is for
							// the current staff.
							let annotationPart = annotation.staff.part;
							if (!(
								(4 * staff >= annotationPart.startTrack)
								&& (4 * staff < annotationPart.endTrack)
							)) {
								continue;
							}
						}

						onAnnotation(annotation);
					}
				}

				if (onChord || onNote)
				{
					if (cursor.element && (cursor.element.type === Element.CHORD))
					{
						if (onChord)
						{
							onChord(cursor.element);
						}

						if (onNote)
						{
							let graceChords = cursor.element.graceNotes;
							for (let i = 0; i < graceChords.length; i++)
							{
								let notes = graceChords[i].notes;
								for (let j = 0; j < notes.length; j++)
								{
									onNote(notes[j]);
								}
							}

							let notes = cursor.element.notes;
							for (let i = 0; i < notes.length; i++)
							{
								onNote(notes[i]);
							}
						}
					}
				}

				if (onBarLine)
				{
					if (cursor.element && (cursor.element.type === Element.BAR_LINE))
					{
						onBarLine(cursor.element);
					}
				}

				cursor.next();
			}
		}
	}

	curScore.endCmd();
}
