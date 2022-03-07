// Stefan Olivier
// Description: Common types for AAP production related data

export enum PrepSuites {
    ws_one = 1,
    ws_two,
    ws_three,
    ws_four,
    ws_five,
    ws_six,
    ws_seven,
    ws_eight,
    ws_nine,
    ws_ten,
    east,
    south,
    west,
    unknown,
};

export function string_to_prep_suite(suite: string): PrepSuites {
    const sanitized = suite.toLowerCase().trim();
    switch (sanitized) {
        case '1': return PrepSuites.ws_one;
        case '2': return PrepSuites.ws_two;
        case '3': return PrepSuites.ws_three;
        case '4': return PrepSuites.ws_four;
        case '5': return PrepSuites.ws_five;
        case '6': return PrepSuites.ws_six;
        case '7': return PrepSuites.ws_seven;
        case '8': return PrepSuites.ws_eight;
        case '9': return PrepSuites.ws_nine;
        case '10': return PrepSuites.ws_ten;
        case 'w': case 'west': return PrepSuites.west;
        case 's': case 'south': return PrepSuites.south;
        case 'e': case 'east': return PrepSuites.east;
        case 'unknown': return PrepSuites.unknown;
        default: throw new Error(`[ERROR] could not determine prep suite from string value ${suite}`);
    }
}

export enum PrepType {
    v1,
    v2,
}

export const PREP_ENTRY_SIZE: number = 7;
export interface IPrepEntry {
    date: Date,
    suite: PrepSuites,
    employee: string,
    start: Date,
    tcin: Date,
    tcout: Date,
    end: Date,
};

export type PrepEntry = IPrepEntry;

export function create_prep_entry(date = new Date(),
                                  suite = PrepSuites.unknown,
                                  employee = '',
                                  start = new Date(),
                                  end = new Date(),
                                  tcin = new Date(),
                                  tcout = new Date()): PrepEntry
{
    return { date, suite, employee, start, end, tcin, tcout };  
}
