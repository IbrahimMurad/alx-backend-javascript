/* eslint-disable @typescript-eslint/no-unused-vars */
import { RowID, RowElement} from './interface';

function insertRow(row: RowElement): RowID;

function deleteRow(rowId: RowID): void;

function updateRow(rowId: RowID, row: RowElement): RowID;
